'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Search,
  FileText,
  CheckCheck,
  ShieldAlert,
  CornerDownRight,
  Layers,
  ArrowRight,
  Database
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SectionCurtain } from './SectionCurtain';
import { MaskingTape } from './analog/MaskingTape';
import { PushPin } from './analog/PushPin';

export const EnterpriseChatbotExplainer: React.FC = () => {
  const caseStudy = portfolioData.caseStudies[1];
  const [selectedQuery, setSelectedQuery] = useState<number>(0);

  const sampleQueries = [
    {
      q: "What is the SLA commitment for Enterprise 99.99% uptime with hybrid cloud deployment?",
      retrievedDoc: "Doc #4812 — Master Service Agreement 2024 §7.2 (Hybrid Cloud Tiers)",
      relevanceScore: "0.94 (Cross-Encoder Rank 1)",
      answer: "Under the Enterprise Tier (§7.2), hybrid cloud deployments have a 99.99% monthly uptime guarantee with a 15-minute response window for Severity-1 outages.",
      citation: "[MSA §7.2, p. 18]",
      escalated: false
    },
    {
      q: "Can custom third-party cryptographic hardware keys be provisioned in the sovereign EU region?",
      retrievedDoc: "Doc #1092 — Regional Compliance Matrix v3.1 (EU Sovereignty Annex)",
      relevanceScore: "0.68 (Confidence below 0.75 threshold)",
      answer: "Low retrieval overlap detected. This inquiry involves custom sovereign compliance policies and has been escalated to the Enterprise Security Team.",
      citation: "Escalated to Human Specialist (Ticket #SEC-8921)",
      escalated: true
    }
  ];

  return (
    <section
      id="chapter-assistant"
      data-chapter="assistant"
      className="scroll-chapter paper-stage"
    >
      <div className="scroll-stage">
        {/* Theatrical Stage Curtain Section Reveal */}
        <SectionCurtain
          num="03"
          title="ENTERPRISE NLP CHATBOT & KNOWLEDGE ASSISTANT"
          subtitle="RETRIEVAL & GROUNDING ARCHITECTURE"
          bgColor="var(--color-ink-primary)"
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
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-cobalt)', fontWeight: 700, letterSpacing: '0.15em' }}>
                CASE STUDY 02 / DEEP DIVE
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', background: '#EEE', padding: '2px 8px', borderRadius: '2px', color: '#555' }}>
                ROLE: SENIOR AI/ML ENGINEER · WEROUTE SYSTEMS
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
              Multi-Turn Grounded RAG with <br />
              <span style={{ color: 'var(--color-cobalt)' }}>Verifiable Source Citations.</span>
            </h2>

            <p style={{ marginTop: '0.75rem', fontSize: '0.98rem', lineHeight: 1.6, color: 'var(--color-ink-secondary)' }}>
              Repeated inquiries regarding technical specifications, enterprise pricing, and internal policies were overburdening domain specialists.
              Srushti architected a production RAG system integrating hierarchical document chunking, hybrid retrieval, cross-encoder reranking, and citation-bound generation.
            </p>
          </div>

          {/* Interactive RAG Flow Demonstration Card */}
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
            <PushPin color="#334FA1" style={{ position: 'absolute', top: '-10px', left: '30px', zIndex: 10 }} />

            {/* Step Pipeline Visualization: Question -> Retrieval -> Reranking -> Answer */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '12px',
                marginBottom: '2rem'
              }}
            >
              <div style={{ background: '#FAF7F0', border: '1px solid #DDD', padding: '12px', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-cobalt)', fontWeight: 700, display: 'block' }}>
                  STEP 1: QUERY INTENT
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                  Normalization & Expansion
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: '#666', marginTop: '4px' }}>
                  LangGraph agent tracks multi-turn context and expands technical acronyms.
                </p>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid #DDD', padding: '12px', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-cobalt)', fontWeight: 700, display: 'block' }}>
                  STEP 2: HYBRID SEARCH
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                  Dense + Sparse Retrieval
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: '#666', marginTop: '4px' }}>
                  Combines FAISS vector embeddings with BM25 keyword matching for exact terms.
                </p>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid #DDD', padding: '12px', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-cobalt)', fontWeight: 700, display: 'block' }}>
                  STEP 3: CROSS-RERANK
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                  Precision Scoring
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: '#666', marginTop: '4px' }}>
                  Cross-encoder evaluates deep query-chunk semantic relevance to discard noise.
                </p>
              </div>

              <div style={{ background: '#FAF7F0', border: '1px solid #DDD', padding: '12px', borderRadius: '2px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-cobalt)', fontWeight: 700, display: 'block' }}>
                  STEP 4: GROUNDED SYNTHESIS
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-ink-primary)' }}>
                  Inline Citations & Guard
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', color: '#666', marginTop: '4px' }}>
                  LLM restricted strictly to retrieved context. Ambiguity triggers human escalation.
                </p>
              </div>
            </div>

            {/* Interactive Query Simulator */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setSelectedQuery(0)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '8px 14px',
                    borderRadius: '2px',
                    border: selectedQuery === 0 ? '1.5px solid var(--color-cobalt)' : '1px solid #DDD',
                    background: selectedQuery === 0 ? 'rgba(51, 79, 161, 0.08)' : '#FFF',
                    color: selectedQuery === 0 ? 'var(--color-cobalt)' : '#555',
                    cursor: 'pointer'
                  }}
                >
                  Scenario A: Grounded Knowledge Retrieval (Pass)
                </button>
                <button
                  onClick={() => setSelectedQuery(1)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '8px 14px',
                    borderRadius: '2px',
                    border: selectedQuery === 1 ? '1.5px solid var(--color-marker-red)' : '1px solid #DDD',
                    background: selectedQuery === 1 ? 'rgba(227, 75, 60, 0.08)' : '#FFF',
                    color: selectedQuery === 1 ? 'var(--color-marker-red)' : '#555',
                    cursor: 'pointer'
                  }}
                >
                  Scenario B: Low Confidence → Human Escalation
                </button>
              </div>

              {/* Simulation Output Card */}
              <div
                style={{
                  backgroundColor: '#1E1D1A',
                  color: '#FAF7F0',
                  borderRadius: '3px',
                  padding: '20px',
                  border: '1px solid #333'
                }}
              >
                <div style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-highlighter)', fontWeight: 700 }}>
                    &gt; INCOMING USER QUERY
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#888' }}>
                    FASTAPI GATEWAY / STREAMING
                  </span>
                </div>

                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, color: '#FAF7F0', marginBottom: '14px' }}>
                  "{sampleQueries[selectedQuery].q}"
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', background: '#141311', padding: '14px', borderRadius: '2px', border: '1px solid #2B2A27' }}>
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#888', display: 'block', marginBottom: '4px' }}>
                      RETRIEVED CONTEXT & RERANK SCORE:
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#4ECA7E', display: 'block', fontWeight: 600 }}>
                      {sampleQueries[selectedQuery].relevanceScore}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#AAA', display: 'block', marginTop: '2px' }}>
                      {sampleQueries[selectedQuery].retrievedDoc}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: '#888', display: 'block', marginBottom: '4px' }}>
                      SYNTHESIZED GROUNDED ANSWER & CITATION:
                    </span>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: '#FAF7F0', margin: 0, lineHeight: 1.45 }}>
                      {sampleQueries[selectedQuery].answer}
                    </p>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: sampleQueries[selectedQuery].escalated ? 'var(--color-marker-red)' : 'var(--color-highlighter)', display: 'block', marginTop: '6px', fontWeight: 700 }}>
                      {sampleQueries[selectedQuery].citation}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Safe Discussion Note */}
            <div style={{ textAlign: 'center', borderTop: '1px dashed rgba(28,27,25,0.12)', paddingTop: '1rem' }}>
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

export default EnterpriseChatbotExplainer;
