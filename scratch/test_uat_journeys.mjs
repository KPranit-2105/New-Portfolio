import http from "http";

const BASE_URL = "http://localhost:3000";

async function runUATJourneys() {
  console.log("=== STARTING UAT USER JOURNEY VALIDATION ===");
  let passed = 0;
  let failed = 0;

  function assert(name, condition) {
    if (condition) {
      console.log(`[PASS] [UAT] ${name}`);
      passed++;
    } else {
      console.error(`[FAIL] [UAT] ${name}`);
      failed++;
    }
  }

  // JOURNEY 1: General Executive Recruiter
  console.log("\n--- UAT Journey 1: Executive Recruiter ---");
  const j1Root = await (await fetch(`${BASE_URL}/`)).text();
  assert("J1.1: Recruiter lands and sees target profile and title", 
    j1Root.includes("Pranit K") && j1Root.includes("AI Governance and Cloud Security"));
  assert("J1.2: Recruiter navigates to projects section (#projects)", 
    j1Root.includes('id="projects"'));
  assert("J1.3: Recruiter sees GitHub profile link", 
    j1Root.includes("https://github.com/kPranit-2105"));
  assert("J1.4: Recruiter sees LinkedIn profile link", 
    j1Root.includes("https://linkedin.com/in/kpranit.in"));

  // JOURNEY 2: Technical Java Recruiter
  console.log("\n--- UAT Journey 2: Technical Java Backend Recruiter ---");
  assert("J2.1: Technical recruiter finds Skills section (#skills)", 
    j1Root.includes('id="skills"'));
  assert("J2.2: Technical skills include Java, Spring Boot, PostgreSQL, AWS", 
    j1Root.includes("Java") && j1Root.includes("Spring Boot") && j1Root.includes("PostgreSQL"));
  assert("J2.3: Experience section details HCLTech tenure", 
    j1Root.includes("HCLTech"));
  assert("J2.4: Resume section offers direct PDF download link", 
    j1Root.includes('id="resume"') && j1Root.includes("/resume.pdf"));

  // JOURNEY 3: GRC & Cloud Security Specialist Recruiter
  console.log("\n--- UAT Journey 3: GRC / Cloud Security Recruiter ---");
  assert("J3.1: GRC recruiter finds ISO 27001, NIST, and SOC 2 frameworks", 
    j1Root.includes("ISO/IEC 27001") || j1Root.includes("NIST") || j1Root.includes("SOC 2"));
  assert("J3.2: FAQ answers GRC transition & certification inquiries", 
    j1Root.includes('id="faq"') && j1Root.includes("Frequently Asked Questions"));
  assert("J3.3: Contact section contains structured GRC inquiry classification", 
    j1Root.includes('id="contact"') && j1Root.includes("Inquiry"));

  // JOURNEY 4: Interactive AI Assistant Recruiter
  console.log("\n--- UAT Journey 4: Interactive AI Assistant Evaluation ---");
  const aiTest = await (await fetch(`${BASE_URL}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "What certifications does Pranit hold?" })
  })).json();
  assert("J4.1: AI Assistant accurately summarizes credentials", 
    aiTest.success === true && (aiTest.answer.toLowerCase().includes("oracle") || aiTest.answer.toLowerCase().includes("certification")));

  console.log(`\n========================================`);
  console.log(`UAT SUMMARY: ${passed} PASSED | ${failed} FAILED`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

runUATJourneys();
