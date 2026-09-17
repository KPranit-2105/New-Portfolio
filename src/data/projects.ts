import { Project } from "@/types";

export const projectsData: Project[] = [
  // -------------------------------------------------------------
  // 1. PayNova GRC360 Framework (Primary Featured GRC Project)
  // -------------------------------------------------------------
  {
    id: "paynova-grc360",
    title: "PayNova GRC360: Enterprise Risk & Compliance Control Assurance",
    subtitle: "End-to-End Governance, Technology Risk Management & ServiceNow GRC Program",
    category: "GRC & Cybersecurity",
    summary:
      "An end-to-end Governance, Risk & Compliance (GRC) program covering enterprise technology risk management, control assurance, compliance cross-mapping, third-party vendor risk, audit management, remediation tracking, evidence management, executive reporting, and ServiceNow GRC module implementation.",
    problemStatement:
      "Financial technology platforms face complex multi-framework compliance requirements (PCI DSS, ISO 27001, SOC 2, NIST 800-53), fragmented risk registers, and labor-intensive manual audit evidence gathering.",
    solution:
      "Designed and implemented a unified GRC architecture establishing automated control cross-walking, continuous evidence collection workflows, standardized risk scoring matrices (FAIR / NIST 800-30), and executive risk reporting dashboards.",
    toolsUsed: ["ServiceNow GRC", "Jira Service Management", "Confluence", "Python", "AWS Config", "Excel Risk Matrix"],
    responsibilities: [
      "Mapped 100+ technical security controls across ISO/IEC 27001:2022 Annex A, NIST SP 800-53, and PCI DSS v4.0.",
      "Engineered automated compliance evidence request workflows in ServiceNow GRC to streamline CPA auditor reviews.",
      "Established quantitative risk scoring formulas (Likelihood x Impact) to prioritize remediation tickets for engineering teams.",
      "Authored 18 baseline security governance policies including Access Control, Asset Management, and Incident Response.",
    ],
    businessImpact: [
      "Streamlined multi-framework compliance mapping, reducing duplicate control testing efforts by 45%.",
      "Accelerated external audit evidence collection turnaround from weeks to real-time automated API pulls.",
      "Provided executive leadership with real-time risk posture visibility across cloud and on-premise infrastructure.",
    ],
    keyLearnings: [
      "Unified control frameworks prevent audit fatigue by allowing single-evidence collection for multiple compliance standards.",
      "Integrating GRC platforms directly into developer ticketing systems ensures timely risk remediation.",
    ],
    frameworks: ["ISO/IEC 27001:2022", "NIST SP 800-53 Rev. 5", "PCI DSS v4.0", "SOC 2 Type II", "FAIR Risk Taxonomy"],
    date: "2026",
    featured: true,
    githubUrl: "https://github.com/KPranit-2105/PayNova-GRC360-Enterprise-Risk-Compliance-Control-Assurance-Framework",
  },

  // -------------------------------------------------------------
  // 2. CloudDesk GRC360 SaaS Security & Technology Risk
  // -------------------------------------------------------------
  {
    id: "clouddesk-grc360",
    title: "CloudDesk GRC360: SaaS Security, Compliance & Technology Risk",
    subtitle: "Cloud Compliance Automation & Multi-Account Risk Management",
    category: "GRC & Cybersecurity",
    summary:
      "Comprehensive SaaS cloud security governance framework evaluating cloud security controls, continuous compliance monitoring, IAM permission boundaries, and multi-tenant cloud risk posture.",
    problemStatement:
      "SaaS cloud growth introduces rapid configuration drift, shadow IT deployments, unencrypted storage buckets, and inconsistent IAM privilege boundaries.",
    solution:
      "Architected a cloud compliance monitoring framework leveraging CIS AWS Foundations benchmarks, automated risk scoring, and continuous posture evaluation across cloud environments.",
    toolsUsed: ["AWS Security Hub", "AWS CloudTrail", "Python (Boto3)", "ServiceNow GRC", "Terraform"],
    responsibilities: [
      "Evaluated cloud infrastructure against CIS AWS Benchmarks and NIST 800-53 control families (AC, AU, SC).",
      "Constructed cloud risk treatment plans identifying high-exposure IAM roles and unencrypted data stores.",
      "Integrated automated cloud security checks into CI/CD deployment pipelines.",
    ],
    businessImpact: [
      "Improved cloud compliance benchmark scores from 64% to 95% within 90 days.",
      "Remediated critical public bucket access exposure vulnerabilities across multi-account environments.",
    ],
    keyLearnings: [
      "Automated cloud posture monitoring provides higher audit confidence than periodic manual reviews.",
    ],
    frameworks: ["NIST SP 800-53", "CIS AWS Foundations", "SOC 2 Trust Services Criteria"],
    date: "2026",
    featured: true,
    githubUrl: "https://github.com/KPranit-2105/CloudDesk-GRC360-SaaS-Security-Compliance-Technology-Risk",
  },

  // -------------------------------------------------------------
  // 3. CoreStack Enterprise Microservices Platform (Java Backend Featured)
  // -------------------------------------------------------------
  {
    id: "corestack-microservices",
    title: "CoreStack: Enterprise Java Spring Boot Microservices Platform",
    subtitle: "Distributed Microservices Architecture, API Gateway, OAuth2/JWT & Docker Containerization",
    category: "Java Backend",
    summary:
      "Enterprise-grade Java Spring Boot microservices platform featuring API Gateway routing, OAuth2/JWT security, PostgreSQL database persistence, Redis caching, and Docker container orchestration.",
    problemStatement:
      "Monolithic application bottlenecks impede independent service scaling, create single points of failure, and complicate access control authorization across modules.",
    solution:
      "Architected a decoupled microservices architecture with a centralized API Gateway handling request routing, JWT authentication, rate limiting, and centralized logging across downstream Spring Boot services.",
    toolsUsed: ["Java 17/21", "Spring Boot 3", "Spring Cloud Gateway", "Spring Security", "OAuth2 / JWT", "PostgreSQL", "Redis", "Docker"],
    responsibilities: [
      "Designed and implemented Spring Cloud API Gateway for transparent request proxying and endpoint abstraction.",
      "Configured Spring Security with stateless JWT token validation and fine-grained Role-Based Access Control (RBAC).",
      "Containerized microservices using multi-stage Dockerfiles and orchestrated deployments with Docker Compose.",
    ],
    businessImpact: [
      "Decoupled backend infrastructure into independently scalable, fault-tolerant microservices.",
      "Enforced rigid security boundaries across internal REST API endpoints via centralized token validation.",
    ],
    keyLearnings: [
      "Stateless JWT validation at the API Gateway layer offloads authentication processing from downstream services.",
    ],
    frameworks: ["Spring Boot", "Spring Cloud", "REST API", "Docker", "OAuth2"],
    date: "2026",
    featured: true,
    githubUrl: "https://github.com/KPranit-2105/CoreStack-Enterprise-Microservices-Platform",
  },

  // -------------------------------------------------------------
  // 4. MediCloud GRC360 Healthcare Privacy & Compliance
  // -------------------------------------------------------------
  {
    id: "medicloud-grc360",
    title: "MediCloud GRC360: Healthcare Risk, Privacy & Compliance Assurance",
    subtitle: "HIPAA Security Rule & GDPR Health Data Protection Framework",
    category: "Compliance & Audit",
    summary:
      "Healthcare risk management, privacy assurance, and regulatory compliance framework designed for cloud-hosted Protected Health Information (PHI) under HIPAA Security & Privacy Rules and GDPR.",
    problemStatement:
      "Healthcare data systems face severe regulatory penalties for unencrypted PHI storage, non-compliant vendor integrations, and audit trail gaps.",
    solution:
      "Established a HIPAA Security Rule control matrix covering Administrative, Physical, and Technical Safeguards, combined with automated audit log reviews and data loss prevention policies.",
    toolsUsed: ["AWS KMS", "CloudWatch Logs", "Excel Risk Matrix", "ServiceNow GRC"],
    responsibilities: [
      "Assessed technical controls against HIPAA 45 CFR Part 164 (Encryption, Access Control, Audit Controls).",
      "Drafted Business Associate Agreement (BAA) vendor evaluation checklists for third-party medical software.",
      "Configured immutable log retention policies ensuring audit compliance for healthcare data access.",
    ],
    businessImpact: [
      "Verified 100% compliance alignment across HIPAA Security Rule technical safeguards.",
      "Minimized regulatory breach risk by enforcing KMS customer-managed encryption keys on all stored PHI data.",
    ],
    keyLearnings: [
      "Healthcare compliance requires strict segregation between operational system logs and sensitive patient data.",
    ],
    frameworks: ["HIPAA Security Rule", "HIPAA Privacy Rule", "GDPR", "NIST SP 800-66"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/MediCloud-GRC360-Healthcare-Risk-Privacy-Compliance-Assurance",
  },

  // -------------------------------------------------------------
  // 5. ShopSphere GRC360 Third-Party Risk & Vendor Assurance
  // -------------------------------------------------------------
  {
    id: "shopsphere-grc360",
    title: "ShopSphere GRC360: Third-Party Risk & Vendor Security Assurance",
    subtitle: "Supply Chain Risk Management & Vendor Evaluation Program",
    category: "Risk Assessment",
    summary:
      "Enterprise Third-Party Risk Management (TPRM) framework evaluating vendor security postures, supply chain risks, and third-party SaaS integrations using SIG questionnaires and threat analysis.",
    problemStatement:
      "Third-party vendor SaaS tools present unquantified supply chain risks, exposing core customer data to vendor security breaches.",
    solution:
      "Engineered a 4-tier vendor risk classification system (Critical, High, Medium, Low) incorporating Standardized Information Gathering (SIG) questionnaires, SOC 2 report reviews, and forced SLA remediations.",
    toolsUsed: ["OneTrust", "Excel Risk Model", "Jira", "Confluence"],
    responsibilities: [
      "Evaluated third-party vendor SOC 2 Type II reports and ISO 27001 certifications for control exceptions.",
      "Issued vendor risk ratings and forced remediation timelines for vendors with missing encryption or weak IAM.",
      "Collaborated with Procurement to mandate Data Processing Addendums (DPA) in vendor contracts.",
    ],
    businessImpact: [
      "Assessed 100% of critical SaaS vendors, identifying and mitigating supply chain security risks.",
      "Established standard 5-day SLA turnarounds for new vendor security intake reviews.",
    ],
    keyLearnings: [
      "Contractual security clauses are essential to compel third-party vendors to remediate audit findings.",
    ],
    frameworks: ["NIST SP 800-161", "SIG Lite / Core", "ISO/IEC 27036"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/ShopSphere-GRC360-Third-Party-Risk-Vendor-Assurance",
  },

  // -------------------------------------------------------------
  // 6. IndusMach GRC360 IT & OT Cybersecurity Risk
  // -------------------------------------------------------------
  {
    id: "indusmach-grc360",
    title: "IndusMach GRC360: IT & OT Industrial Cybersecurity Risk & Compliance",
    subtitle: "Operational Technology (OT) Risk Assurance & Industrial Control Systems Security",
    category: "Risk Assessment",
    summary:
      "Cybersecurity risk and compliance management framework tailored for converging IT and Industrial Control System (ICS/SCADA) Operational Technology (OT) environments.",
    problemStatement:
      "Legacy OT industrial machinery lacks native security controls, creating cyber vulnerability exposure when connected to enterprise IT networks.",
    solution:
      "Implemented network segmentation verification, Purdue Model architecture reviews, and NIST SP 800-82 / IEC 62443 industrial control security risk assessments.",
    toolsUsed: ["NIST SP 800-82", "Wireshark", "Excel Risk Matrix", "Confluence"],
    responsibilities: [
      "Conducted risk assessments evaluating IT/OT boundary security, air-gap integrity, and remote access protocols.",
      "Designed compensating security controls for legacy industrial hardware unable to support modern encryption.",
    ],
    businessImpact: [
      "Hardened critical industrial infrastructure against unauthorized network cross-traversal.",
      "Established documented incident response playbooks tailored specifically for OT operational downtime.",
    ],
    keyLearnings: [
      "OT security prioritizes continuous availability and physical safety alongside traditional confidentiality.",
    ],
    frameworks: ["NIST SP 800-82", "IEC 62443", "NIST CSF 2.0"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/IndusMach-GRC360-IT-OT-Cybersecurity-Risk-Compliance",
  },

  // -------------------------------------------------------------
  // 7. Cloud Security CI/CD Security Pipeline (Cloud & DevOps)
  // -------------------------------------------------------------
  {
    id: "cloud-sec-cicd-pipeline",
    title: "Cloud Security Automated CI/CD Security Pipeline & OPA Policy Enforcement",
    subtitle: "Infrastructure-as-Code Scanning, Rego Policies & Automated Gatekeeper Checks",
    category: "Cloud & DevOps",
    summary:
      "Automated CI/CD security scanning pipeline integrating Infrastructure-as-Code (IaC) security checks, static code analysis, and Open Policy Agent (OPA) Rego policy enforcement to prevent security drift.",
    problemStatement:
      "Manual security reviews fail to catch misconfigured Terraform files, unencrypted storage, or open security groups prior to deployment.",
    solution:
      "Constructed automated GitHub Actions workflow steps executing Checkov, Trivy, and custom OPA Rego policy rules on every pull request, blocking non-compliant infrastructure deployments.",
    toolsUsed: ["Open Policy Agent (OPA / Rego)", "Checkov", "Trivy", "GitHub Actions", "Terraform", "Shell Scripting"],
    responsibilities: [
      "Authored custom Rego policies enforcing encryption-at-rest and strict security group ingress rules.",
      "Integrated automated security gatekeeper checks into CI/CD deployment pipelines.",
      "Configured automated vulnerability reporting for container image builds.",
    ],
    businessImpact: [
      "Shifted security testing left into dev workflows, preventing 100% of IaC misconfigurations before deployment.",
      "Reduced pull request security review overhead from hours to automated instant checks.",
    ],
    keyLearnings: [
      "Embedding security policies as executable code (Policy-as-Code) ensures consistent compliance enforcement.",
    ],
    frameworks: ["CIS Benchmarks", "Policy-as-Code (OPA)", "DevSecOps"],
    date: "2026",
    featured: true,
    githubUrl: "https://github.com/KPranit-2105/Cloud-Security-CI-CD-Security-Pipeline",
  },

  // -------------------------------------------------------------
  // 8. AI Governance EU AI Act High-Risk Assessment (AI & GenAI Featured)
  // -------------------------------------------------------------
  {
    id: "eu-ai-act-assessment",
    title: "EU AI Act High-Risk System Assessment & Algorithmic Risk Governance",
    subtitle: "Conformity Evaluation, Model Transparency & Regulatory Compliance Framework",
    category: "AI & GenAI",
    summary:
      "Risk assessment framework aligned with the EU AI Act compliance requirements, classifying artificial intelligence systems by risk category, evaluating algorithmic transparency, data governance, and human oversight.",
    problemStatement:
      "Organizations deploying AI and machine learning models face strict regulatory penalties under emerging European Union AI Act mandates without standardized risk classification templates.",
    solution:
      "Developed a comprehensive EU AI Act conformity assessment questionnaire and technical documentation framework determining high-risk classification criteria, training data bias audits, and model explainability.",
    toolsUsed: ["Python", "NIST AI RMF", "Excel Risk Matrix", "Markdown Documentation"],
    responsibilities: [
      "Categorized AI systems according to EU AI Act risk tiers (Unacceptable, High Risk, Specific Transparency, Minimal Risk).",
      "Evaluated training data quality, data lineage, and bias mitigation protocols for automated decision systems.",
      "Designed Human-in-the-Loop (HITL) oversight procedures and technical documentation templates.",
    ],
    businessImpact: [
      "Provided structured regulatory compliance roadmap for enterprise AI deployments in European markets.",
      "Established verifiable documentation standards for algorithmic risk transparency and model oversight.",
    ],
    keyLearnings: [
      "AI governance requires combining traditional data privacy principles with statistical model explainability.",
    ],
    frameworks: ["EU AI Act", "NIST AI Risk Management Framework (AI RMF)", "ISO/IEC 42001"],
    date: "2026",
    featured: true,
    githubUrl: "https://github.com/KPranit-2105/03-EU-AI-Act-High-Risk-Assessment-",
  },

  // -------------------------------------------------------------
  // 9. AI-Driven Lead Scoring Engine (AI & GenAI / ML)
  // -------------------------------------------------------------
  {
    id: "ai-lead-scoring-engine",
    title: "AI-Driven Lead Scoring & Customer Acquisition Engine",
    subtitle: "Predictive Machine Learning Classification & Feature Engineering",
    category: "AI & GenAI",
    summary:
      "Predictive machine learning pipeline estimating customer lead conversion probability based on demographic, behavioral, and engagement feature vectors to optimize sales resource allocation.",
    problemStatement:
      "Sales teams waste time on low-intent leads due to manual lead qualification, resulting in lower conversion rates and inefficient customer acquisition cost.",
    solution:
      "Engineered an automated Python machine learning model executing data preprocessing, feature encoding, model training, cross-validation, and lead propensity scoring.",
    toolsUsed: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    responsibilities: [
      "Preprocessed raw customer interaction datasets, handling missing values and feature scaling.",
      "Trained classification models (Logistic Regression, Random Forest) evaluating ROC-AUC and precision metrics.",
      "Generated actionable lead score tiers prioritizing high-intent prospects for outreach.",
    ],
    businessImpact: [
      "Automated lead propensity scoring, allowing sales teams to focus resources on top-tier prospects.",
      "Demonstrated practical machine learning model pipeline deployment using Python data science libraries.",
    ],
    keyLearnings: [
      "Feature engineering and data cleaning have a higher impact on model predictive performance than hyperparameter tuning.",
    ],
    frameworks: ["Machine Learning", "Scikit-Learn", "Predictive Analytics"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/AI-Driven-Lead-Scoring-Customer-Acquisition-Engine",
  },

  // -------------------------------------------------------------
  // 10. AI Governance System Inventory & Responsible AI Policy
  // -------------------------------------------------------------
  {
    id: "ai-gov-inventory-policy",
    title: "Enterprise AI System Inventory & Responsible AI Policy Suite",
    subtitle: "Algorithmic Model Cataloging, Ethical AI Governance & Incident Response Playbooks",
    category: "GRC & Cybersecurity",
    summary:
      "Comprehensive AI governance program establishing an enterprise AI system registration inventory, Responsible AI policy guidelines, algorithmic risk assessment methodologies, and specialized AI incident response playbooks.",
    problemStatement:
      "Unmanaged shadow AI deployments create IP leakage, algorithmic bias, model drift, and regulatory non-compliance risks across corporate environments.",
    solution:
      "Constructed a centralized AI System Catalog tracking model metadata, training data sources, and risk ratings, combined with incident playbooks addressing model hallucination, data poisoning, and unauthorized model access.",
    toolsUsed: ["Markdown", "Python", "Confluence Governance Suite", "NIST AI RMF"],
    responsibilities: [
      "Authored 5 enterprise AI governance modules covering Model Registration, Risk Assessment, and Responsible Use.",
      "Created incident response playbooks for AI-specific security events (Model Inversion, Prompt Injection, Drift).",
      "Designed AI model risk evaluation matrices scoring bias, safety, and operational impact.",
    ],
    businessImpact: [
      "Established 100% visibility over deployed organizational AI models and third-party LLM API integrations.",
      "Provided incident escalation procedures for emerging generative AI security threats.",
    ],
    keyLearnings: [
      "AI incident response must include model rollback protocols alongside standard IT containment steps.",
    ],
    frameworks: ["NIST AI RMF 1.0", "ISO/IEC 42001", "EU AI Act"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/AI-Governance-AI-System-Inventory",
  },

  // -------------------------------------------------------------
  // 11. ISO 27001 Statement of Applicability (SoA) Framework
  // -------------------------------------------------------------
  {
    id: "iso27001-soa-framework",
    title: "ISO/IEC 27001:2022 Statement of Applicability (SoA) Audit Tool",
    subtitle: "Annex A Controls Mapping & Implementation Justification Matrix",
    category: "Compliance & Audit",
    summary:
      "Automated Statement of Applicability (SoA) evaluation matrix mapping all 93 ISO/IEC 27001:2022 Annex A control objectives to operational technical evidence, inclusion/exclusion rationales, and control ownership.",
    problemStatement:
      "Drafting and maintaining an audit-defensible Statement of Applicability is difficult due to changing technical scope and complex control dependencies across Annex A domains.",
    solution:
      "Constructed a structured SoA matrix detailing control inclusion criteria, technical implementation evidence links, and formal exclusion justifications required for Stage 1 external certification audits.",
    toolsUsed: ["Excel", "Python", "AuditBoard", "ISO 27001:2022 Annex A"],
    responsibilities: [
      "Evaluated all 93 Annex A controls across Organizational (5.x), People (6.x), Physical (7.x), and Technical (8.x).",
      "Authored audit-ready justification statements for both included and excluded control objectives.",
    ],
    businessImpact: [
      "Prepared organization for Stage 1 ISO 27001 audit with a 100% verified control mapping matrix.",
      "Reduced time required for annual SoA audit recertification reviews.",
    ],
    keyLearnings: [
      "Clear exclusion rationales are just as critical to auditors as inclusion justifications.",
    ],
    frameworks: ["ISO/IEC 27001:2022", "ISO/IEC 27002:2022"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/ISO-27001_statement-of-applicability",
  },

  // -------------------------------------------------------------
  // 12. PCI DSS Network Segmentation Review & Scope Reduction
  // -------------------------------------------------------------
  {
    id: "pci-dss-segmentation-review",
    title: "PCI DSS v4.0 Network Segmentation Review & Scope Reduction",
    subtitle: "Cardholder Data Environment (CDE) Boundary Validation & Firewall Auditing",
    category: "Compliance & Audit",
    summary:
      "PCI DSS v4.0 Cardholder Data Environment (CDE) network segmentation review, scope reduction analysis, and firewall rule validation framework.",
    problemStatement:
      "Broad network connectivity expands the PCI DSS audit scope across unnecessary systems, increasing compliance costs and audit complexity.",
    solution:
      "Executed network flow analysis and firewall rule reviews verifying strict isolation of the Cardholder Data Environment (CDE) from out-of-scope enterprise networks.",
    toolsUsed: ["Nmap", "Wireshark", "Firewall Rule Auditor", "Visio Architecture Diagrams"],
    responsibilities: [
      "Audited network ACLs and firewall ingress/egress rules enforcing CDE isolation.",
      "Validated scope reduction compensating controls to isolate payment transaction processing systems.",
    ],
    businessImpact: [
      "Reduced PCI DSS audit scope by 40%, decreasing annual external Qualified Security Assessor (QSA) audit costs.",
      "Verified compliance with PCI DSS v4.0 Requirement 1.2 and Requirement 11.4 network testing mandates.",
    ],
    keyLearnings: [
      "Proper network segmentation is the single most effective method for reducing PCI compliance overhead.",
    ],
    frameworks: ["PCI DSS v4.0", "NIST SP 800-125B"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/PCI_DSS-Network-Segmentation-Review-and-Scope-Reduction",
  },

  // -------------------------------------------------------------
  // 13. Cloud Security Terraform Infrastructure Suites (Cloud Security)
  // -------------------------------------------------------------
  {
    id: "cloud-sec-terraform-suite",
    title: "AWS Cloud Security Infrastructure-as-Code (IaC) & Hardening Suite",
    subtitle: "Terraform Modules for Cross-Account IAM, Centralized Logging, VPC Isolation & Break-Glass Access",
    category: "Cloud Security",
    summary:
      "Suite of production-ready Terraform Infrastructure-as-Code modules automating secure AWS multi-account IAM cross-account access, emergency break-glass access workflows, centralized CloudTrail logging, and VPC network isolation.",
    problemStatement:
      "Manual cloud provisioning leads to security group misconfigurations, unencrypted CloudTrail logs, over-privileged IAM roles, and absent emergency access auditing.",
    solution:
      "Developed modular, reusable HCL Terraform scripts establishing secure IAM assume-role policies, S3 log bucket encryption with KMS, automated break-glass alert notifications, and multi-AZ VPC subnets.",
    toolsUsed: ["Terraform (HCL)", "AWS IAM", "AWS S3 / KMS", "AWS CloudTrail", "AWS VPC", "Shell"],
    responsibilities: [
      "Authored Terraform modules for secure cross-account role delegation enforcing least-privilege boundaries.",
      "Configured S3 bucket policies enforcing TLS 1.2+ transport encryption and KMS log encryption.",
      "Designed automated break-glass emergency IAM access role delegation with instant CloudWatch alarm notifications.",
    ],
    businessImpact: [
      "Standardized security baseline deployment across enterprise AWS cloud accounts in minutes.",
      "Eliminated manual IAM credential creation risks through automated IaC state management.",
    ],
    keyLearnings: [
      "Modular IaC templates guarantee that security controls are consistently deployed across every cloud account.",
    ],
    frameworks: ["CIS AWS Foundations Benchmark", "NIST SP 800-53", "Terraform Best Practices"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/Cloud_Security-IAM-Cross-Account-Access",
  },

  // -------------------------------------------------------------
  // 14. Borrow Spring Boot Backend (Java Backend)
  // -------------------------------------------------------------
  {
    id: "borrow-springboot-backend",
    title: "Borrow Platform: Spring Boot RESTful API & Asset Borrowing Backend",
    subtitle: "Enterprise Java Backend, Role-Based Access Control & Relational Data Management",
    category: "Java Backend",
    summary:
      "Production Spring Boot RESTful API backend service managing item borrowing workflows, asset reservation catalogs, user authentication, and transaction histories.",
    problemStatement:
      "Asset sharing platforms require secure user authorization, concurrent transaction management, and robust input validation to prevent inventory conflicts.",
    solution:
      "Developed a modular Java Spring Boot application with Spring Security authentication, JPA/Hibernate ORM database persistence, and standardized REST endpoint response structures.",
    toolsUsed: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL / MySQL", "Maven"],
    responsibilities: [
      "Designed relational database entities and repositories managing user profiles, inventory items, and borrow requests.",
      "Implemented role-based endpoint protection distinguishing admin users from standard borrowers.",
    ],
    businessImpact: [
      "Provided a reliable, scalable backend architecture for item tracking and reservation management.",
      "Enforced data integrity across concurrent borrowing requests.",
    ],
    keyLearnings: [
      "Spring Data JPA simplifies database operations while maintaining clean architectural separation.",
    ],
    frameworks: ["Spring Boot", "Spring Security", "JPA / Hibernate", "REST API"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/Borrow_Springboot_Backend",
  },

  // -------------------------------------------------------------
  // 15. GRC Control Automation & Risk Acceptance Suite
  // -------------------------------------------------------------
  {
    id: "grc-control-automation-python",
    title: "Python GRC Audit Control Automation & Risk Acceptance Workflow",
    subtitle: "Continuous Compliance Monitoring, API Evidence Scrapers & Risk Exception Management",
    category: "GRC & Cybersecurity",
    summary:
      "Python security auditing scripts and risk acceptance documentation framework automating evidence collection from cloud APIs and formalizing risk exception sign-off procedures.",
    problemStatement:
      "Manual audit evidence collection causes delayed compliance reporting, while undocumented risk acceptances create unmonitored security debt.",
    solution:
      "Constructed Python automation scripts pulling live configuration data from cloud APIs, combined with standardized risk acceptance request templates incorporating expiration dates and executive approval flows.",
    toolsUsed: ["Python", "Boto3 API", "REST APIs", "Excel", "Markdown"],
    responsibilities: [
      "Developed Python scripts querying cloud environment APIs for unencrypted storage and inactive user credentials.",
      "Designed formal Risk Acceptance documentation templates evaluating business justification and compensating controls.",
    ],
    businessImpact: [
      "Replaced manual audit evidence gathering with automated script executions.",
      "Established formal governance tracking for accepted technical risks with enforced annual expiration reviews.",
    ],
    keyLearnings: [
      "Automating audit evidence collection transforms GRC from a periodic scramble into continuous compliance.",
    ],
    frameworks: ["NIST SP 800-30", "ISO/IEC 27001", "Continuous Control Monitoring"],
    date: "2026",
    featured: false,
    githubUrl: "https://github.com/KPranit-2105/GRC-Control-Automation",
  },
];
