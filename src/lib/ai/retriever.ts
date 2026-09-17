import { getPortfolioKnowledge, KnowledgeItem } from "./knowledge";

export interface RetrievalResult {
  items: KnowledgeItem[];
  sources: { title: string; link?: string; githubUrl?: string }[];
  formattedContext: string;
}

/**
 * Tokenizes a query into clean search tokens
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

/**
 * Domain-specific keyword synonym expander
 */
const SYNONYM_MAP: Record<string, string[]> = {
  java: ["spring", "springboot", "backend", "microservices", "jpa", "hibernate"],
  spring: ["java", "springboot", "backend", "rest"],
  backend: ["java", "spring", "api", "rest", "postgresql"],
  grc: ["governance", "risk", "compliance", "audit", "iso", "nist", "soc", "pci"],
  security: ["cybersecurity", "grc", "iso", "controls", "audit", "access"],
  cloud: ["aws", "devops", "docker", "terraform", "s3", "ec2"],
  aws: ["cloud", "s3", "ec2", "rds", "lambda", "cloudwatch"],
  ai: ["genai", "generative", "llm", "agentic", "ml", "machine learning"],
  genai: ["ai", "generative", "agentic", "llm", "prompt"],
  cert: ["certification", "credentials", "oracle", "google", "coursera"],
  certs: ["certification", "credentials", "oracle", "google", "coursera"],
  job: ["experience", "work", "hcltech", "internship", "employment"],
  work: ["experience", "job", "hcltech", "internship", "employment"],
  hcl: ["hcltech", "experience", "developer", "work"],
  college: ["education", "degree", "university", "sppu", "jscoe", "cgpa"],
};

/**
 * Retrieves the most relevant knowledge items matching the user query
 */
export function retrieveRelevantContext(query: string, maxItems: number = 4): RetrievalResult {
  const allKnowledge = getPortfolioKnowledge();
  const rawTokens = tokenize(query);

  // Expand tokens with synonyms
  const queryTokens = new Set<string>(rawTokens);
  rawTokens.forEach((tok) => {
    if (SYNONYM_MAP[tok]) {
      SYNONYM_MAP[tok].forEach((syn) => queryTokens.add(syn));
    }
  });

  const scored = allKnowledge.map((item) => {
    let score = 0;
    const lowerTitle = item.title.toLowerCase();
    const lowerSummary = item.summary.toLowerCase();
    const lowerDetails = item.details.toLowerCase();

    // Direct title matching gets highest weight
    queryTokens.forEach((token) => {
      if (lowerTitle.includes(token)) score += 12;
      if (item.keywords.some((k) => k.includes(token))) score += 6;
      if (lowerSummary.includes(token)) score += 4;
      if (lowerDetails.includes(token)) score += 2;
    });

    // Exact phrase bonus
    if (query.trim().length > 3 && (lowerTitle.includes(query.toLowerCase()) || lowerDetails.includes(query.toLowerCase()))) {
      score += 15;
    }

    return { item, score };
  });

  // Sort descending by score
  scored.sort((a, b) => b.score - a.score);

  // Take top items with score > 0, fallback to general profile summary if score is low
  let selected = scored.filter((s) => s.score > 0).slice(0, maxItems).map((s) => s.item);

  // If query is broad or greeting, always ensure profile is present
  if (selected.length === 0 || rawTokens.some((t) => ["who", "summary", "about", "hi", "hello", "hey"].includes(t))) {
    const profileItem = allKnowledge.find((k) => k.id === "profile-main");
    if (profileItem && !selected.some((s) => s.id === "profile-main")) {
      selected = [profileItem, ...selected.slice(0, maxItems - 1)];
    }
  }

  // Format context for LLM injection
  const formattedContext = selected
    .map((item, idx) => {
      return `[DOCUMENT ${idx + 1}: ${item.title}]\nCategory: ${item.category.toUpperCase()}\n${item.details}`;
    })
    .join("\n\n---\n\n");

  // Extract sources
  const sources = selected.map((item) => ({
    title: item.title,
    link: item.link,
    githubUrl: item.githubUrl,
  }));

  return {
    items: selected,
    sources,
    formattedContext,
  };
}
