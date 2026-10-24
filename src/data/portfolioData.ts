export interface MetricItem {
  id: string;
  label: string;
  reportedMetric: string; // Numerical metric from resume
  qualitativeDescription: string; // Truthful qualitative description when metric is confidential/withheld
  publiclyApproved: boolean; // Confidentiality control: default FALSE
  detail: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  role: string;
  employer: string;
  period: string;
  location: string;
  tagline: string;
  confidentialityNotice: string;
  businessProblem: string;
  whyItMattered: string;
  srushtiRole: string;
  solutionNarrative: string;
  conceptualArchitecture: {
    steps: {
      name: string;
      desc: string;
      tag: string;
    }[];
  };
  keyComponents: string[];
  evaluationAndQuality: string[];
  deploymentAndReliability: string[];
  technologies: string[];
  metrics: MetricItem[];
  discussionNotes: string;
  route: string;
}

export interface PublicProject {
  id: string;
  number: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  engineeringDecisions: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  apiDocsUrl?: string;
  architectureWorkflow: {
    title: string;
    steps: {
      step: string;
      label: string;
      tag: string;
      desc: string;
    }[];
  };
  metricsOrFindings: {
    label: string;
    value: string;
    note: string;
  }[];
  takeaway: string;
}

export interface ExperienceRole {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  domains: {
    title: string;
    points: string[];
  }[];
  metrics?: MetricItem[];
}

export interface SkillCategory {
  title: string;
  category: string;
  skills: string[];
  highlight: string;
}

