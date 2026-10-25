'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Workflow,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  FileText,
  Activity,
  GitBranch,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MaskingTape } from './analog/MaskingTape';

interface HorizontalCaseStudiesProps {
  disclosureMode?: boolean;
}

export const HorizontalCaseStudies: React.FC<HorizontalCaseStudiesProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const [activePanel, setActivePanel] = useState<number>(0);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      // Handle mobile or reduced motion fallback: no horizontal translation
      if (window.innerWidth <= 900 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        track.style.transform = 'none';
        return;
      }

      const rect = container.getBoundingClientRect();
      const stickyTop = 64; // Header height
      const totalTravel = container.offsetHeight - (window.innerHeight - stickyTop);
      if (totalTravel <= 0) return;

      const currentY = stickyTop - rect.top;
      const p = Math.max(0, Math.min(1, currentY / totalTravel));
      setProgress(p);

      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
      const targetX = -p * maxTranslate;
      track.style.transform = `translate3d(${targetX}px, 0, 0)`;

      // Determine active panel
      if (p < 0.33) {
        setActivePanel(0);
      } else if (p < 0.67) {
        setActivePanel(1);
      } else {
        setActivePanel(2);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updatePosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToPanel = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const stickyTop = 64;
    const totalTravel = container.offsetHeight - (window.innerHeight - stickyTop);
    const targetP = index === 0 ? 0.05 : index === 1 ? 0.5 : 0.95;
    const targetY = container.offsetTop - stickyTop + targetP * totalTravel;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const caseStudies = portfolioData.caseStudies;
  const quoteStudy = caseStudies[0];
  const ragStudy = caseStudies[1];
  const mlopsStudy = caseStudies[2];

  return (
    <div className="horizontal-case-studies-wrapper" ref={containerRef}>
      <div className="horizontal-case-studies-sticky">
        {/* Top Progress Bar & Stepper */}
        <div className="horizontal-progress-header">
          <div className="horizontal-progress-steps">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 800,
                color: 'var(--color-cobalt)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase'
              }}
            >
              01 WORK
            </span>

            <button
              className={`horizontal-progress-step ${activePanel === 0 ? 'is-active' : ''}`}
              onClick={() => scrollToPanel(0)}
              title="Jump to Quotation AI"
            >
              <span className="horizontal-progress-dot" />
              <span>01 QUOTATION AI</span>
            </button>

            <button
              className={`horizontal-progress-step ${activePanel === 1 ? 'is-active' : ''}`}
              onClick={() => scrollToPanel(1)}
              title="Jump to Knowledge RAG"
            >
              <span className="horizontal-progress-dot" />
              <span>02 KNOWLEDGE RAG</span>
            </button>

            <button
              className={`horizontal-progress-step ${activePanel === 2 ? 'is-active' : ''}`}
              onClick={() => scrollToPanel(2)}
              title="Jump to MLOps"
            >
              <span className="horizontal-progress-dot" />
              <span>03 MLOPS</span>
            </button>
          </div>

          <div className="horizontal-progress-track-bar">
            <div
              className="horizontal-progress-indicator-fill"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>

          <div className="horizontal-scroll-hint">
            <span>SCROLL TO TRAVEL</span>
            <ChevronRight size={13} />
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div className="horizontal-track-container">
          <div className="horizontal-track" ref={trackRef}>
            {/* ===============================================================
                PANEL 01: QUOTATION AI
                =============================================================== */}
            <article
              className={`horizontal-panel ${activePanel === 0 ? 'is-focused' : ''}`}
              id="case-study-quotation-ai"
            >
              <MaskingTape position="top-left" width={70} rotate={-2} style={{ top: -8, left: 24 }} />

              {/* Panel Header */}
              <div className="horizontal-panel__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span
                    className="horizontal-panel__badge"
                    style={{ background: 'rgba(51, 79, 161, 0.1)', color: 'var(--color-cobalt)' }}
                  >
                    01 / QUOTATION AI
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-ink-muted)',
                      fontWeight: 600
                    }}
                  >
                    WeRoute Systems · Lead Developer
                  </span>
                </div>
              </div>

              {/* 2-Column Grid */}
              <div className="horizontal-panel__grid">
                {/* Left Column: Narrative, Problem/Solution, Metrics */}
                <div className="horizontal-panel__left">
                  <div className="horizontal-panel__title-wrap">
                    <span
                      className="horizontal-panel__subtitle"
                      style={{ color: 'var(--color-marker-red)' }}
                    >
                      FROM A VAGUE BRIEF TO AN APPROVED QUOTE.
                    </span>
                    <h3 className="horizontal-panel__title">
                      AI Quotation & Recommendation Platform
                    </h3>
                    <div style={{ marginTop: '0.55rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--color-ink-secondary)' }}>
                        A requirement comes in, a trained model predicts the relevant products, an LLM drafts the proposal, and a reviewer approves before it reaches a client.
                      </p>
                      <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--color-ink-primary)', fontWeight: 500 }}>
                        The brief was “can AI help with quotations?” I watched sales build one first. The slow part wasn’t writing the proposal — it was hunting through the catalogue deciding what belonged in it. So the model came first.
                      </p>
                    </div>
                  </div>

                  {/* Problem & Solution Callout */}
                  <div className="horizontal-panel__callout" style={{ margin: '0.55rem 0', padding: '0.55rem 0.75rem' }}>
                    <div className="horizontal-panel__callout-row">
                      <span className="horizontal-panel__callout-label" style={{ color: 'var(--color-marker-red)' }}>
                        Challenge:
                      </span>
                      <span className="horizontal-panel__callout-desc" style={{ fontSize: '0.8rem', lineHeight: 1.45 }}>
                        Two hours per quote, mostly spent searching thousands of products. Output varied depending on who built it.
                      </span>
                    </div>
                    <div className="horizontal-panel__callout-row" style={{ marginTop: '4px' }}>
                      <span className="horizontal-panel__callout-label" style={{ color: 'var(--color-cobalt)' }}>
                        Architecture:
                      </span>
                      <span className="horizontal-panel__callout-desc" style={{ fontSize: '0.8rem', lineHeight: 1.45 }}>
                        Recommendation model for line-item prediction, LLM drafting constrained by Pydantic schemas, confidence gate routing anything uncertain to a human.
                      </span>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '0.35rem 0' }}>
                    <div
                      style={{
                        background: '#FCFAF4',
                        border: '1px solid rgba(28,27,25,0.1)',
                        padding: '7px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)', textTransform: 'uppercase' }}>
                        TOP RECOMMENDATION ACCURACY
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-cobalt)' }}>
                          87%
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>
                          Recall@K
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        background: '#FCFAF4',
                        border: '1px solid rgba(28,27,25,0.1)',
                        padding: '7px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)', textTransform: 'uppercase' }}>
                        QUOTATION TURNAROUND
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-cobalt)' }}>
                          70% faster
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>
                          Turnaround
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Tech Tags & Read Case Study */}
                  <div className="horizontal-panel__footer-row">
                    <div className="horizontal-panel__tech-tags">
                      {['Python', 'PyTorch', 'Scikit-learn', 'MLflow', 'FastAPI'].map((tech) => (
                        <span key={tech} className="horizontal-panel__tech-pill">{tech}</span>
                      ))}
                    </div>

                    <a href={quoteStudy.route} className="horizontal-panel__read-btn">
                      <span>READ CASE STUDY</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Blueprint */}
                <div className="horizontal-panel__right">
                  <div className="horizontal-panel__blueprint">
                    <div>
                      <div className="blueprint-header">
                        <span className="blueprint-header__title">
                          <Workflow size={14} /> FIG 1.0 / PROPOSAL WORKFLOW
                        </span>
                      </div>

                      {/* Workflow Step Nodes */}
                      <div className="blueprint-steps-list">
                        {quoteStudy.conceptualArchitecture.steps.map((st, sIdx) => (
                          <div
                            key={st.name}
                            className={`blueprint-step-node ${activePanel === 0 && sIdx <= 2 ? 'is-active' : ''}`}
                          >
                            <div className="blueprint-step-node__top">
                              <span className="blueprint-step-node__title">
                                0{sIdx + 1}. {st.name}
                              </span>
                              <span className="blueprint-step-node__tag">{st.tag}</span>
                            </div>
                            <p className="blueprint-step-node__desc">{st.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Why Structured Outputs Box */}
                      <div className="blueprint-feature-box">
                        <div className="blueprint-feature-box__header">
                          <CheckCircle size={12} />
                          <span>WHY STRUCTURED OUTPUTS</span>
                        </div>
                        <div className="blueprint-feature-box__content">
                          First version returned prose. Content was right, but pricing still had to be re-keyed downstream, which erased the time saving. The failure that mattered wasn’t a wrong answer — it was an unusable one.
                        </div>
                      </div>
                    </div>

                    <div className="blueprint-footer-note">
                      <span>✓ PyTorch · Scikit-learn · FastAPI</span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
                      <span>Confidence-gated human review</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ===============================================================
                PANEL 02: KNOWLEDGE RAG
                =============================================================== */}
            <article
              className={`horizontal-panel ${activePanel === 1 ? 'is-focused' : ''}`}
              id="case-study-knowledge-rag"
            >
              <MaskingTape position="top-right" width={70} rotate={2} style={{ top: -8, right: 24 }} />

              {/* Panel Header */}
              <div className="horizontal-panel__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span
                    className="horizontal-panel__badge"
                    style={{ background: 'rgba(28, 27, 25, 0.08)', color: 'var(--color-ink-primary)' }}
                  >
                    02 / KNOWLEDGE RAG
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-ink-muted)',
                      fontWeight: 600
                    }}
                  >
                    {ragStudy.employer} · {ragStudy.role}
                  </span>
                </div>
              </div>

              {/* 2-Column Grid */}
              <div className="horizontal-panel__grid">
                {/* Left Column: Narrative, Problem/Solution, Metrics */}
                <div className="horizontal-panel__left">
                  <div className="horizontal-panel__title-wrap">
                    <span
                      className="horizontal-panel__subtitle"
                      style={{ color: 'var(--color-cobalt)' }}
                    >
                      FIND. UNDERSTAND. ANSWER WITH A SOURCE.
                    </span>
                    <h3 className="horizontal-panel__title">
                      Enterprise NLP Chatbot & Knowledge Assistant
                    </h3>
                    <div style={{ marginTop: '0.55rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--color-ink-secondary)' }}>
                        An assistant that answers questions from company documentation, cites where each answer came from, and hands off to a person when it isn’t sure.
                      </p>
                      <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--color-ink-primary)', fontWeight: 500 }}>
                        Most of the work went into the layer underneath the model: document taxonomy, chunking strategy, metadata schema. That’s where answer relevance actually came from — not from the prompt.
                      </p>
                    </div>
                  </div>

                  {/* Problem & Solution Callout */}
                  <div className="horizontal-panel__callout" style={{ margin: '0.55rem 0', padding: '0.55rem 0.75rem' }}>
                    <div className="horizontal-panel__callout-row">
                      <span className="horizontal-panel__callout-label" style={{ color: 'var(--color-marker-red)' }}>
                        Challenge:
                      </span>
                      <span className="horizontal-panel__callout-desc" style={{ fontSize: '0.8rem', lineHeight: 1.45 }}>
                        The same questions about specs, SLAs and compliance kept reaching a handful of subject matter experts, burning senior time on answers that already existed in the docs.
                      </span>
                    </div>
                    <div className="horizontal-panel__callout-row" style={{ marginTop: '4px' }}>
                      <span className="horizontal-panel__callout-label" style={{ color: 'var(--color-cobalt)' }}>
                        Architecture:
                      </span>
                      <span className="horizontal-panel__callout-desc" style={{ fontSize: '0.8rem', lineHeight: 1.45 }}>
                        Hybrid retrieval over structured documents, cross-encoder reranking, generation constrained to retrieved excerpts, and confidence-based escalation to a human.
                      </span>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '0.35rem 0' }}>
                    <div
                      style={{
                        background: '#FCFAF4',
                        border: '1px solid rgba(28,27,25,0.1)',
                        padding: '7px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)', textTransform: 'uppercase' }}>
                        ANSWER ACCURACY
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-cobalt)' }}>
                          88%
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>
                          Golden dataset
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        background: '#FCFAF4',
                        border: '1px solid rgba(28,27,25,0.1)',
                        padding: '7px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)', textTransform: 'uppercase' }}>
                        ROUTINE QUERIES DEFLECTED
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-cobalt)' }}>
                          60%
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>
                          Deflected from experts
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Tech Tags & Read Case Study */}
                  <div className="horizontal-panel__footer-row">
                    <div className="horizontal-panel__tech-tags">
                      {ragStudy.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="horizontal-panel__tech-pill">{tech}</span>
                      ))}
                    </div>

                    <a href={ragStudy.route} className="horizontal-panel__read-btn">
                      <span>READ CASE STUDY</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Blueprint */}
                <div className="horizontal-panel__right">
                  <div className="horizontal-panel__blueprint">
                    <div>
                      <div className="blueprint-header">
                        <span className="blueprint-header__title">
                          <Database size={14} /> FIG 2.0 / GROUNDED RAG PIPELINE
                        </span>
                      </div>

                      {/* Workflow Step Nodes */}
                      <div className="blueprint-steps-list">
                        {ragStudy.conceptualArchitecture.steps.map((st, sIdx) => (
                          <div
                            key={st.name}
                            className={`blueprint-step-node ${activePanel === 1 && sIdx <= 3 ? 'is-active' : ''}`}
                          >
                            <div className="blueprint-step-node__top">
                              <span className="blueprint-step-node__title">
                                0{sIdx + 1}. {st.name}
                              </span>
                              <span className="blueprint-step-node__tag">{st.tag}</span>
                            </div>
                            <p className="blueprint-step-node__desc">{st.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Sample Citation Card */}
                      <div className="blueprint-feature-box">
                        <div className="blueprint-feature-box__header">
                          <FileText size={12} />
                          <span>Grounded Citation Verification</span>
                        </div>
                        <div className="blueprint-feature-box__content">
                          Answers constrained strictly to retrieved excerpts with inline source links. Low retrieval confidence triggers ticket generation to subject matter experts.
                        </div>
                      </div>
                    </div>

                    <div className="blueprint-footer-note">
                      <span>✓ BM25 + FAISS Dense Embeddings</span>
                      <span>Escalation: Confidence &lt; 0.80</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* ===============================================================
                PANEL 03: MLOPS
                =============================================================== */}
            <article
              className={`horizontal-panel ${activePanel === 2 ? 'is-focused' : ''}`}
              id="case-study-mlops"
            >
              <MaskingTape position="top-left" width={70} rotate={-1.5} style={{ top: -8, left: 24 }} />

              {/* Panel Header */}
              <div className="horizontal-panel__header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span
                    className="horizontal-panel__badge"
                    style={{ background: 'rgba(74, 122, 94, 0.12)', color: 'var(--color-muted-green)' }}
                  >
                    03 / MLOPS
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--color-ink-muted)',
                      fontWeight: 600
                    }}
                  >
                    {mlopsStudy.employer} · {mlopsStudy.role}
                  </span>
                </div>
              </div>

              {/* 2-Column Grid */}
              <div className="horizontal-panel__grid">
                {/* Left Column: Narrative, Problem/Solution, Metrics */}
                <div className="horizontal-panel__left">
                  <div className="horizontal-panel__title-wrap">
                    <span
                      className="horizontal-panel__subtitle"
                      style={{ color: 'var(--color-muted-green)' }}
                    >
                      BUILD. DEPLOY. MONITOR. IMPROVE.
                    </span>
                    <h3 className="horizontal-panel__title">
                      Document Intelligence & MLOps Platform
                    </h3>
                    <div style={{ marginTop: '0.55rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--color-ink-secondary)' }}>
                        The pipeline that turns scanned and semi-structured enterprise documents into searchable data, plus the deployment backbone every AI service at the company now runs on.
                      </p>
                      <p style={{ margin: 0, fontSize: '0.86rem', lineHeight: 1.5, color: 'var(--color-ink-primary)', fontWeight: 500 }}>
                        My first build worked on clean documents and failed quietly on real ones — confident answers assembled from partial context that nobody caught because they read well. I stopped adding features and ran error analysis instead.
                      </p>
                    </div>
                  </div>

                  {/* Problem & Solution Callout */}
                  <div className="horizontal-panel__callout" style={{ margin: '0.55rem 0', padding: '0.55rem 0.75rem' }}>
                    <div className="horizontal-panel__callout-row">
                      <span className="horizontal-panel__callout-label" style={{ color: 'var(--color-marker-red)' }}>
                        Challenge:
                      </span>
                      <span className="horizontal-panel__callout-desc" style={{ fontSize: '0.8rem', lineHeight: 1.45 }}>
                        Years of knowledge locked in scans and inconsistent formats. Every new model deployed ad hoc, with no way to tell when one had quietly degraded.
                      </span>
                    </div>
                    <div className="horizontal-panel__callout-row" style={{ marginTop: '4px' }}>
                      <span className="horizontal-panel__callout-label" style={{ color: 'var(--color-cobalt)' }}>
                        Architecture:
                      </span>
                      <span className="horizontal-panel__callout-desc" style={{ fontSize: '0.8rem', lineHeight: 1.45 }}>
                        OCR and layout-aware parsing, structure-aware chunking, embedding and vector indexing, with CI/CD, canary releases, drift monitoring and automated retraining around it.
                      </span>
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', margin: '0.35rem 0' }}>
                    <div
                      style={{
                        background: '#FCFAF4',
                        border: '1px solid rgba(28,27,25,0.1)',
                        padding: '7px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)', textTransform: 'uppercase' }}>
                        MANUAL PROCESSING REDUCTION
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-cobalt)' }}>
                          80%
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>
                          Manual reduction
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        background: '#FCFAF4',
                        border: '1px solid rgba(28,27,25,0.1)',
                        padding: '7px 10px',
                        borderRadius: '2px'
                      }}
                    >
                      <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-muted)', textTransform: 'uppercase' }}>
                        FEWER DEPLOYMENT FAILURES
                      </span>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--color-cobalt)' }}>
                          40%
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-secondary)', fontWeight: 600 }}>
                          Failure drop
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Tech Tags & Read Case Study */}
                  <div className="horizontal-panel__footer-row">
                    <div className="horizontal-panel__tech-tags">
                      {mlopsStudy.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="horizontal-panel__tech-pill">{tech}</span>
                      ))}
                    </div>

                    <a href={mlopsStudy.route} className="horizontal-panel__read-btn">
                      <span>READ CASE STUDY</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Blueprint */}
                <div className="horizontal-panel__right">
                  <div className="horizontal-panel__blueprint">
                    <div>
                      <div className="blueprint-header">
                        <span className="blueprint-header__title">
                          <Activity size={14} /> FIG 3.0 / PRODUCTION MLOPS LIFECYCLE
                        </span>
                      </div>

                      {/* Workflow Step Nodes */}
                      <div className="blueprint-steps-list">
                        {mlopsStudy.conceptualArchitecture.steps.map((st, sIdx) => (
                          <div
                            key={st.name}
                            className={`blueprint-step-node ${activePanel === 2 ? 'is-active' : ''}`}
                          >
                            <div className="blueprint-step-node__top">
                              <span className="blueprint-step-node__title">
                                0{sIdx + 1}. {st.name}
                              </span>
                              <span className="blueprint-step-node__tag">{st.tag}</span>
                            </div>
                            <p className="blueprint-step-node__desc">{st.desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Real-time Telemetry Card */}
                      <div className="blueprint-feature-box">
                        <div className="blueprint-feature-box__header">
                          <GitBranch size={12} />
                          <span>Continuous Training & Canary Rollback</span>
                        </div>
                        <div className="blueprint-feature-box__content">
                          Automated GitHub Actions validate pre-release regression tests. AWS EKS canary deployments monitor error rates, automatically rolling back if latency or drift triggers breach.
                        </div>
                      </div>
                    </div>

                    <div className="blueprint-footer-note">
                      <span>✓ Kubernetes + MLflow + Evidently</span>
                      <span>Canary: 10% → 100% | Auto-Rollback</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCaseStudies;
