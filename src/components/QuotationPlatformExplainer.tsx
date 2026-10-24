'use client';

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Cpu,
  FileCode2,
  UserCheck,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  Lock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const QuotationPlatformExplainer: React.FC = () => {
  const caseStudy = portfolioData.caseStudies[0];
  const [activeStage, setActiveStage] = useState<number>(2); // Default to ML recommendation stage
  const [confidenceScore, setConfidenceScore] = useState<number>(0.92);

  const stages = [
    {
      num: '01',
      title: 'Customer Requirement Ingestion',
      subtitle: 'Unstructured RFP / Scope Extraction',
      icon: <FileSpreadsheet size={18} />,
      desc: 'Parses heterogeneous enterprise RFP documents, line-item requests, volume tiers, and delivery dates using layout-aware parsing and schema extraction.'
    },
    {
      num: '02',
      title: 'ML Recommendation Engine',
      subtitle: 'Candidate Item & Price Prediction',
      icon: <Cpu size={18} />,
      desc: 'PyTorch and Scikit-learn hybrid models vector-match extracted requirements against the 10,000+ catalogue items, computing ranked candidate bills-of-materials.'
    },
    {
      num: '03',
      title: 'LLM Proposal Synthesis',
      subtitle: 'Type-Safe Output Validation',
      icon: <FileCode2 size={18} />,
      desc: 'Orchestrates prompt chains using strict Pydantic JSON schemas. Synthesizes contextual proposal narratives while ensuring price numbers match the ERP catalog.'
    },
    {
      num: '04',
      title: 'Human Review & Approval',
      subtitle: 'Confidence-Gated Escalation Gate',
      icon: <UserCheck size={18} />,
      desc: 'Predictions with confidence < 0.85 are highlighted and routed to senior quotation estimators. Approved adjustments feed active continuous learning datasets.'
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
          subtitle="SYSTEM ARCHITECTURE"
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
            gap: '2.5rem'
          }}
        >
          {/* Section Header */}
          <div style={{ maxWidth: '880px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-marker-red)', fontWeight: 700, letterSpacing: '0.15em' }}>
                CASE STUDY 01 / DEEP DIVE
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', background: '#EEE', padding: '2px 8px', borderRadius: '2px', color: '#555' }}>
                ROLE: LEAD DEVELOPER · WEROUTE SYSTEMS
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 900,
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                color: 'var(--color-ink-primary)'
              }}
            >
              From Raw Customer Requirements <br />
              <span style={{ color: 'var(--color-marker-red)' }}>to Verified Enterprise Quotations.</span>
            </h2>

            <p style={{ marginTop: '0.75rem', fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)' }}>
              Enterprise proposal creation previously required staff to search product catalogues, identify relevant items, and assemble quotations manually.
              Srushti designed and led the development of a hybrid AI platform integrating ML product recommendation, structured LLM drafting, and human-in-the-loop review.
            </p>
          </div>

          {/* Interactive Workflow Pipeline */}
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

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(28,27,25,0.08)', paddingBottom: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-ink-primary)' }}>
                INTERACTIVE PIPELINE TRACE (CLICK A STAGE TO INSPECT)
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-muted)' }}>
                CONFIDENTIALITY: SIMPLIFIED CONCEPTUAL REPRESENTATION
              </span>
            </div>

            {/* Stages Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
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
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: isActive ? '#AAA' : '#777' }}>
                      {st.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Detailed Breakdown */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem',
                backgroundColor: '#FAF7F0',
                border: '1px solid rgba(28,27,25,0.08)',
                padding: '20px',
                borderRadius: '2px'
              }}
            >
              {/* Detailed Description */}
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-marker-red)', fontWeight: 700, display: 'block', marginBottom: '4px' }}>
                  STAGE {stages[activeStage].num} ARCHITECTURE & CONTROLS
                </span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-ink-primary)', marginBottom: '8px' }}>
                  {stages[activeStage].title}
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)', marginBottom: '1rem' }}>
                  {stages[activeStage].desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={14} color="var(--color-muted-green)" />
                    <span><strong>Key Decision:</strong> Type-safe Pydantic schema validation for all downstream ERP parameters.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={14} color="var(--color-muted-green)" />
                    <span><strong>Trade-off:</strong> Prioritizing item prediction precision over coverage to prevent incorrect quotes.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={14} color="var(--color-muted-green)" />
                    <span><strong>Observability:</strong> Real-time latency tracking and model confidence telemetry logged to MLflow.</span>
                  </div>
                </div>
              </div>

              {/* Simulated Synthetic Schema / Output Card (Illustrative) */}
              <div
                style={{
                  backgroundColor: '#1E1D1A',
                  color: '#FAF7F0',
                  padding: '16px',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #333'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '6px', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--color-highlighter)', fontWeight: 700 }}>
                      SYNTHETIC_SCHEMA_PREVIEW.JSON
                    </span>
                    <span style={{ color: '#888' }}>TYPE-SAFE DRAFT</span>
                  </div>

                  <pre style={{ margin: 0, color: '#CCC', lineHeight: 1.45, overflowX: 'auto' }}>
                    {`{
  "quote_id": "QT-2026-0891A",
  "client_tier": "Enterprise-Gold",
  "recommended_items": [
    { "sku": "SYS-OPTIC-400G", "rank": 1, "conf": ${confidenceScore} },
    { "sku": "CAB-FIBER-LC-10M", "rank": 2, "conf": 0.94 }
  ],
  "llm_draft_status": "VALIDATED_JSON",
  "requires_human_approval": ${confidenceScore < 0.85 ? 'true' : 'false'},
  "approval_reason": ${confidenceScore < 0.85 ? '"Confidence below 0.85 threshold"' : '"Passes automated release rules"'}
}`}
                  </pre>
                </div>

                <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #2A2926', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.62rem', color: '#888' }}>
                    Confidence Simulation: {confidenceScore}
                  </span>
                  <button
                    onClick={() => setConfidenceScore(confidenceScore === 0.92 ? 0.78 : 0.92)}
                    style={{
                      background: '#333',
                      color: '#FAF7F0',
                      border: 'none',
                      padding: '3px 8px',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      fontSize: '0.62rem'
                    }}
                  >
                    Simulate {confidenceScore === 0.92 ? 'Low Confidence (<0.85)' : 'High Confidence (0.92)'}
                  </button>
                </div>
              </div>
            </div>

            {/* Confidentiality Notice Caption */}
            <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-ink-muted)', fontStyle: 'italic' }}>
                Illustrative system diagram; implementation details simplified for confidentiality. Selected professional work at WeRoute Systems.
              </span>
            </div>
          </div>
        </div>
        </SectionCurtain>
      </div>
    </section>
  );
};

export default QuotationPlatformExplainer;
