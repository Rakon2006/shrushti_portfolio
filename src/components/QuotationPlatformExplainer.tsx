'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Cpu,
  FileCode2,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Clock,
  TrendingUp,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';

export const QuotationPlatformExplainer: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1); // Default to Recommendation Model stage

  const stages = [
    {
      num: '01',
      title: 'Requirement Ingestion',
      subtitle: 'Unstructured to Structured Parsing',
      icon: <FileSpreadsheet size={18} />,
      desc: 'Unstructured requirements parsed into a structured form.',
      detail: 'Parses incoming client requests, line-item specs, and volume requirements from emails and documents into a normalized entity schema.'
    },
    {
      num: '02',
      title: 'Recommendation Model',
      subtitle: 'Product & Line-Item Prediction',
      icon: <Cpu size={18} />,
      desc: 'Predicts relevant products and line items.',
      detail: 'Model matches requirement embeddings against the product catalogue, scoring candidates with confidence thresholds and handling catalogue skew.'
    },
    {
      num: '03',
      title: 'LLM Drafting',
      subtitle: 'Type-Safe Output Validation',
      icon: <FileCode2 size={18} />,
      desc: 'Composes the proposal text, output constrained to a schema.',
      detail: 'Composes proposal narrative while strictly conforming to Pydantic JSON schemas. Pricing and item codes flow straight into downstream systems without manual re-keying.'
    },
    {
      num: '04',
      title: 'Human Approval',
      subtitle: 'Confidence-Gated Escalation Gate',
      icon: <UserCheck size={18} />,
      desc: 'Low-confidence predictions flagged; a reviewer signs off before anything reaches a client.',
      detail: 'Predictions below the calibrated confidence threshold trigger review flags with supporting evidence. A human signs off before anything reaches a customer.'
    }
  ];

  const decisions = [
    {
      num: '01',
      title: 'Model first, language second',
      desc: 'The sequence mattered more than either component. Most of the value was in the prediction, so that got built and validated before the drafting layer existed.'
    },
    {
      num: '02',
      title: 'Structured outputs over fluent prose',
      desc: 'My first version returned well-written proposals. The content was usually right, but pricing and line items still had to be re-keyed into downstream systems by hand — which erased most of the time saving. I rebuilt it with type-safe schemas so data flows through without manual correction. The failure that mattered wasn’t a wrong answer, it was an unusable one.'
    },
    {
      num: '03',
      title: 'Precision over coverage',
      desc: 'I tuned the model to suggest fewer items with higher confidence rather than more items with lower. A missing suggestion costs a reviewer thirty seconds. A wrong one that reaches a client costs considerably more.'
    }
  ];

  return (
    <section
      id="chapter-quotation"
      data-chapter="quotation"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="02"
          title="AI QUOTATION & RECOMMENDATION PLATFORM"
          subtitle="WEROUTE SYSTEMS · 2024–2025"
          bgColor="var(--color-marker-red)"
          textColor="var(--color-paper-white)"
        >

        {/* Main Content Viewport */}
        <div
          className="camera-rig"
          style={{
            maxWidth: 'var(--stage-max-width)',
            margin: '0 auto',
            padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}
        >
          {/* Header & Meta */}
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-marker-red)', fontWeight: 700, letterSpacing: '0.15em' }}>
                CASE STUDY 01 — AI QUOTATION & RECOMMENDATION PLATFORM
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', background: '#EEE', padding: '3px 10px', borderRadius: '2px', color: '#444', fontWeight: 600 }}>
                Role: Lead Developer · WeRoute Systems · 2024–2025
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: 'var(--color-ink-primary)'
              }}
            >
              The Problem
            </h2>

            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-ink-secondary)' }}>
              <p style={{ margin: 0 }}>
                Sales built every client quotation by hand. Someone read a requirement, searched the product catalogue, picked line items, worked out pricing, and wrote the proposal. About two hours per quote, and two people given the same requirement would produce noticeably different quotes.
              </p>

              <div
                style={{
                  borderLeft: '3px solid var(--color-marker-red)',
                  padding: '0.6rem 1.1rem',
                  background: 'rgba(196, 59, 44, 0.04)',
                  fontStyle: 'italic',
                  color: 'var(--color-ink-primary)',
                  fontWeight: 500,
                  fontSize: '1.05rem'
                }}
              >
                The brief I got was one sentence: “can AI help with quotations?”
              </div>

              <p style={{ margin: 0 }}>
                Before writing anything, I sat with two of them and watched the whole process. That hour decided the project. I’d assumed the slow part was writing the proposal — it took fifteen minutes. The slow part was the catalogue: scrolling, cross-referencing, checking compatibility, deciding what belonged. If I’d built what was asked for, I’d have automated the fifteen minutes.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div
            style={{
              backgroundColor: 'var(--color-paper-card)',
              border: '1px solid rgba(28,27,25,0.12)',
              borderRadius: '3px',
              padding: 'clamp(1.25rem, 3vw, 2.5rem)',
              boxShadow: 'var(--shadow-paper-lift)',
              position: 'relative'
            }}
          >
            <MaskingTape position="top-center" width={80} rotate={-1} style={{ top: -10 }} />

            <div style={{ borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '0.85rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-ink-primary)', letterSpacing: '0.08em' }}>
                HOW IT WORKS
              </span>
            </div>

            {/* Stages Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '12px',
                marginBottom: '2rem'
              }}
            >
              {stages.map((st, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={st.num}
                    onClick={() => setActiveStage(idx)}
                    style={{
                      backgroundColor: isActive ? 'var(--color-ink-primary)' : '#FAF7F0',
                      color: isActive ? '#FAF7F0' : 'var(--color-ink-primary)',
                      border: isActive ? '1.5px solid var(--color-ink-primary)' : '1px solid rgba(28,27,25,0.12)',
                      padding: '14px',
                      borderRadius: '2px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: isActive ? 'var(--color-highlighter)' : 'var(--color-marker-red)' }}>
                        STAGE {st.num}
                      </span>
                      {st.icon}
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, lineHeight: 1.2 }}>
                      {st.title}
                    </span>
                    <span style={{ fontSize: '0.78rem', lineHeight: 1.4, color: isActive ? '#CCC' : 'var(--color-ink-secondary)' }}>
                      {st.desc}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Breakdown */}
            <div
              style={{
                backgroundColor: '#FAF7F0',
                border: '1px solid rgba(28,27,25,0.08)',
                padding: '24px',
                borderRadius: '2px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-marker-red)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  STAGE {stages[activeStage].num} — {stages[activeStage].title.toUpperCase()}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', background: 'rgba(28,27,25,0.06)', padding: '2px 8px', borderRadius: '2px', color: 'var(--color-ink-muted)' }}>
                  STAGE ARCHITECTURE & CONTROLS
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-ink-primary)', marginBottom: '8px' }}>
                {stages[activeStage].title}
              </h4>

              <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--color-ink-secondary)', marginBottom: '1.25rem' }}>
                {stages[activeStage].detail}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', borderTop: '1px dashed rgba(28,27,25,0.1)', paddingTop: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2 size={15} color="var(--color-muted-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Execution:</strong> {stages[activeStage].desc}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <CheckCircle2 size={15} color="var(--color-muted-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Quality Control:</strong> Continuous evaluation, schema validation, and confidence calibration.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Decisions */}
          <div>
            <div style={{ borderBottom: '1px solid rgba(28,27,25,0.12)', paddingBottom: '0.65rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-marker-red)', fontWeight: 700, letterSpacing: '0.12em' }}>
                ARCHITECTURAL TRADE-OFFS
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-ink-primary)', margin: '0.2rem 0 0' }}>
                Three Decisions
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {decisions.map((dec) => (
                <div
                  key={dec.num}
                  style={{
                    background: '#FAF7F0',
                    border: '1px solid rgba(28,27,25,0.12)',
                    padding: '1.25rem',
                    borderRadius: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-marker-red)', fontWeight: 700 }}>
                    DECISION {dec.num}
                  </span>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-ink-primary)', margin: 0 }}>
                    {dec.title}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.55, color: 'var(--color-ink-secondary)' }}>
                    {dec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What I Got Wrong First */}
          <div
            style={{
              background: '#FFFDF8',
              border: '1px solid rgba(28,27,25,0.12)',
              borderLeft: '4px solid var(--color-marker-red)',
              padding: '1.5rem',
              borderRadius: '2px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <AlertTriangle size={16} color="var(--color-marker-red)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-marker-red)', letterSpacing: '0.08em' }}>
                WHAT I GOT WRONG FIRST
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--color-ink-primary)' }}>
              The training data was messier than I expected. Years of historical quotations with the same product spelled four different ways, free-text requirements, duplicates. My first model also learned to predict the popular products, because a small set of items appeared in most quotes — the class distribution was badly skewed and I hadn’t handled it explicitly. Fixing that was most of the modelling work.
            </p>
          </div>

          {/* Results & Error Analysis */}
          <div>
            <div style={{ borderBottom: '1px solid rgba(28,27,25,0.12)', paddingBottom: '0.65rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-cobalt)', fontWeight: 700, letterSpacing: '0.12em' }}>
                PRODUCTION METRICS & ERROR ANALYSIS
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-ink-primary)', margin: '0.2rem 0 0' }}>
                Results
              </h3>
            </div>

            {/* 3 Metric Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.12)', padding: '1.2rem', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--color-cobalt)', display: 'block', lineHeight: 1.1 }}>
                  87%
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-ink-primary)', display: 'block', marginTop: '4px' }}>
                  Top recommendation accuracy
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--color-ink-muted)' }}>
                  Recall@K on a held-out set
                </span>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.12)', padding: '1.2rem', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--color-cobalt)', display: 'block', lineHeight: 1.1 }}>
                  70% faster
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-ink-primary)', display: 'block', marginTop: '4px' }}>
                  Quotation turnaround
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--color-ink-muted)' }}>
                  Down from ~2 hours per quote
                </span>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.12)', padding: '1.2rem', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--color-cobalt)', display: 'block', lineHeight: 1.1 }}>
                  Zero
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-ink-primary)', display: 'block', marginTop: '4px' }}>
                  Manual correction
                </span>
                <span style={{ fontSize: '0.76rem', color: 'var(--color-ink-muted)' }}>
                  On structured line-item output
                </span>
              </div>
            </div>

            {/* Error Analysis Paragraph */}
            <div style={{ background: '#FAF7F0', border: '1px solid rgba(28,27,25,0.1)', padding: '1.2rem', borderRadius: '2px' }}>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)' }}>
                The aggregate accuracy was less useful than the error analysis. Looking at which requirement types failed told me more than the overall number — ambiguous or unusually short requirements were where it struggled, which is also where a human would ask a clarifying question. That shaped where the confidence threshold sat.
              </p>
            </div>
          </div>

          {/* What I'd Do Differently */}
          <div
            style={{
              background: '#FAF7F0',
              border: '1px solid rgba(28,27,25,0.12)',
              borderLeft: '4px solid var(--color-ink-primary)',
              padding: '1.5rem',
              borderRadius: '2px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <Lightbulb size={16} color="var(--color-ink-primary)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-ink-primary)', letterSpacing: '0.08em' }}>
                WHAT I’D DO DIFFERENTLY
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: 1.65, color: 'var(--color-ink-primary)' }}>
              Design the output contract before tuning the model. The integration format nearly killed the time saving, and it was knowable from day one.
            </p>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default QuotationPlatformExplainer;
