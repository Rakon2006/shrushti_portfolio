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
  keyDecision?: string;
  threeDecisions?: { title: string; desc: string }[];
  whatIGotWrong?: string;
  errorAnalysis?: string;
  whatIdDoDifferently?: string;
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
    manifesto: "I build AI systems that work after the demo.",
    openingHeadline: [
      "AI SYSTEMS.",
      "BUILT FOR",
      "THE REAL WORLD."
    ],
    openingEyebrow: "SRUSHTI LOHIYA / AI ENGINEERING FIELD NOTES",
    descriptor: "MACHINE LEARNING · GENERATIVE AI · MLOPS",
    openingLede: "I build AI systems that work after the demo.\n\nThree years of production machine learning, LLM applications, retrieval pipelines and the MLOps underneath them. Most of my time goes to the unglamorous half: knowing whether a system is actually working, and catching it when it stops.",
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
      id: "quality",
      num: "02",
      title: "AI EVALUATION & RELIABILITY",
      color: "var(--color-cobalt)",
      len: 3.4
    },
    {
      id: "experience",
      num: "03",
      title: "ENGINEERING TIMELINE",
      color: "var(--color-ink-primary)",
      len: 3.6
    },
    {
      id: "skills",
      num: "04",
      title: "AI STACK & ARCHITECTURE",
      color: "var(--color-muted-green)",
      len: 3.2
    },
    {
      id: "colophon",
      num: "05",
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
      employer: "WeRoute Systems",
      period: "2024–2025",
      location: "Bengaluru, India",
      tagline: "FROM A VAGUE BRIEF TO AN APPROVED QUOTE.",
      confidentialityNotice: "Selected professional work. Source code and internal implementation details are not publicly available. Architecture is simplified and illustrative.",
      businessProblem: "Sales built every client quotation by hand. Someone read a requirement, searched the product catalogue, picked line items, worked out pricing, and wrote the proposal. About two hours per quote, and two people given the same requirement would produce noticeably different quotes.\n\nThe brief I got was one sentence: “can AI help with quotations?”\n\nBefore writing anything, I sat with two of them and watched the whole process. That hour decided the project. I’d assumed the slow part was writing the proposal — it took fifteen minutes. The slow part was the catalogue: scrolling, cross-referencing, checking compatibility, deciding what belonged. If I’d built what was asked for, I’d have automated the fifteen minutes.",
      whyItMattered: "Quotation turnaround speed is directly correlated with commercial win rates. Delivering rapid, mathematically consistent, and policy-compliant proposals without overburdening domain specialists was critical for business scaling.",
      srushtiRole: "Lead Developer · WeRoute Systems · 2024–2025: Led recommendation model engineering, prompt chaining pipelines, type-safe schema constraints, and human-in-the-loop review queues.",
      solutionNarrative: "A requirement comes in, a trained model predicts the relevant products, an LLM drafts the proposal, and a reviewer approves before it reaches a client.\n\nThe brief was “can AI help with quotations?” I watched sales build one first. The slow part wasn’t writing the proposal — it was hunting through the catalogue deciding what belonged in it. So the model came first.",
      keyDecision: "Structured outputs over fluent prose. My first version returned well-written proposals. The content was usually right, but pricing and line items still had to be re-keyed into downstream systems by hand — which erased most of the time saving. I rebuilt it with type-safe schemas so data flows through without manual correction. The failure that mattered wasn’t a wrong answer, it was an unusable one.",
      threeDecisions: [
        {
          title: "Model first, language second",
          desc: "The sequence mattered more than either component. Most of the value was in the prediction, so that got built and validated before the drafting layer existed."
        },
        {
          title: "Structured outputs over fluent prose",
          desc: "My first version returned well-written proposals. The content was usually right, but pricing and line items still had to be re-keyed into downstream systems by hand — which erased most of the time saving. I rebuilt it with type-safe schemas so data flows through without manual correction. The failure that mattered wasn’t a wrong answer, it was an unusable one."
        },
        {
          title: "Precision over coverage",
          desc: "I tuned the model to suggest fewer items with higher confidence rather than more items with lower. A missing suggestion costs a reviewer thirty seconds. A wrong one that reaches a client costs considerably more."
        }
      ],
      whatIGotWrong: "The training data was messier than I expected. Years of historical quotations with the same product spelled four different ways, free-text requirements, duplicates. My first model also learned to predict the popular products, because a small set of items appeared in most quotes — the class distribution was badly skewed and I hadn’t handled it explicitly. Fixing that was most of the modelling work.",
      errorAnalysis: "The aggregate accuracy was less useful than the error analysis. Looking at which requirement types failed told me more than the overall number — ambiguous or unusually short requirements were where it struggled, which is also where a human would ask a clarifying question. That shaped where the confidence threshold sat.",
      whatIdDoDifferently: "Design the output contract before tuning the model. The integration format nearly killed the time saving, and it was knowable from day one.",
      conceptualArchitecture: {
        steps: [
          { name: "Requirement Ingestion", desc: "Unstructured requirements parsed into a structured form.", tag: "FastAPI / Ingestion" },
          { name: "Recommendation Model", desc: "Predicts relevant products and line items.", tag: "PyTorch / MLflow" },
          { name: "LLM Drafting", desc: "Composes the proposal text, output constrained to a schema.", tag: "LLM API / Pydantic" },
          { name: "Human Approval", desc: "Low-confidence predictions flagged; a reviewer signs off before anything reaches a client.", tag: "Human-in-the-Loop" }
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
        "Python", "PyTorch", "Scikit-learn", "MLflow", "FastAPI"
      ],
      metrics: [
        {
          id: "quote-acc",
          label: "Top Recommendation Accuracy",
          reportedMetric: "87%",
          qualitativeDescription: "87% top recommendation accuracy (Recall@K on a held-out set)",
          publiclyApproved: true,
          detail: "Recall@K"
        },
        {
          id: "quote-time",
          label: "Quotation Turnaround",
          reportedMetric: "70% faster",
          qualitativeDescription: "70% faster quotation turnaround",
          publiclyApproved: true,
          detail: "Turnaround"
        },
        {
          id: "quote-zero",
          label: "Manual Correction",
          reportedMetric: "Zero",
          qualitativeDescription: "Zero manual correction on structured line-item output",
          publiclyApproved: true,
          detail: "Downstream re-keying"
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
      tagline: "FIND. UNDERSTAND. ANSWER WITH A SOURCE.",
      confidentialityNotice: "Selected professional work. Source code and internal implementation details are not publicly available. Architecture is simplified and illustrative.",
      businessProblem: "The same questions about specs, SLAs and compliance kept reaching a handful of subject matter experts, burning senior time on answers that already existed in the docs.",
      whyItMattered: "Support latency frustrated clients and wasted expensive engineering hours. Off-the-shelf generative chat tools risked hallucinating critical contractual terms or misinterpreting nuanced technical policies.",
      srushtiRole: "Senior AI/ML Engineer: Designed retrieval architecture, chunking and embedding strategies, multi-step LangChain & LangGraph workflows, cross-encoder reranking, and citation-grounded hallucination guardrails.",
      solutionNarrative: "An assistant that answers questions from company documentation, cites where each answer came from, and hands off to a person when it isn’t sure.\n\nMost of the work went into the layer underneath the model: document taxonomy, chunking strategy, metadata schema. That’s where answer relevance actually came from — not from the prompt.",
      keyDecision: "Most of the work went into the layer underneath the model: document taxonomy, chunking strategy, metadata schema. That’s where answer relevance actually came from — not from the prompt.",
      conceptualArchitecture: {
        steps: [
          { name: "Query Normalization", desc: "Intent classification, query expansion, and context tracking", tag: "LangGraph / Intent" },
          { name: "Hybrid Retrieval", desc: "Dense embedding similarity and sparse keyword search across docs", tag: "Vector Search / FAISS" },
          { name: "Cross-Encoder Reranking", desc: "Reranks candidate chunks to maximize information density in context", tag: "Reranker / PyTorch" },
          { name: "Grounded Generation", desc: "Synthesis restricted strictly to verified excerpts with inline citations", tag: "LLM / Guardrails" },
          { name: "Human Escalation Path", desc: "Low-confidence queries trigger ticket routing to human specialists", tag: "Escalation Fallback" }
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
          qualitativeDescription: "88% answer accuracy against a curated golden dataset",
          publiclyApproved: true,
          detail: "Curated golden dataset"
        },
        {
          id: "bot-deflect",
          label: "Routine Query Deflection",
          reportedMetric: "60%",
          qualitativeDescription: "60% routine queries deflected from the expert team",
          publiclyApproved: true,
          detail: "Deflected from expert team"
        }
      ],
      discussionNotes: "Discussion topics safe for interview: Chunking strategies for semi-structured documents, mitigating RAG hallucinations via cross-encoders, and designing graceful escalation paths.",
      route: "/case-study/enterprise-nlp-assistant"
    },
    {
      id: "document-intelligence-mlops",
      number: "03",
      title: "Document Intelligence & MLOps Platform",
      role: "Senior AI/ML Engineer",
      employer: "WeRoute Systems Pvt Ltd",
      period: "2024–Present",
      location: "Bengaluru, India",
      tagline: "BUILD. DEPLOY. MONITOR. IMPROVE.",
      confidentialityNotice: "Selected professional work. Source code and internal implementation details are not publicly available. Architecture is simplified and illustrative.",
      businessProblem: "Years of knowledge locked in scans and inconsistent formats. Every new model deployed ad hoc, with no way to tell when one had quietly degraded.",
      whyItMattered: "Without a unified MLOps platform, machine learning models degraded silently as document formats drifted, while manual deployment created downtime and production failures. Auditing compliance required verifiable model provenance.",
      srushtiRole: "Senior AI/ML Engineer · WeRoute Systems: Built end-to-end document processing pipelines, automated CI/CD continuous training workflows, model registry policies, latency/drift monitoring, and ISO/IEC 42001-aligned governance.",
      solutionNarrative: "The pipeline that turns scanned and semi-structured enterprise documents into searchable data, plus the deployment backbone every AI service at the company now runs on.\n\nMy first build worked on clean documents and failed quietly on real ones — confident answers assembled from partial context that nobody caught because they read well. I stopped adding features and ran error analysis instead.",
      keyDecision: "Structure-aware chunking moved accuracy more than weeks of prompt tuning had. Most failures traced to OCR noise and chunking that split tables in half, not to the model.",
      conceptualArchitecture: {
        steps: [
          { name: "Document Ingestion & OCR", desc: "Layout-aware OCR parsing and tabular structure extraction", tag: "OCR / Ingestion" },
          { name: "Embedding & Vector Index", desc: "Batch embedding generation and metadata synchronization", tag: "Vector Store / Batch" },
          { name: "MLflow Experiment Tracking", desc: "Lineage tracking for hyperparameters, test metrics, and artifacts", tag: "MLflow Registry" },
          { name: "CI/CD & Canary Release", desc: "Automated regression tests and progressive canary rollouts on K8s", tag: "GitHub Actions / K8s" },
          { name: "Observability & Drift Detection", desc: "Production monitoring for latency, token budgets, and data drift", tag: "Evidently / CloudWatch" }
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
          label: "Reduction in Manual Document Processing",
          reportedMetric: "80%",
          qualitativeDescription: "80% reduction in manual document processing",
          publiclyApproved: true,
          detail: "Manual processing reduction"
        },
        {
          id: "ops-failure",
          label: "Fewer Deployment Failures",
          reportedMetric: "40%",
          qualitativeDescription: "40% fewer deployment failures",
          publiclyApproved: true,
          detail: "Deployment failure reduction"
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
      tagline: "Support automation that knows when to hand off",
      description: "The hard problem in support automation isn’t writing a fluent reply. It’s deciding when it’s safe to send one without a human.",
      problem: "My classifier scored 99.9% on the benchmark dataset and 66.7% on realistic hand-written tickets. That gap is the whole project.",
      solution: "TicketPilot treats automation as a decision under uncertainty: it classifies, retrieves supporting policy, checks for injection and PII, then routes to auto-resolved, needs review, or escalated and shows you the evidence behind each decision.",
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
        { label: "Evaluation Gap", value: "99.9% → 66.7%", note: "Benchmark dataset vs realistic hand-written tickets" },
        { label: "Safety Gate", value: "3 Tiers", note: "Auto-resolved · Needs review · Escalated" },
        { label: "Stack & Demo", value: "FastAPI + Next.js", note: "Live demo, FastAPI backend, Next.js console" }
      ],
      takeaway: "The hard problem in support automation isn’t writing a fluent reply. It’s deciding when it’s safe to send one without a human."
    },
    {
      id: "paylens",
      number: "02",
      name: "PayLens",
      badge: "FINTECH ML / PUBLIC REPOSITORY",
      tagline: "Salary estimates with honest uncertainty",
      description: "I started with a simple question: can a job description tell us something useful about salary?",
      problem: "My first results looked good. Then I found the reason: duplicate postings leaking across validation folds, imputed targets being evaluated as real, and preprocessing fitted before cross-validation.",
      solution: "Rebuilding it properly made the metrics worse and the conclusions defensible: RMSE went from $17.6K to $26.67K. PayLens now returns an estimate, an 80% conformal prediction interval, and five comparable historical postings, so you can question the number rather than accept it.",
      keyFeatures: [
        "80% Conformal Prediction Intervals: Quantifies uncertainty rather than presenting a single brittle point estimate",
        "Leakage-Free Validation: GroupKFold cross-validation by company, eliminating duplicate posting contamination",
        "Dual-Modal Representation: Ridge regression combining structured company metadata with TF-IDF text features",
        "Historical Job Retrieval: Embeddings and cosine similarity retrieve 5 comparable historical job postings",
        "Interactive App & API: Streamlit operations interface backed by containerized FastAPI endpoints"
      ],
      engineeringDecisions: [
        "Defensible validation over flashy metrics: Accepted $26.67K RMSE over leaked $17.6K for statistical integrity",
        "Honest uncertainty quantification: Conformal prediction provides mathematically grounded coverage intervals",
        "Transparent evidence retrieval: Vector similarity exposes 5 comparable job postings so users can inspect the ground truth"
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
        { label: "Defensible Error", value: "$26.67K RMSE", note: "Rose from leaked $17.6K after strict GroupKFold validation" },
        { label: "Conformal Coverage", value: "80% Interval", note: "Quantile bounds so you can question the number" },
        { label: "Historical Grounding", value: "5 Postings", note: "Comparable historical job postings retrieved via embeddings" }
      ],
      takeaway: "A better-looking metric doesn’t mean a better model."
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
      title: "Groundedness",
      metricType: "Faithfulness score",
      description: "Every claim in an answer has to be supported by something retrieved, not inferred.",
      failureMode: "Plausible-sounding specs or policy terms that aren’t in any source document.",
      mitigation: "Sentence-level attribution checks; unsupported claims rejected rather than returned."
    },
    {
      title: "Retrieval quality",
      metricType: "Recall@K, MRR",
      description: "Whether the right content was fetched at all, and whether it landed near the top of the context window.",
      failureMode: "A pricing tier or caveat that exists in the docs but never reaches the model.",
      mitigation: "Hybrid dense and keyword search with cross-encoder reranking."
    },
    {
      title: "Schema validity",
      metricType: "Target 100%",
      description: "Output has to parse. A correct answer in an unusable shape is still a failure.",
      failureMode: "Unparsable JSON or a missing field that breaks a downstream API.",
      mitigation: "Pydantic validation with retry on malformed output."
    },
    {
      title: "Regression gates",
      metricType: "Test suite pass rate",
      description: "A curated set of questions and edge cases that every prompt, model or chunking change has to clear.",
      failureMode: "A prompt tweak that fixes one query and quietly breaks four others.",
      mitigation: "Automated pre-merge tests that block a degraded build."
    },
    {
      title: "Latency and cost",
      metricType: "p95/p99, tokens per request",
      description: "Cost per request is a release criterion, not something you discover on the invoice.",
      failureMode: "Runaway spend or latency degradation at peak hours.",
      mitigation: "Caching, token budgets, and autoscaling."
    },
    {
      title: "Drift",
      metricType: "PSI, distribution shift",
      description: "Client document templates change. Model performance follows, usually without anyone noticing.",
      failureMode: "Accuracy declining over months with no visible incident.",
      mitigation: "Automated drift alerts triggering retraining on threshold breach."
    },
    {
      title: "Escalation",
      metricType: "Confidence routing",
      description: "The system has to know when it doesn’t know.",
      failureMode: "A confident answer built on ambiguous or insufficient context.",
      mitigation: "Low-confidence requests route to a human review queue instead of guessing."
    },
    {
      title: "Rollback",
      metricType: "Canary gating",
      description: "New models reach a slice of traffic before all of it.",
      failureMode: "A subtle regression hitting every user at once.",
      mitigation: "Progressive rollout with automated revert on anomaly."
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
