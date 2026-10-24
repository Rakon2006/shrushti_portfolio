'use client';

import React from 'react';
import {
  ExternalLink,
  Code2,
  CheckCircle,
  Workflow,
  ShieldCheck,
  Scale,
  FileCode,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Sliders,
  FileCheck
} from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { portfolioData, type PublicProject } from '../data/portfolioData';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const PublicProjectsSection: React.FC = () => {
  const { publicProjects } = portfolioData;

  const ticketPilot = publicProjects.find((p) => p.id === 'ticketpilot') || publicProjects[0];
  const payLens = publicProjects.find((p) => p.id === 'paylens') || publicProjects[1];

  return (
    <section className="public-projects-section" id="independent-projects" aria-label="Independent & Public Projects">
      {/* Subsection Header */}
      <div className="public-projects__header">
        <div className="public-projects__badge-row">
          <span className="public-projects__eyebrow">
            FIELD NOTES / 01.B PUBLIC CODE
          </span>
          <span className="public-projects__badge">
            <Code2 size={13} />
            <span>OPEN-SOURCE & VERIFIABLE REPOSITORIES</span>
          </span>
        </div>

        <h3 className="public-projects__title">
          Independent AI Systems. <br />
          <span style={{ color: 'var(--color-cobalt, #334FA1)' }}>
            Open Source, Calibrated & Reproducible.
          </span>
        </h3>

        <p className="public-projects__intro">
          While the three enterprise architectures above operate under corporate confidentiality agreements, the following two full-stack projects are public, open-source repositories. Each system tackles fundamental AI reliability challenges—<strong>calibrated abstention under uncertainty</strong> and <strong>data leakage elimination in predictive ML</strong>—complete with live deployments and reproducible code.
        </p>
      </div>

      {/* ===================================================================
          CARD 01: TICKETPILOT
          =================================================================== */}
      <article className="public-project-card card--tilt-left" id="project-ticketpilot">
        {/* Analog Masking Tape on Top Left */}
        <MaskingTape position="top-left" width={75} rotate={-2} style={{ top: -10, left: 32 }} />

        {/* Card Header Bar */}
        <div className="public-project-card__top">
          <div className="public-project-card__num-badge">
            <span className="public-project-card__num">01 / PUBLIC</span>
            <span className="public-project-card__badge-pill">{ticketPilot.badge}</span>
          </div>

          <div className="public-project-card__github-meta">
            <GithubIcon size={14} />
            <span>srushti-lohiya/TicketPilot</span>
          </div>
        </div>

        {/* Main Grid: Left Narrative + Right Architecture */}
        <div className="public-project-card__grid">
          {/* Left Column: Narrative, Problem, Solution, Features */}
          <div className="public-project-card__left">
            <div className="public-project-card__title-group">
              <span className="public-project-card__tagline">{ticketPilot.tagline}</span>
              <h4 className="public-project-card__name">{ticketPilot.name}</h4>
              <p className="public-project-card__description">{ticketPilot.description}</p>
            </div>

            {/* Problem & Solution Callout */}
            <div className="public-project-card__callout">
              <div className="public-project-card__callout-item">
                <span className="public-project-card__callout-heading" style={{ color: 'var(--color-marker-red, #E34B3C)' }}>
                  The Core Problem:
                </span>
                <p className="public-project-card__callout-text">{ticketPilot.problem}</p>
              </div>

              <div className="public-project-card__callout-item">
                <span className="public-project-card__callout-heading" style={{ color: 'var(--color-cobalt, #334FA1)' }}>
                  Engineering Solution:
                </span>
                <p className="public-project-card__callout-text">{ticketPilot.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="public-project-card__features">
              <span className="public-project-card__features-title">Engineered Capabilities:</span>
              {ticketPilot.keyFeatures.map((feat, idx) => (
                <div key={idx} className="public-project-card__feature-item">
                  <CheckCircle size={14} className="public-project-card__feature-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Verified Metrics / Findings */}
            <div className="public-project-card__metrics-grid">
              {ticketPilot.metricsOrFindings.map((m, idx) => (
                <div key={idx} className="public-project-card__metric-box">
                  <span className="public-project-card__metric-label">{m.label}</span>
                  <span className="public-project-card__metric-val">{m.value}</span>
                  <span className="public-project-card__metric-note">{m.note}</span>
                </div>
              ))}
            </div>

            {/* Verified Technologies */}
            <div className="public-project-card__tech-row">
              {ticketPilot.technologies.map((t) => (
                <span key={t} className="public-project-card__tech-tag">{t}</span>
              ))}
            </div>

            {/* Action Links */}
            <div className="public-project-card__actions">
              <a
                href={ticketPilot.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="public-project-card__btn-primary"
                title="View TicketPilot Source Code on GitHub"
              >
                <GithubIcon size={15} />
                <span>VIEW ON GITHUB ↗</span>
              </a>

              {ticketPilot.liveDemoUrl && (
                <a
                  href={ticketPilot.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="public-project-card__btn-secondary"
                  title="Open TicketPilot Live Next.js Demo"
                >
                  <ExternalLink size={13} />
                  <span>LIVE OPERATIONS CONSOLE ↗</span>
                </a>
              )}

              {ticketPilot.apiDocsUrl && (
                <a
                  href={ticketPilot.apiDocsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="public-project-card__btn-secondary"
                  title="View FastAPI Interactive Swagger Docs"
                >
                  <FileCode size={13} />
                  <span>API DOCS ↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Blueprint */}
          <div className="public-project-card__right">
            <div className="public-project-blueprint">
              <div className="public-project-blueprint__header">
                <span className="public-project-blueprint__title">
                  <Workflow size={14} /> FIG P1.0 / TICKETPILOT UNCERTAINTY PIPELINE
                </span>
                <span className="public-project-blueprint__fig">PUBLIC VERIFIED REPO</span>
              </div>

              {/* Steps Flow */}
              <div className="public-project-blueprint__steps">
                {ticketPilot.architectureWorkflow.steps.map((st) => (
                  <div key={st.step} className="public-project-blueprint__step-item">
                    <div className="public-project-blueprint__step-top">
                      <span className="public-project-blueprint__step-label">
                        {st.step}. {st.label}
                      </span>
                      <span className="public-project-blueprint__step-tag">{st.tag}</span>
                    </div>
                    <p className="public-project-blueprint__step-desc">{st.desc}</p>
                  </div>
                ))}
              </div>

              {/* Feature Callout Box */}
              <div className="public-project-blueprint__feature-box">
                <div className="public-project-blueprint__feature-header">
                  <ShieldCheck size={13} />
                  <span>Calibrated Decision Artifacts</span>
                </div>
                <div className="public-project-blueprint__feature-content">
                  Exposes observable decision checks (intent prediction, calibrated thresholds, risk flags, cited policy excerpts) rather than ungrounded LLM completions.
                </div>
              </div>

              {/* Blueprint Footer */}
              <div className="public-project-blueprint__footer">
                <span>✓ FastAPI + Next.js + SQLite</span>
                <span>Hosted: Vercel & Render</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Handwritten Annotation */}
        <div className="public-project-card__annotation">
          <span className="public-project-card__annotation-text">
            ✎ Takeaway: {ticketPilot.takeaway}
          </span>
        </div>
      </article>

      {/* ===================================================================
          CARD 02: PAYLENS
          =================================================================== */}
      <article className="public-project-card card--tilt-right" id="project-paylens">
        {/* Analog Masking Tape on Top Right */}
        <MaskingTape position="top-right" width={75} rotate={2.5} style={{ top: -10, right: 32 }} />

        {/* Card Header Bar */}
        <div className="public-project-card__top">
          <div className="public-project-card__num-badge">
            <span className="public-project-card__num">02 / PUBLIC</span>
            <span className="public-project-card__badge-pill">{payLens.badge}</span>
          </div>

          <div className="public-project-card__github-meta">
            <GithubIcon size={14} />
            <span>srushti-lohiya/PayLens</span>
          </div>
        </div>

        {/* Main Grid: Left Narrative + Right Architecture */}
        <div className="public-project-card__grid">
          {/* Left Column: Narrative, Problem, Solution, Features */}
          <div className="public-project-card__left">
            <div className="public-project-card__title-group">
              <span className="public-project-card__tagline" style={{ color: 'var(--color-cobalt, #334FA1)' }}>
                {payLens.tagline}
              </span>
              <h4 className="public-project-card__name">{payLens.name}</h4>
              <p className="public-project-card__description">{payLens.description}</p>
            </div>

            {/* Problem & Solution Callout */}
            <div className="public-project-card__callout" style={{ borderLeftColor: 'var(--color-muted-green, #4A7A5E)' }}>
              <div className="public-project-card__callout-item">
                <span className="public-project-card__callout-heading" style={{ color: 'var(--color-marker-red, #E34B3C)' }}>
                  Data Leakage Discovery:
                </span>
                <p className="public-project-card__callout-text">{payLens.problem}</p>
              </div>

              <div className="public-project-card__callout-item">
                <span className="public-project-card__callout-heading" style={{ color: 'var(--color-muted-green, #4A7A5E)' }}>
                  Defensible ML Solution:
                </span>
                <p className="public-project-card__callout-text">{payLens.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="public-project-card__features">
              <span className="public-project-card__features-title">Engineered Capabilities:</span>
              {payLens.keyFeatures.map((feat, idx) => (
                <div key={idx} className="public-project-card__feature-item">
                  <CheckCircle size={14} className="public-project-card__feature-icon" style={{ color: 'var(--color-cobalt, #334FA1)' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Verified Metrics / Findings */}
            <div className="public-project-card__metrics-grid">
              {payLens.metricsOrFindings.map((m, idx) => (
                <div key={idx} className="public-project-card__metric-box">
                  <span className="public-project-card__metric-label">{m.label}</span>
                  <span className="public-project-card__metric-val" style={{ color: 'var(--color-muted-green, #4A7A5E)' }}>
                    {m.value}
                  </span>
                  <span className="public-project-card__metric-note">{m.note}</span>
                </div>
              ))}
            </div>

            {/* Verified Technologies */}
            <div className="public-project-card__tech-row">
              {payLens.technologies.map((t) => (
                <span key={t} className="public-project-card__tech-tag">{t}</span>
              ))}
            </div>

            {/* Action Links */}
            <div className="public-project-card__actions">
              <a
                href={payLens.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="public-project-card__btn-primary"
                title="View PayLens Source Code on GitHub"
              >
                <GithubIcon size={15} />
                <span>VIEW ON GITHUB ↗</span>
              </a>

              {payLens.liveDemoUrl && (
                <a
                  href={payLens.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="public-project-card__btn-secondary"
                  title="Open PayLens Streamlit Application"
                >
                  <ExternalLink size={13} />
                  <span>TRY LIVE STREAMLIT APP ↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Architectural Blueprint */}
          <div className="public-project-card__right">
            <div className="public-project-blueprint">
              <div className="public-project-blueprint__header">
                <span className="public-project-blueprint__title">
                  <TrendingUp size={14} /> FIG P2.0 / PAYLENS CONFORMAL PIPELINE
                </span>
                <span className="public-project-blueprint__fig">PUBLIC VERIFIED REPO</span>
              </div>

              {/* Steps Flow */}
              <div className="public-project-blueprint__steps">
                {payLens.architectureWorkflow.steps.map((st) => (
                  <div key={st.step} className="public-project-blueprint__step-item">
                    <div className="public-project-blueprint__step-top">
                      <span className="public-project-blueprint__step-label">
                        {st.step}. {st.label}
                      </span>
                      <span className="public-project-blueprint__step-tag">{st.tag}</span>
                    </div>
                    <p className="public-project-blueprint__step-desc">{st.desc}</p>
                  </div>
                ))}
              </div>

              {/* Feature Callout Box */}
              <div className="public-project-blueprint__feature-box">
                <div className="public-project-blueprint__feature-header">
                  <Scale size={13} />
                  <span>Conformal Uncertainty Quantification</span>
                </div>
                <div className="public-project-blueprint__feature-content">
                  Employs quantile LightGBM with conformal prediction calibration to output mathematically bounded 80% confidence intervals alongside point estimates.
                </div>
              </div>

              {/* Blueprint Footer */}
              <div className="public-project-blueprint__footer">
                <span>✓ Ridge + LightGBM + Streamlit</span>
                <span>GroupKFold: 343 Companies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Handwritten Annotation */}
        <div className="public-project-card__annotation">
          <span className="public-project-card__annotation-text">
            ✎ Takeaway: {payLens.takeaway}
          </span>
        </div>
      </article>
    </section>
  );
};

export default PublicProjectsSection;
