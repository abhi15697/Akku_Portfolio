import React, { useState, useEffect } from 'react';
import {
  FileText,
  ShieldCheck,
  ClipboardCheck,
  Download,
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Layers,
  Briefcase,
  Activity,
  Calendar,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Workflow,
  Search,
  Users,
  Building2,
  PackageCheck,
  Languages,
  Clock
} from 'lucide-react';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const croSkillsData = [
    {
      title: 'Protocol Tracking & Budgeting Reports',
      category: 'tracking',
      desc: 'Scheduling, maintaining, and distributing Protocol Tracking Reports to clients to monitor budgeting and trial milestones.',
      icon: <Activity size={20} />
    },
    {
      title: 'Site Feasibility & Investigator Selection',
      category: 'operations',
      desc: 'Identifying prospective investigators, conducting site visits, and completing comprehensive clinical feasibility questionnaires.',
      icon: <Building2 size={20} />
    },
    {
      title: 'Laboratory Manual Preparation',
      category: 'operations',
      desc: 'Configuring specimen collection tubes, transport temperatures, and Clinical Specimen Tracking Repository (CSTR) setups.',
      icon: <FileText size={20} />
    },
    {
      title: 'Site Initiation, Monitoring & Closeout',
      category: 'operations',
      desc: 'Participating in Site Initiation Visits (SIV), routine site monitoring, and Site Closeout Visits (COV) as clinical coordinator.',
      icon: <CheckCircle2 size={20} />
    },
    {
      title: 'Patient Recruitment & Visit Scheduling',
      category: 'logistics',
      desc: 'Executing patient recruitment strategies, scheduling clinical trial visits, and tracking patient follow-up through study completion.',
      icon: <Calendar size={20} />
    },
    {
      title: 'Clinical Supplies & Kit Logistics',
      category: 'logistics',
      desc: 'Coordinating the ordering, tracking, and timely distribution of clinical study supplies and lab kits for CRAs and investigator sites.',
      icon: <PackageCheck size={20} />
    },
    {
      title: 'Translation Workflow Management',
      category: 'logistics',
      desc: 'Managing study document translation dossiers, uploading to portals, coordinating vendor quotes, and tracking turnaround times (TAT).',
      icon: <Languages size={20} />
    },
    {
      title: 'Global Sponsor & PM Communication',
      category: 'tracking',
      desc: 'Communicating essential study award details to Global Project Managers and liaising directly with pharmaceutical sponsors.',
      icon: <Users size={20} />
    },
    {
      title: 'CAPA Formulation & Reporting',
      category: 'qa',
      desc: 'Preparing Corrective and Preventive Action (CAPA) reports for management review to determine remedial actions and audit readiness.',
      icon: <ShieldCheck size={20} />
    },
    {
      title: 'ICH-GCP (E6) & SOP Compliance',
      category: 'qa',
      desc: 'Enforcing strict compliance with International Conference on Harmonisation Good Clinical Practice guidelines and standard SOPs.',
      icon: <Award size={20} />
    },
    {
      title: 'Peer QC Checks & Tracker Oversight',
      category: 'qa',
      desc: 'Conducting peer quality control reviews across trial documentation, checking databases, and maintaining active tracker logs.',
      icon: <ClipboardCheck size={20} />
    },
    {
      title: 'Study Management Software & EDC',
      category: 'tracking',
      desc: 'Updating trial details in Study Management Software, maintaining trackers, and transferring paper CRF records into EDC systems.',
      icon: <Layers size={20} />
    }
  ];

  const filteredSkills =
    activeSkillCategory === 'all'
      ? croSkillsData
      : croSkillsData.filter(s => s.category === activeSkillCategory);

  const croLifecycleSteps = [
    {
      step: '01',
      title: 'Trial Startup & Site Feasibility',
      desc: 'Identifying investigators matching protocol criteria, visiting prospective sites, completing feasibility assessments, and coordinating with Institutional Ethics Committees (IECs).',
      tags: ['Site Feasibility', 'Investigator Selection', 'IEC & Ethics', 'Startup Documentation']
    },
    {
      step: '02',
      title: 'Protocol Setup & Lab Manuals',
      desc: 'Authoring customized Laboratory Manuals, defining specimen tube configurations and transport temperatures in CSTR templates, and issuing new study notifications to Global PMs.',
      tags: ['Lab Manual Authoring', 'CSTR Configuration', 'Global PM Briefing', 'Tube Specifications']
    },
    {
      step: '03',
      title: 'Study Conduct, Logistics & Site Support',
      desc: 'Managing clinical supply/kit logistics, coordinating subject visits, tracking translation vendor dossiers (TAT), resolving site queries, and distributing protocol tracking reports.',
      tags: ['Kit Logistics', 'Protocol Tracking', 'Translation Workflows', 'Site Coordination']
    },
    {
      step: '04',
      title: 'QA Oversight, CAPA & Closeout',
      desc: 'Executing rigorous Peer QC checks across study records, formulating CAPA reports for management review, supporting site closeout visits (COV), and ensuring audit readiness.',
      tags: ['Peer QC Reviews', 'CAPA Reporting', 'Site Closeout (COV)', 'Audit & Inspection Readiness']
    }
  ];

  return (
    <div className="portfolio-app">
      {/* ===================================================================
          NAVBAR
          =================================================================== */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="nav-brand">
            <div className="brand-badge">AS</div>
            <div className="brand-info">
              <h1>Akanksha Srivastava</h1>
              <p>Clinical Research Operations &amp; Project Coordination</p>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#lifecycle">CRO Lifecycle</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Competencies</a></li>
            <li><a href="#education">Education &amp; Research</a></li>
            <li><a href="#resumes">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title="Toggle Light / Dark Mode"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a
              href="/Akanksha_Srivastava_Resume.pdf"
              download="Akanksha_Srivastava_Resume.pdf"
              className="btn btn-primary btn-sm"
            >
              <Download size={15} /> CRO Resume PDF
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav container">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#lifecycle" onClick={() => setMobileMenuOpen(false)}>CRO Lifecycle</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Competencies</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education &amp; Research</a>
            <a href="#resumes" onClick={() => setMobileMenuOpen(false)}>Download Resume</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      <main>
        {/* ===================================================================
            HERO SECTION (CRO FOCUSED)
            =================================================================== */}
        <section id="hero" className="hero-section">
          <div className="hero-bg-glow"></div>
          <div className="container hero-content">
            <div className="status-chip">
              <span className="status-dot"></span>
              <span>Available for Clinical Project Coordinator &amp; CRO Operations Roles</span>
            </div>

            <h1 className="hero-title">
              Driving Clinical Trial Success with <br />
              <span className="gradient-text">Operational Rigor &amp; Project Precision</span>
            </h1>

            <p className="hero-subtitle">
              Clinical Project Coordination | Clinical Trial Operations | Site Services | Protocol Execution
            </p>

            <p className="hero-description">
              Dedicated clinical research professional with <strong>6+ years of progressive tenure at global CRO leader ICON plc</strong> (2020 – Present).
              Expertise in end-to-end trial coordination, laboratory manual development, protocol tracking, clinical kit logistics,
              translation vendor management, and multi-stakeholder communication across Global Project Managers, investigator sites, and trial sponsors.
            </p>

            <div className="hero-cta-group">
              <a href="#experience" className="btn btn-primary">
                <Briefcase size={18} /> View Career at ICON plc
              </a>
              <a href="#resumes" className="btn btn-secondary">
                <Download size={18} /> Download CRO Resume (PDF)
              </a>
            </div>

            {/* Quick Stats Ribbon */}
            <div className="stats-ribbon">
              <div className="glass-card stat-card">
                <span className="stat-number gradient-text">6+</span>
                <span className="stat-label">Years Global CRO Experience</span>
              </div>
              <div className="glass-card stat-card">
                <span className="stat-number gradient-text">100%</span>
                <span className="stat-label">ICH-GCP (E6) &amp; SOP Compliance</span>
              </div>
              <div className="glass-card stat-card">
                <span className="stat-number gradient-text">3x</span>
                <span className="stat-label">Promotions at ICON plc</span>
              </div>
              <div className="glass-card stat-card">
                <span className="stat-number gradient-text">End-to-End</span>
                <span className="stat-label">Protocol &amp; Site Lifecycle</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            ABOUT SECTION (CRO POSITIONING)
            =================================================================== */}
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Sparkles size={14} /> Profile Overview</span>
              <h2 className="section-title">Operational Excellence in Clinical Research</h2>
              <p className="section-subtitle">
                Pairing a robust scientific biotechnology background with disciplined project coordination and cross-functional CRO delivery.
              </p>
            </div>

            <div className="glass-card" style={{ maxWidth: '960px', margin: '0 auto', lineHeight: '1.7' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Over my 6+ years at <strong>ICON plc</strong>, I have advanced from <strong>Site Services Specialist 1 &amp; 2</strong> to <strong>Lab Project Coordinator 1</strong>. My core strengths focus on executing clinical trial deliverables on schedule: preparing customized laboratory manuals and Clinical Specimen Tracking Repository (CSTR) setups, distributing protocol tracking reports to client sponsors for budgeting oversight, coordinating clinical kit supplies, and supervising document translation workflows with strict turnaround time (TAT) monitoring.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
                Equipped with a <strong>Post Graduate Diploma in Clinical Research and Data Management</strong> and an <strong>M.Sc. in Biotechnology</strong>, I bring deep regulatory adherence (ICH-GCP E6, SOPs) and a proactive approach to risk escalation and CAPA reporting, collaborating smoothly with Global Project Managers, Clinical Research Associates (CRAs), principal investigators, and sponsor stakeholders.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            CRO CLINICAL TRIAL OPERATIONS LIFECYCLE
            =================================================================== */}
        <section id="lifecycle" className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Workflow size={14} /> Operational Lifecycle</span>
              <h2 className="section-title">CRO Trial Execution Continuum</h2>
              <p className="section-subtitle">
                Demonstrated operational contributions across every phase of clinical study coordination.
              </p>
            </div>

            <div className="workflow-grid">
              {croLifecycleSteps.map((item, idx) => (
                <div
                  key={idx}
                  className={`glass-card workflow-card ${activeWorkflowStep === idx ? 'active-step' : ''}`}
                  onClick={() => setActiveWorkflowStep(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="step-indicator">{item.step}</div>
                  <h3 className="workflow-title">{item.title}</h3>
                  <p className="workflow-desc">{item.desc}</p>
                  <div className="workflow-tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="mini-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            PROFESSIONAL EXPERIENCE TIMELINE (ICON plc & Samahitha)
            =================================================================== */}
        <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Briefcase size={14} /> CRO Career Track</span>
              <h2 className="section-title">Progressive Experience &amp; Responsibilities</h2>
              <p className="section-subtitle">
                6+ years of verified clinical research operations and project coordination tenure.
              </p>
            </div>

            <div className="timeline-wrapper">
              {/* Employer 1: ICON plc */}
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">ICON plc</h3>
                    <p className="timeline-meta">Bengaluru, Karnataka, India &bull; Global CRO Leader</p>
                  </div>
                  <span className="timeline-duration">January 2020 – Present (6+ Years)</span>
                </div>

                {/* Sub-role 1: Lab Project Coordinator 1 */}
                <div className="role-sub-item">
                  <div className="role-title-row">
                    <h4 className="role-name">Lab Project Coordinator 1</h4>
                    <span className="role-time">March 2024 – Present</span>
                  </div>
                  <ul className="role-bullets">
                    <li>Generate and quality-check weekly and monthly internal and external management reports for Project Coordinator II, Project Managers, and sponsors, ensuring zero data omissions and complete accuracy.</li>
                    <li>Prepare customized Laboratory Manuals according to Project Manager and sponsor specifications, configuring specimen collection tubes, transport temperatures, and Clinical Specimen Tracking Repository (CSTR) parameters into standard templates.</li>
                    <li>Maintain records of newly awarded clinical studies and issue formal study notification communications containing key trial parameters to assigned Global Project Managers.</li>
                    <li>Schedule, maintain, and distribute Protocol Tracking Reports to sponsor clients to support trial budgeting and protocol-related activity management.</li>
                    <li>Prepare Corrective and Preventive Action (CAPA) reports for cross-departmental management review to determine required remedial actions and advance CAPA milestones.</li>
                    <li>Conduct peer quality-control (Peer QC) checks, review study databases and documentation for completeness, maintain tracking logs, and follow up with Project Managers.</li>
                    <li>Resolve queries by systematically reviewing laboratory requisition forms, site responses, and discrepancy documentation to ensure timely closure.</li>
                    <li>Perform clinical data reconciliation and update study details within Study Management Software per Project Manager and sponsor requirements.</li>
                  </ul>
                </div>

                {/* Sub-roles 2 & 1: Site Services Specialist 2 & 1 */}
                <div className="role-sub-item">
                  <div className="role-title-row">
                    <h4 className="role-name">Site Services Specialist 2</h4>
                    <span className="role-time">April 2022 – March 2024</span>
                  </div>
                  <div className="role-title-row" style={{ marginTop: '4px' }}>
                    <h4 className="role-name">Site Services Specialist 1</h4>
                    <span className="role-time">January 2020 – March 2022</span>
                  </div>
                  <ul className="role-bullets">
                    <li>Supported clinical study conduct activities in full adherence to Standard Operating Procedures (SOPs) and study-specific work instructions.</li>
                    <li>Coordinated the ordering, tracking, and timely distribution of clinical study supplies and kits based on sponsor, CRA, or clinical investigator site requests.</li>
                    <li>Managed end-to-end clinical study document translation workflows for laboratory manuals, Site Coordination Guides (SCGs), and related study documents.</li>
                    <li>Prepared translation dossiers based on Project Manager requests, uploaded documentation to translation portals, coordinated vendor quotations and management approvals, reviewed and proofread translated documents, and tracked vendor turnaround times (TAT).</li>
                    <li>Investigated subject visit issues and managed discrepancies through to prompt, effective resolution.</li>
                    <li>Issued and resolved data queries via Data Clarification Forms (DCFs) with clinical sites and internal teams, following up until completion.</li>
                    <li>Entered and validated subject demographics, subject fasting status, and protocol-specific visit information.</li>
                    <li>Supported database locking activities by identifying, investigating, and resolving visit discrepancies.</li>
                    <li>Escalated operational issues and study bottlenecks proactively to Team Leads, Line Managers, and Project Managers.</li>
                    <li>Performed external data reconciliation in coordination with Project Managers to maintain data alignment.</li>
                  </ul>
                </div>
              </div>

              {/* Employer 2: Samahitha Research Solutions */}
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">Samahitha Research Solutions</h3>
                    <p className="timeline-meta">Bengaluru, Karnataka, India &bull; Clinical Research Organization</p>
                  </div>
                  <span className="timeline-duration">April 2019 – October 2019</span>
                </div>

                <div className="role-sub-item">
                  <div className="role-title-row">
                    <h4 className="role-name">Clinical Research Coordinator (CRC) Intern</h4>
                    <span className="role-time">April 2019 – October 2019</span>
                  </div>
                  <ul className="role-bullets">
                    <li>Identified prospective clinical investigators and trial sites matching protocol criteria; conducted site visits and completed site feasibility assessment questionnaires.</li>
                    <li>Supported clinical study timelines, milestone tracking, and project coordination to ensure scheduled deliverables stayed on track.</li>
                    <li>Monitored clinical trial progress and operational KPIs, following up with team members, Line Managers, and CRAs to address deviations from the study plan.</li>
                    <li>Participated in Site Initiation Visits (SIV), Site Monitoring Visits, and Site Closeout Visits (COV) under senior coordinator supervision.</li>
                    <li>Coordinated patient recruitment activities, scheduled patient visits, and supported patient trial follow-up through completion.</li>
                    <li>Transferred clinical trial data from paper Case Report Forms (CRF) into Electronic Data Capture (EDC) systems.</li>
                    <li>Coordinated and communicated with stakeholders across all levels, including principal investigators, patients, Institutional Ethics Committees (IECs), and CRO project teams.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            CORE COMPETENCIES & DOMAIN EXPERTISE (CRO FOCUSED)
            =================================================================== */}
        <section id="skills" className="section-padding">
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><Layers size={14} /> CRO Competencies</span>
              <h2 className="section-title">Core Skills &amp; Domain Expertise</h2>
              <p className="section-subtitle">
                Operational, regulatory, and logistics skills tailored for Clinical Research Organizations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="skills-filter-bar">
              <button
                className={`filter-tab ${activeSkillCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory('all')}
              >
                All Competencies
              </button>
              <button
                className={`filter-tab ${activeSkillCategory === 'operations' ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory('operations')}
              >
                Trial Operations &amp; Lab
              </button>
              <button
                className={`filter-tab ${activeSkillCategory === 'tracking' ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory('tracking')}
              >
                Project Tracking &amp; Reporting
              </button>
              <button
                className={`filter-tab ${activeSkillCategory === 'logistics' ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory('logistics')}
              >
                Site Services &amp; Logistics
              </button>
              <button
                className={`filter-tab ${activeSkillCategory === 'qa' ? 'active' : ''}`}
                onClick={() => setActiveSkillCategory('qa')}
              >
                Quality Assurance &amp; GCP
              </button>
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="glass-card skill-item">
                  <div className="skill-icon-box">{skill.icon}</div>
                  <div>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-desc">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            EDUCATION & RESEARCH HIGHLIGHT
            =================================================================== */}
        <section id="education" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-badge"><BookOpen size={14} /> Academic Background</span>
              <h2 className="section-title">Education &amp; Academic Research</h2>
              <p className="section-subtitle">
                Academic credentials and specialized training supporting clinical research excellence.
              </p>
            </div>

            <div className="edu-research-grid">
              {/* Education List */}
              <div className="glass-card">
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--accent-secondary)' }}>
                  Formal Qualifications
                </h3>

                <div className="edu-entry">
                  <div>
                    <div className="edu-degree">Post Graduate Diploma in Clinical Research and Data Management</div>
                    <div className="edu-school">PES University, Bengaluru</div>
                  </div>
                  <div className="edu-year">2018 – 2019</div>
                </div>

                <div className="edu-entry">
                  <div>
                    <div className="edu-degree">M.Sc. in Biotechnology</div>
                    <div className="edu-school">Integral University, Lucknow</div>
                  </div>
                  <div className="edu-year">2015 – 2017</div>
                </div>

                <div className="edu-entry">
                  <div>
                    <div className="edu-degree">B.Sc. in Biology</div>
                    <div className="edu-school">National P.G. College, Lucknow University</div>
                  </div>
                  <div className="edu-year">2012 – 2015</div>
                </div>

                <div className="edu-entry">
                  <div>
                    <div className="edu-degree">Intermediate (Class XII) — CBSE</div>
                    <div className="edu-school">Kendriya Vidyalaya, Aliganj, Lucknow</div>
                  </div>
                  <div className="edu-year">2010 – 2012</div>
                </div>

                <div className="edu-entry">
                  <div>
                    <div className="edu-degree">High School (Class X) — CBSE</div>
                    <div className="edu-school">Kendriya Vidyalaya, Aliganj, Lucknow</div>
                  </div>
                  <div className="edu-year">2009 – 2010</div>
                </div>
              </div>

              {/* Research & Certifications Column */}
              <div>
                {/* Dissertation Highlight */}
                <div className="research-highlight-card">
                  <span className="research-tag">CSIR-CIMAP Research Project</span>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                    “Molecular and Chemical Characterization of Artemisia species”
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    Completed an intensive 6-month laboratory research dissertation under the supervision of <strong>Dr. Narendra Kumar</strong> at the renowned <strong>CSIR-Central Institute of Medicinal and Aromatic Plants (CSIR-CIMAP)</strong>, Lucknow.
                  </p>
                </div>

                {/* Certifications Card */}
                <div className="glass-card">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '14px', color: 'var(--accent-secondary)' }}>
                    Certifications &amp; Workshops
                  </h3>
                  <ul className="role-bullets" style={{ fontSize: '0.9rem' }}>
                    <li><strong>Certificate in Information Technology (6 Months):</strong> Indira Gandhi National Open University (IGNOU).</li>
                    <li><strong>National Workshop Participation:</strong> “Skills and Strategies for a Successful Research Career” (November 2018).</li>
                    <li><strong>National Conference Session:</strong> Scientific paper presentation on “Emerging Trends in Forensic Science”, NIMHANS, Bengaluru (January 2019).</li>
                    <li><strong>Hands-on Workshop:</strong> “Basic Techniques in Pharmacology Experiments”, Department of Pharmacology, PES College of Pharmacy (2018).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            RESUME DOWNLOAD & CONTACT (CRO FOCUSED)
            =================================================================== */}
        <section id="resumes" className="section-padding">
          <div className="container">
            <div className="resume-cta-banner">
              <div>
                <h2>Download Official CRO Resume</h2>
                <p>
                  Access publication-ready, ATS-optimized PDF and HTML versions tailored for Clinical Project Coordinator and Clinical Research Operations opportunities.
                </p>
              </div>

              <div className="resume-cta-actions">
                <a
                  href="/Akanksha_Srivastava_Resume.pdf"
                  download="Akanksha_Srivastava_Resume.pdf"
                  className="btn btn-white"
                >
                  <Download size={18} /> Download CRO Resume (PDF)
                </a>
                <a
                  href="/akanksha_srivastava_resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-white"
                >
                  <ExternalLink size={18} /> View ATS HTML Resume
                </a>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div id="contact" className="section-header" style={{ marginBottom: '24px' }}>
              <span className="section-badge"><Mail size={14} /> Get in Touch</span>
              <h2 className="section-title">Let’s Connect</h2>
              <p className="section-subtitle">
                Available for discussion regarding Clinical Project Coordination and Clinical Research Operations opportunities.
              </p>
            </div>

            <div className="contact-cards-grid">
              <a href="mailto:akankshas489@gmail.com" className="glass-card contact-card">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="contact-meta">
                  <h4>Email Directly</h4>
                  <p>akankshas489@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918542827588" className="glass-card contact-card">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div className="contact-meta">
                  <h4>Phone / WhatsApp</h4>
                  <p>+91-8542827588</p>
                </div>
              </a>

              <div className="glass-card contact-card">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="contact-meta">
                  <h4>Location</h4>
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================================
          FOOTER
          =================================================================== */}
      <footer>
        <div className="container footer-content">
          <div>
            <strong>Akanksha Srivastava</strong> &bull; Clinical Research Operations &amp; Project Coordination Portfolio
          </div>
          <div>
            English (Professional) &bull; Hindi (Native) &bull; Built with React.js
          </div>
        </div>
      </footer>
    </div>
  );
}