export interface Publication {
  title: string;
  journal: string;
  issn: string;
  date: string;
  type: string;
  conference: string;
  description: string;
  modelsCompared: {
    name: string;
    type: string;
    strength: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  details: string;
}

export interface PortfolioData {
  builder: {
    name: string;
    title: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    experienceSummary: string;
    manifesto: string;
    openingHeadline: string[];
    openingEyebrow: string;
    descriptor: string;
    openingLede: string;
    annotations: string[];
  };
  chapters: {
    id: string;
    num: string;
    title: string;
    color: string;
    len: number;
  }[];
  caseStudies: CaseStudy[];
  publicProjects: PublicProject[];
  experience: ExperienceRole[];
  aiQualityPillars: {
    title: string;
    metricType: string;
    description: string;
    failureMode: string;
    mitigation: string;
  }[];
  skills: SkillCategory[];
  publication: Publication;
  education: EducationItem[];
  leadership: {
    title: string;
    description: string;
  }[];
}

export const portfolioData: PortfolioData = {
  builder: {
    name: "Srushti Lohiya",
    title: "Senior AI/ML Engineer",
    role: "Senior AI/ML Engineer",
    location: "Bengaluru, India",
    email: "srushtilohiya@gmail.com",
    phone: "+91 8007415005",
    experienceSummary: "3+ years building production Machine Learning, Generative AI, retrieval pipelines, and MLOps platforms.",
    manifesto: "I build AI systems that move from experimentation to production.",
    openingHeadline: [
      "AI SYSTEMS.",
      "BUILT FOR",
      "THE REAL WORLD."
    ],
    openingEyebrow: "SRUSHTI LOHIYA / AI ENGINEERING FIELD NOTES",
    descriptor: "MACHINE LEARNING · GENERATIVE AI · MLOPS",
    openingLede: "I build production AI systems across machine learning, LLM applications, retrieval pipelines, and MLOps — from data preparation and evaluation to reliable deployment.",
    annotations: [
      "From model experiments to production systems.",
      "Evaluate before release.",
      "Retrieval is only part of the solution."
    ]
  },
  chapters: [
    {
      id: "cover",
      num: "00",
      title: "FIELD NOTES",
      color: "var(--color-ink-primary)",
      len: 2.2
    },
    {
      id: "work",
      num: "01",
      title: "PROFESSIONAL CASE STUDIES",
      color: "var(--color-cobalt)",
      len: 4.2
    },
    {
      id: "quotation",
      num: "02",
      title: "AI QUOTATION & RECOMMENDATION",
      color: "var(--color-marker-red)",
      len: 4.0
    },
    {
      id: "assistant",
      num: "03",
      title: "ENTERPRISE NLP & KNOWLEDGE RAG",
      color: "var(--color-ink-primary)",
      len: 3.8
    },
    {
      id: "mlops",
      num: "04",
      title: "DOCUMENT INTELLIGENCE & MLOPS",
      color: "var(--color-muted-green)",
      len: 4.2
    },
    {
      id: "quality",
      num: "05",
      title: "AI EVALUATION & RELIABILITY",
      color: "var(--color-cobalt)",
      len: 3.4
    },
    {
      id: "experience",
      num: "06",
      title: "ENGINEERING TIMELINE",
      color: "var(--color-ink-primary)",
      len: 3.6
    },
    {
      id: "colophon",
      num: "07",
      title: "BUILD RELIABLE AI SYSTEMS",
      color: "var(--color-ink-primary)",
      len: 2.4
    }
  ],
  caseStudies: [
    {
      id: "quotation-platform",
      number: "01",
      title: "AI Quotation & Recommendation Platform",
      role: "Lead Developer",
      employer: "WeRoute Systems Pvt Ltd",
      period: "2024–Present",
      location: "Bengaluru, India",
      tagline: "Automated proposal formulation uniting ML item prediction, LLM drafting, and strict human verification.",
      confidentialityNotice: "Selected professional work. Source code and internal implementation details are not publicly available. Architecture is simplified and illustrative.",
      businessProblem: "Enterprise proposal creation previously required sales engineers and quotation teams to manually parse complex customer specifications, match line items against thousands of catalogue products, calculate volume tiers, and draft custom proposals. The manual process took days, introduced pricing inaccuracies, and created severe sales-pipeline bottlenecks.",
      whyItMattered: "Quotation turnaround speed is directly correlated with commercial win rates. Delivering rapid, mathematically consistent, and policy-compliant proposals without overburdening domain specialists was critical for business scaling.",
      srushtiRole: "Lead Developer: Spearheaded end-to-end technical system design, machine learning recommendation architecture, prompt chaining pipelines, type-safe schema validation, and confidence-gated human review workflows.",
      solutionNarrative: "Built an intelligent multi-stage pipeline: Customer requirements and RFPs are parsed and vectorized into an item feature space. A hybrid ML recommendation engine (PyTorch & Scikit-learn) predicts the top candidate products and bill-of-materials line items. An LLM orchestration layer drafts proposal narratives constrained by Pydantic JSON schemas, feeding verified prices directly into enterprise ERP/billing systems. Low-confidence predictions trigger automated routing to human reviewers before final dispatch.",
      conceptualArchitecture: {
        steps: [
          { name: "Requirement Ingestion", desc: "Structured parsing of incoming RFPs, requirements, and volume constraints", tag: "FastAPI / Ingestion" },
          { name: "Feature Prep & Embedding", desc: "Vector similarity mapping and feature normalization across catalog attributes", tag: "Vector DB / Scikit-learn" },
          { name: "ML Recommendation Engine", desc: "Predicts high-probability product configurations and compatible line items", tag: "PyTorch / MLflow" },
          { name: "LLM Proposal Drafting", desc: "Generates context-rich proposal narrative with strict type-safe schema constraints", tag: "LLM API / Pydantic" },
          { name: "Human Review Gate", desc: "Confidence score threshold check: flags ambiguous items for specialist approval", tag: "Human-in-the-Loop" }
        ]
      },
      keyComponents: [
        "Feature engineering pipeline handling sparse catalogue metadata and seasonal demand",
        "Dual-tower recommendation architecture matching customer query embeddings to item vectors",
        "Deterministic JSON schema enforcement guaranteeing valid pricing, tax codes, and currency formatting",
        "Active feedback loop logging human reviewer adjustments to continuously refine recommendation weights"
      ],
      evaluationAndQuality: [
        "Rank-aware recommendation evaluation: Recall@K, Precision@K, and NDCG against historical closed won quotes",
        "Proposal validity testing: JSON Schema strict validation ensures zero pricing hallucinations or missing parameters",
        "Confidence calibration: Calibrated prediction thresholds ensure edge cases are cleanly escalated rather than passed blindly"
      ],
      deploymentAndReliability: [
        "Containerized FastAPI microservices deployed on Kubernetes with AWS auto-scaling",
        "MLflow experiment tracking and model registry managing training artifact versions",
        "Graceful degradation: If LLM service encounters rate-limits, system outputs verified template drafts with ML items"
      ],
      technologies: [
        "Python", "PyTorch", "Scikit-learn", "MLflow", "FastAPI", "LLM APIs", "Vector Database", "Docker", "Kubernetes", "AWS"
      ],
      metrics: [
        {
          id: "quote-acc",
          label: "Top Recommendation Accuracy",
          reportedMetric: "87%",
          qualitativeDescription: "High-confidence catalogue ranking across complex enterprise requirements",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported outcome on catalogue recommendation precision"
        },
        {
          id: "quote-time",
          label: "Quotation Turnaround",
          reportedMetric: "70% reduction",
          qualitativeDescription: "Substantial acceleration of quotation generation and review cycles",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported operational turnaround time reduction"
        }
      ],
      discussionNotes: "Discussion topics safe for interview: Feature representation for high-cardinality catalogues, prompt constraints for deterministic pricing schemas, and designing human-in-the-loop review queues.",
      route: "/case-study/quotation-platform"
    },
    {
      id: "enterprise-nlp-assistant",
      number: "02",
      title: "Enterprise NLP Chatbot & Knowledge Assistant",
      role: "Senior AI/ML Engineer",
      employer: "WeRoute Systems Pvt Ltd",
      period: "2024–Present",
      location: "Bengaluru, India",
      tagline: "Grounded multi-turn enterprise knowledge assistant with verifiable citations and human escalation.",
      confidentialityNotice: "Selected professional work. Source code and internal implementation details are not publicly available. Architecture is simplified and illustrative.",
      businessProblem: "Subject matter experts and technical support teams were overwhelmed by repetitive queries regarding technical product specifications, SLAs, enterprise pricing tiers, and internal compliance policies stored in heterogeneous document repositories.",
      whyItMattered: "Support latency frustrated clients and wasted expensive engineering hours. Off-the-shelf generative chat tools risked hallucinating critical contractual terms or misinterpreting nuanced technical policies.",
      srushtiRole: "Senior AI/ML Engineer: Designed retrieval architecture, chunking and embedding strategies, multi-step LangChain & LangGraph workflows, cross-encoder reranking, and citation-grounded hallucination guardrails.",
      solutionNarrative: "Engineered a production-grade Retrieval-Augmented Generation (RAG) assistant. Documents are categorized into structured taxonomies and chunked with context-preserving metadata. Incoming questions pass through intent classification, hybrid retrieval (BM25 + dense vector search), and cross-encoder reranking. The reasoning layer constructs responses grounded strictly in retrieved excerpts, providing clickable source references. When retrieval relevance falls below confidence thresholds, the system escalates directly to human subject matter experts.",
      conceptualArchitecture: {
        steps: [
          { name: "Query Normalization", desc: "Intent classification, query expansion, and multi-turn conversational context tracking", tag: "LangGraph / Intent" },
          { name: "Hybrid Retrieval", desc: "Dual dense embedding similarity and sparse keyword search across verified document stores", tag: "Vector Search / FAISS" },
          { name: "Cross-Encoder Reranking", desc: "Precision reranking of candidate chunks to maximize information density in context window", tag: "Reranker / PyTorch" },
          { name: "Grounded Generation", desc: "Synthesis restricted strictly to verified excerpts with inline source citations", tag: "LLM / Guardrails" },
          { name: "Human Escalation Path", desc: "Uncertain or low-overlap queries trigger ticket generation to human specialists", tag: "Escalation Fallback" }
        ]
      },
      keyComponents: [
        "Hierarchical chunking preserving headers, tables, and section hierarchies from PDF/DOCX manuals",
        "Agentic multi-turn workflow built with LangChain and LangGraph for complex clarifying dialogs",
        "Guardrail verification checking output claims against retrieved text before rendering to user",
        "Feedback capture allowing users and specialists to vote on answers to enrich golden evaluation datasets"
      ],
      evaluationAndQuality: [
        "Faithfulness & Groundedness scoring: Automated context-adherence checks detecting unsupported assertions",
        "Retrieval benchmarking: Continuous Recall@5 and MRR evaluation on curated golden question sets",
        "Human-in-the-loop audit: Weekly spot-checks of escalated and low-confidence interaction traces"
      ],
      deploymentAndReliability: [
        "Asynchronous FastAPI gateway with token streaming for responsive conversational UX",
        "Redis caching of embedding queries and frequent FAQ retrieval states for sub-second responses",
        "Containerized microservices orchestrated on AWS ECS with auto-scaling and health checks"
      ],
      technologies: [
        "Python", "LangChain", "LangGraph", "LLM APIs", "Embeddings", "Vector Search", "Reranking", "FastAPI", "Docker", "Kubernetes", "AWS"
      ],
      metrics: [
        {
          id: "bot-acc",
          label: "Answer Accuracy",
          reportedMetric: "88%",
          qualitativeDescription: "High-precision grounded responses validated against benchmark question sets",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported outcome on response factual correctness"
        },
        {
          id: "bot-deflect",
          label: "Routine Query Deflection",
          reportedMetric: "60%",
          qualitativeDescription: "Substantial deflection of routine policy and product documentation inquiries",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported operational query deflection from expert team"
        }
      ],
      discussionNotes: "Discussion topics safe for interview: Chunking strategies for semi-structured documents, mitigating RAG hallucinations via cross-encoders, and designing graceful escalation paths.",
      route: "/case-study/enterprise-nlp-assistant"
    },
    {
      id: "document-intelligence-mlops",
      number: "03",
      title: "Document Intelligence RAG & MLOps Platform",
      role: "Senior AI/ML Engineer",
      employer: "WeRoute Systems Pvt Ltd",
      period: "2024–Present",
      location: "Bengaluru, India",
      tagline: "End-to-end document intelligence lifecycle with automated CI/CD, canary releases, and continuous governance.",
      confidentialityNotice: "Selected professional work. Source code and internal implementation details are not publicly available. Architecture is simplified and illustrative.",
      businessProblem: "Enterprise document ingestion was plagued by manual data entry, brittle one-off parsers, inconsistent model deployment practices, zero drift monitoring, and absence of audit trails across production AI models.",
      whyItMattered: "Without a unified MLOps platform, machine learning models degraded silently as document formats drifted, while manual deployment created downtime and production failures. Auditing compliance required verifiable model provenance.",
      srushtiRole: "Senior AI/ML Engineer: Architected end-to-end document processing pipelines, automated CI/CD continuous training workflows, model registry policies, latency/drift monitoring, and ISO/IEC 42001-aligned governance.",
      solutionNarrative: "Constructed an industrial-grade document intelligence and MLOps platform. Raw documents undergo optical character recognition (OCR), layout parsing, table extraction, chunking, and embedding into vector indices. On the operations side, automated GitHub Actions and Jenkins pipelines orchestrate continuous model validation. MLflow tracks every experiment, code commit, dataset hash, and registered artifact. Staging environments execute pre-release regression tests before canary deployments roll out to Kubernetes clusters, with automated rollbacks if latency or error thresholds breach.",
      conceptualArchitecture: {
        steps: [
          { name: "Document Ingestion & OCR", desc: "Multi-format ingestion, layout-aware OCR parsing, and tabular structure extraction", tag: "OCR / Ingestion" },
          { name: "Embedding & Vector Index", desc: "Batch embedding generation, metadata tagging, and vector index synchronization", tag: "Vector Store / Batch" },
          { name: "MLflow Experiment Tracking", desc: "Full lineage logging of hyperparameters, golden test metrics, and model artifacts", tag: "MLflow Registry" },
          { name: "CI/CD & Canary Release", desc: "Automated regression testing, Docker builds, and progressive canary rollouts on K8s", tag: "GitHub Actions / K8s" },
          { name: "Observability & Drift Detection", desc: "CloudWatch monitoring of p99 latency, token budgets, data distribution, and drift", tag: "Evidently / CloudWatch" }
        ]
      },
      keyComponents: [
        "Layout-aware document parser handling scanned PDFs, rotated receipts, and embedded data tables",
        "Automated continuous training pipeline triggered by validated data drift thresholds",
        "Canary deployment controller on AWS EKS with automatic rollbacks on error-rate anomalies",
        "ISO/IEC 42001 aligned model cards, dataset lineage manifests, and role-based access audit logs"
      ],
      evaluationAndQuality: [
        "Automated release regression test suite verifying model performance against baseline golden sets",
        "Data quality validation: Schema conformity, null checks, and out-of-distribution anomaly filters",
        "Production telemetry: Real-time tracking of token consumption, cost per request, and p95 latency"
      ],
      deploymentAndReliability: [
        "Kubernetes infrastructure provisioned via Terraform for reproducible, auditable cloud environments",
        "Granular IAM & RBAC policies ensuring sensitive document contents remain encrypted at rest and in transit",
        "High-availability vector database deployment with automated failover and read replicas"
      ],
      technologies: [
        "Python", "MLflow", "GitHub Actions", "Jenkins", "Docker", "Kubernetes", "Terraform", "AWS ECS/EKS", "FastAPI", "CloudWatch"
      ],
      metrics: [
        {
          id: "ops-manual",
          label: "Manual Processing Effort",
          reportedMetric: "80% reduction",
          qualitativeDescription: "Significant automation of multi-page ingestion, OCR extraction, and metadata indexing",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported outcome on document processing labor savings"
        },
        {
          id: "ops-failure",
          label: "Deployment Failures",
          reportedMetric: "40% reduction",
          qualitativeDescription: "Measurable decrease in deployment incidents via automated canary gates and rollback",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported operational improvement in deployment reliability"
        }
      ],
      discussionNotes: "Discussion topics safe for interview: Structuring layout-aware OCR pipelines, canary release gates for LLM systems, managing model cards for ISO/IEC 42001 compliance, and drift detection.",
      route: "/case-study/document-intelligence-mlops"
    }
  ],
  publicProjects: [
    {
      id: "ticketpilot",
      number: "01",
      name: "TicketPilot",
      badge: "OPEN-SOURCE AI / PUBLIC REPOSITORY",
      tagline: "AI customer support that knows when to answer — and when to hand off.",
      description: "An end-to-end support automation system combining calibrated intent classification across 27 intents, policy-aware retrieval, risk-based guardrails, and human-in-the-loop review queues.",
      problem: "Customer-support automation has a harder problem than producing a fluent response: deciding when it is safe to respond without human intervention. A classifier can score near-perfect on benchmark datasets yet struggle with ambiguous or adversarial customer requests.",
      solution: "Treats automation as a decision under uncertainty. Incoming requests undergo PII redaction and injection checks, calibrated multi-intent classification, policy retrieval, and guardrail verification before routing into auto-resolved, needs-review, or escalated states.",
      keyFeatures: [
        "Calibrated Abstention: 27-intent classifier paired with confidence thresholds to prevent premature auto-resolution",
        "Explainable AI Artifacts: Surfaces predicted intent, confidence thresholds, risk signals, injection checks, and cited policies",
        "Policy Retrieval Evidence: Hybrid TF-IDF and dense embeddings linking responses directly to verified knowledge articles",
        "Human-in-the-Loop Queue: Low-confidence and out-of-scope interactions are routed to support specialists",
        "Empirical Evaluation Lab: Benchmark validation contrasting templated accuracy against messy real-world customer tickets"
      ],
      engineeringDecisions: [
        "Decision under uncertainty: Prioritizes precision and safe abstention over raw answer volume",
        "Deterministic fallback agent: Operates offline without paid LLM API dependency in constrained environments",
        "Observable decision logging: Every ticket records injection checks, risk scores, and policy citations in SQLite"
      ],
      technologies: [
        "Python", "FastAPI", "Next.js", "TypeScript", "Machine Learning", "RAG", "SQLite", "Docker", "Vercel", "Render"
      ],
      githubUrl: "https://github.com/srushti-lohiya/TicketPilot",
      liveDemoUrl: "https://ticket-pilot-psi.vercel.app/",
      apiDocsUrl: "https://ticketpilot-uy7z.onrender.com/docs",
      architectureWorkflow: {
        title: "TICKETPILOT UNCERTAINTY & ROUTING PIPELINE",
        steps: [
          { step: "01", label: "Ingestion & Security", tag: "FastAPI / Regex", desc: "PII redaction and prompt injection checks on incoming message" },
          { step: "02", label: "Calibrated Classifier", tag: "ML / 27 Intents", desc: "27-intent neural classification with confidence calibration" },
          { step: "03", label: "Risk Assessment", tag: "P1–P4 Priority", desc: "Priority tagging (P1–P4) and business impact risk scoring" },
          { step: "04", label: "Policy Retrieval", tag: "TF-IDF / Dense", desc: "Intent-aware retrieval of cited policy excerpts" },
          { step: "05", label: "Guardrails & Routing", tag: "3-Way Gate", desc: "Evidence verification routing to Auto-Resolved, Needs Review, or Escalated" }
        ]
      },
      metricsOrFindings: [
        { label: "Supported Intents", value: "27 Intents", note: "Calibrated classification across customer support domains" },
        { label: "Safety Gate", value: "3 Tiers", note: "Auto-Resolved · Needs Review · Escalated" },
        { label: "Architecture", value: "FastAPI + Next.js", note: "Full-stack operations console on Vercel & Render" }
      ],
      takeaway: "Customer support automation must optimize for calibrated abstention: knowing with mathematical certainty when an AI system should not answer."
    },
    {
      id: "paylens",
      number: "02",
      name: "PayLens",
      badge: "FINTECH ML / PUBLIC REPOSITORY",
      tagline: "Explainable salary prediction with ML, conformal prediction & RAG.",
      description: "An end-to-end machine learning system estimating US tech salaries, quantifying estimate uncertainty with conformal prediction intervals, and retrieving comparable historical job postings.",
      problem: "A single salary figure suggests false precision that tabular data rarely supports. Furthermore, standard regression benchmarks frequently suffer from silent data leakage that inflates apparent accuracy on unseen data.",
      solution: "Rebuilt around rigorous 5-fold GroupKFold company cross-validation, Ridge regression on structured features + TF-IDF job description n-grams, quantile LightGBM with conformal prediction calibration, and vector retrieval of 5 comparable historical postings.",
      keyFeatures: [
        "80% Conformal Prediction Intervals: Quantifies uncertainty rather than presenting a single brittle point estimate",
        "Leakage-Free Validation: GroupKFold cross-validation by company, eliminating duplicate posting contamination",
        "Dual-Modal Representation: Ridge regression combining structured company metadata with TF-IDF text features",
        "Historical Job Retrieval: Embeddings and cosine similarity retrieve 5 comparable historical job postings",
        "Interactive App & API: Streamlit operations interface backed by containerized FastAPI endpoints"
      ],
      engineeringDecisions: [
        "Rigorous validation over flashy metrics: Replaced a leaked $17.6K RMSE with a statistically sound $26.67K RMSE",
        "Conformal calibration: Calibrated quantile intervals provide mathematically grounded coverage guarantees",
        "Simplicity beats complexity: Ridge regression with text TF-IDF outperformed deeper tree ensembles on this dataset"
      ],
      technologies: [
        "Python 3.11", "Scikit-learn", "LightGBM", "Ridge Regression", "TF-IDF / SVD", "Conformal Prediction", "Streamlit", "FastAPI", "Docker"
      ],
      githubUrl: "https://github.com/srushti-lohiya/PayLens",
      liveDemoUrl: "https://paylens-ai.streamlit.app/",
      architectureWorkflow: {
        title: "PAYLENS DUAL-MODAL & CONFORMAL INFERENCE PIPELINE",
        steps: [
          { step: "01", label: "Job Specs Ingestion", tag: "Streamlit / API", desc: "Title, location, company metadata, and unstructured job description text" },
          { step: "02", label: "Dual-Modal Feature Prep", tag: "Pipelines / SVD", desc: "Standardized tabular attributes combined with text TF-IDF n-grams" },
          { step: "03", label: "Ridge Regression Model", tag: "Ridge ML", desc: "Point salary estimate evaluated via company-grouped cross-validation" },
          { step: "04", label: "Conformal Calibration", tag: "Quantile LightGBM", desc: "Quantile LightGBM producing 80% conformal prediction intervals" },
          { step: "05", label: "K-NN Comparable Retrieval", tag: "Cosine Similarity", desc: "Cosine similarity retrieval of 5 verified historical job postings" }
        ]
      },
      metricsOrFindings: [
        { label: "Best Evaluated Model", value: "$26.67K RMSE", note: "Ridge (tabular + TF-IDF) with 5-fold GroupKFold by company" },
        { label: "Conformal Coverage", value: "80% Interval", note: "Quantile LightGBM uncertainty bounds around point estimates" },
        { label: "Dataset Integrity", value: "467 Postings", note: "Deduplicated across 343 companies with 0 data leakage" }
      ],
      takeaway: "A better-looking metric does not mean a better model. Validation design and uncertainty quantification matter just as much as algorithm selection."
    }
  ],
  experience: [
    {
      role: "Senior AI/ML Engineer",
      company: "WeRoute Systems Pvt Ltd",
      location: "Bengaluru, India",
      period: "April 2024–Present",
      summary: "Leading AI engineering initiatives across Generative AI products, retrieval-augmented generation architectures, MLOps automation, and production reliability.",
      domains: [
        {
          title: "AI Product Engineering",
          points: [
            "Architected and delivered the AI Quotation & Recommendation Platform, bridging customer specification parsing, item prediction, and LLM proposal synthesis.",
            "Formulated type-safe output contracts ensuring all model-generated proposals integrate seamlessly with downstream enterprise billing systems."
          ]
        },
        {
          title: "Generative AI & Retrieval Pipelines",
          points: [
            "Built end-to-end RAG systems spanning document parsing, layout-aware OCR, semantic chunking, dense embeddings, and cross-encoder reranking.",
            "Designed multi-step agentic workflows with LangChain and LangGraph leveraging tool calling, structured outputs, guardrails, retries, and human review fallbacks."
          ]
        },
        {
          title: "Machine Learning & Evaluation",
          points: [
            "Developed and evaluated recommendation, classification, and prediction models using PyTorch and Scikit-learn with rigorous cross-validation.",
            "Created comprehensive evaluation suites measuring precision, recall, F1 score, ROC AUC, groundedness, hallucination rates, latency, and token cost."
          ]
        },
        {
          title: "MLOps, Cloud Infrastructure & Governance",
          points: [
            "Engineered continuous training and CI/CD delivery pipelines using GitHub Actions, Jenkins, and MLflow for automated experiment tracking and model registries.",
            "Implemented canary deployments, automated rollbacks, data quality checks, and drift detection across containerized AWS/Kubernetes microservices.",
            "Maintained model cards, experiment lineage, and audit trails aligned to enterprise AI governance and ISO/IEC 42001 standards."
          ]
        },
        {
          title: "Technical Leadership & Delivery",
          points: [
            "Led and mentored five engineers and interns through sprint planning, architecture reviews, detailed code audits, and AI engineering best practices.",
            "Partnered closely with product managers, business stakeholders, and clients to translate complex operational needs into robust AI architectures."
          ]
        }
      ]
    },
    {
      role: "ML Data Associate II",
      company: "Amazon",
      location: "Bengaluru, India",
      period: "November 2023–April 2024",
      summary: "Spearheaded large-scale dataset validation, anomaly detection, and data-quality governance across high-throughput production machine learning pipelines.",
      domains: [
        {
          title: "Large-Scale Dataset Validation & Model Benchmarking",
          points: [
            "Validated and benchmarked large-scale annotated training datasets against rigorous machine learning performance thresholds.",
            "Applied statistical anomaly detection and data mining techniques across production pipelines to identify data drift and distribution outliers."
          ]
        },
        {
          title: "Operational Excellence & Quality Governance",
          points: [
            "Conducted comprehensive root-cause analyses on labeling discrepancies, driving iterative improvements to standard operating procedures (SOPs).",
            "Refined annotation workflows and data guidelines, earning top-performer recognition for exceptional fidelity and operational consistency."
          ]
        }
      ],
      metrics: [
        {
          id: "amzn-accuracy",
          label: "Annotation Accuracy Improvement",
          reportedMetric: "20%",
          qualitativeDescription: "Consistent improvement in data pipeline fidelity via statistical anomaly detection",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported quality improvement across data validation workflows"
        },
        {
          id: "amzn-case",
          label: "Case Quality Benchmark",
          reportedMetric: "99%+",
          qualitativeDescription: "High-tier benchmark consistency across production data reviews",
          publiclyApproved: false, // Default hidden per confidentiality requirement
          detail: "Reported case validation benchmark fidelity"
        }
      ]
    }
  ],
  aiQualityPillars: [
    {
      title: "Groundedness & Context Adherence",
      metricType: "Faithfulness Score (0.0 – 1.0)",
      description: "Verifies every statement generated by the LLM is directly substantiated by retrieved context chunks, preventing ungrounded extrapolations.",
      failureMode: "Model hallucinates plausible-sounding specs or policy terms not present in the reference documents.",
      mitigation: "Strict sentence-level attribution checking and automated rejection of unsubstantiated claims."
    },
    {
      title: "Retrieval Quality & Ranking",
      metricType: "Recall@K, MRR, NDCG",
      description: "Measures whether the relevant information is retrieved and positioned near the top of the context window for the synthesis model.",
      failureMode: "Crucial pricing tiers or technical caveats are omitted or buried past token limits.",
      mitigation: "Hybrid vector search + cross-encoder reranking with reciprocal rank fusion."
    },
    {
      title: "Deterministic Schema Contracts",
      metricType: "Schema Validity Rate (100% Target)",
      description: "Guarantees all model outputs strictly adhere to strongly typed Pydantic data schemas before downstream consumption.",
      failureMode: "Unparsable JSON, mismatched data types, or missing keys causing downstream API exceptions.",
      mitigation: "Constrained decoding, Pydantic type validation, and automated schema retry loops."
    },
    {
      title: "Golden Datasets & Regression Gates",
      metricType: "Test Suite Pass Rate",
      description: "Curated reference question-answer pairs and edge cases evaluated before any model, prompt, or chunking configuration release.",
      failureMode: "A prompt adjustment fixing one query degrades performance across previously working edge cases.",
      mitigation: "Automated pre-merge regression tests in CI/CD pipeline blocking degraded builds."
    },
    {
      title: "Operational Telemetry & Budgeting",
      metricType: "p95/p99 Latency & Token Cost / Req",
      description: "Real-time observability into inference latency, prompt/completion token consumption, and dollar cost per transaction.",
      failureMode: "Runaway LLM costs or severe latency degradation during peak enterprise business hours.",
      mitigation: "Semantic caching in Redis, aggressive token budgeting, and concurrency auto-scaling on Kubernetes."
    },
    {
      title: "Distribution & Drift Monitoring",
      metricType: "Population Stability Index (PSI) & Drift",
      description: "Continuous telemetry tracking feature distribution shifts, concept drift, and vocabulary evolution in incoming documents.",
      failureMode: "Model performance degrades silently as client document templates change over time.",
      mitigation: "Automated drift alerts in CloudWatch triggering scheduled continuous retraining in MLflow."
    },
    {
      title: "Confidence-Gated Human Escalation",
      metricType: "Escalation Routing Ratio",
      description: "Calculates calibrated confidence scores on both retrieval overlap and model prediction to identify uncertain edge cases.",
      failureMode: "System silently generates answers with high confidence when context is ambiguous or insufficient.",
      mitigation: "Dedicated human-in-the-loop review queue for any request below the confidence threshold."
    },
    {
      title: "Automated Rollback & Canary Gating",
      metricType: "Deployment Health Score",
      description: "Traffic is gradually split (5% → 25% → 100%) to new models on Kubernetes while error rates and latency are actively audited.",
      failureMode: "A subtle model regression impacts 100% of production users immediately upon deployment.",
      mitigation: "Automated rollback controller triggering instantaneous revert upon anomaly detection."
    }
  ],
  skills: [
    {
      title: "Languages & Databases",
      category: "Foundation & Storage",
      skills: ["Python", "SQL", "MySQL", "PostgreSQL", "Redis", "FAISS", "Chroma", "pgvector"],
      highlight: "High-performance vector indices, relational modeling, and sub-millisecond key-value caching."
    },
    {
      title: "Machine Learning",
      category: "Core Algorithms & Modeling",
      skills: [
        "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
        "Classification", "Regression", "Clustering", "Anomaly Detection",
        "Deep Learning", "Recommendation Systems", "Feature Engineering",
        "Hyperparameter Tuning", "Model Evaluation"
      ],
      highlight: "Deep understanding of feature representation, class imbalance, and statistical validation."
    },
    {
      title: "Generative AI & LLMs",
      category: "Applied Language & Agents",
      skills: [
        "Large Language Models", "RAG Pipelines", "LangChain", "LangGraph", "LlamaIndex",
        "Hugging Face Transformers", "Prompt Engineering", "Tool Calling",
        "Dense Embeddings", "Vector Search", "Guardrails", "LLM Evaluation"
      ],
      highlight: "Building resilient agentic workflows with structured outputs and verifiable grounding."
    },
    {
      title: "MLOps & Lifecycle",
      category: "Operations & Governance",
      skills: [
        "MLflow", "Experiment Tracking", "Model Registry", "Model Versioning",
        "GitHub Actions", "Jenkins", "Continuous Training", "Monitoring",
        "Drift Detection", "Automated Retraining", "ISO/IEC 42001"
      ],
      highlight: "Reproducible experiment tracking, audit trails, and automated canary deployment gates."
    },
    {
      title: "Cloud & Infrastructure",
      category: "Deployment & Scaling",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "FastAPI", "REST APIs"],
      highlight: "Production containerization, declarative infrastructure, and horizontal pod auto-scaling."
    },
    {
      title: "Data Engineering",
      category: "Pipelines & Big Data",
      skills: ["ETL Pipelines", "Data Validation", "Data Quality", "Feature Pipelines", "Apache Spark", "Databricks", "BigQuery"],
      highlight: "Robust data hygiene, transformation pipelines, and high-volume analytical workloads."
    },
    {
      title: "Professional Capabilities",
      category: "Leadership & Delivery",
      skills: [
        "Technical Leadership", "Mentoring", "System Architecture & Design",
        "Stakeholder Communication", "Agile / Scrum", "Code Review", "Documentation"
      ],
      highlight: "Leading engineering squads from whiteboard architecture to production reliability."
    }
  ],
  publication: {
    title: "Telecom Customer Churn Prediction: A Review",
    journal: "Vidhyayana E-Journal",
    issn: "ISSN 2454-8596",
    date: "May 2023",
    type: "Peer-reviewed Research Paper",
    conference: "Presented at the 4th National Students Research Conference",
    description: "Conducted a rigorous comparative review of machine learning classification approaches for telecommunication customer churn prediction. Analyzed Support Vector Machines (SVM), Random Forests, Artificial Neural Networks (ANN), and hybrid ensemble techniques across benchmark churn datasets, evaluating feature importance, class-imbalance mitigation, and ROC AUC trade-offs.",
    modelsCompared: [
      { name: "Support Vector Machine (SVM)", type: "Kernel-based Margin Classifier", strength: "Effective in high-dimensional feature spaces with robust boundary separation" },
      { name: "Random Forest", type: "Bagged Ensemble Decision Trees", strength: "Superior feature importance extraction and high resistance to overfitting" },
      { name: "Artificial Neural Networks (ANN)", type: "Multi-layer Perceptron", strength: "Captures complex non-linear interactions across large customer behavioral records" },
      { name: "Hybrid / Ensemble Approaches", type: "Stacking & Boosting", strength: "Delivers optimal ROC AUC and balanced F1 score on imbalanced customer churn distributions" }
    ]
  },
  education: [
    {
      degree: "MSc Data Science and Big Data Analytics",
      institution: "MIT World Peace University",
      location: "Pune, India",
      period: "2021–2023",
      gpa: "GPA 9.39",
      details: "Specialized in advanced machine learning, predictive analytics, deep neural networks, distributed big data architectures, and statistical research."
    },
    {
      degree: "BSc Computer Science",
      institution: "MIT World Peace University",
      location: "Pune, India",
      period: "2018–2021",
      gpa: "GPA 9.78",
      details: "Comprehensive foundation in computer science, algorithms, data structures, object-oriented systems, software engineering, and database systems."
    }
  ],
  leadership: [
    {
      title: "Engineering Team Mentorship",
      description: "Mentored 5 engineers and interns at WeRoute Systems across Python design patterns, ML evaluation practices, and production CI/CD workflows."
    },
    {
      title: "Cross-Functional Architecture Translation",
      description: "Bridge between business executives, sales stakeholders, and technical teams, translating operational business pains into concrete AI architecture."
    },
    {
      title: "AI Governance & Audit Readiness",
      description: "Championed transparent AI engineering practices including model lineage cards, dataset version hashes, and ISO/IEC 42001 compliance standards."
    }
  ]
};

export default portfolioData;
