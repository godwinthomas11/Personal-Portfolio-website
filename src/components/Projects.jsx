const projects = [
  {
    number: '01',
    title: 'Space Mission VR Experience',
    description:
      'An immersive WebVR platform simulating space missions with interactive learning. Selected among Top 40 global teams out of 8700+ in the NASA Space Apps Challenge — the only team from India to reach this stage.',
    impact: 'NASA Global Finalist',
    impactColor: 'electric',
    tech: ['Unity', 'A-Frame', 'TensorFlow', 'WebVR'],
    github: 'https://github.com/godwinthomas11/Nasa-Space-Apps-Challenge',
    badge: '🚀 NASA Top 40 / 8700+ Teams',
    badgeVariant: 'blue',
    featured: true,
  },
  {
    number: '02',
    title: 'AI Fraud Detection & Trust Intelligence',
    description:
      'Full-stack web application for fraud detection and digital trust scoring using rule-based NLP and anomaly detection. Complete MVC architecture with authentication and grievance management system.',
    impact: 'Production-ready system',
    impactColor: 'jade',
    tech: ['Java', 'Servlets', 'JSP', 'MySQL', 'NLP', 'Apache Tomcat'],
    github: 'https://github.com/godwinthomas11/AI-Based-Digital-Trust-Fraud-Detection-Grievance-Intelligence-System',
    badge: '🛡 AI-Powered Security',
    badgeVariant: 'green',
    featured: true,
  },
  {
    number: '03',
    title: 'Wardrobe Coordination Assistant',
    description:
      'ML-based personalized outfit recommendation system using text inputs and natural language processing. The research behind this system was published in IJRASET peer-reviewed journal.',
    impact: 'Published Research — IJRASET',
    impactColor: 'amber',
    tech: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn'],
    github: 'https://github.com/godwinthomas11/Outfit-Recommendation-System-using-Deep-Learning',
    badge: '📄 Published Research',
    badgeVariant: 'amber',
    featured: false,
  },
  {
    number: '04',
    title: 'Power BI R&D Analytics Dashboard',
    description:
      'Enterprise-grade analytics dashboards built during internship at Schindler India. Managed Global Product Governance (GPG) system and delivered data-driven insights to cross-functional R&D teams.',
    impact: 'Schindler India — Enterprise Use',
    impactColor: 'amber',
    tech: ['Power BI', 'Python', 'Pandas', 'SQL', 'DAX'],
    github: 'https://github.com/godwin-thomas',
    badge: '🏢 Enterprise Deployment',
    badgeVariant: 'amber',
    featured: false,
  },
]

const badgeStyles = {
  blue: 'bg-electric/10 text-electric border-electric/20',
  green: 'bg-jade/10 text-jade border-jade/20',
  amber: 'bg-amber/10 text-amber border-amber/20',
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="section-number">02 — Projects</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-light text-text leading-tight">
            Things I've{' '}
            <span className="italic text-gradient-amber">built.</span>
          </h2>
          <p className="font-body text-dim text-sm max-w-xs leading-relaxed">
            From NASA to R&D — each project is a story of pushing past what's possible.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={project.number} project={project} delay={i + 1} large />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(2).map((project, i) => (
            <ProjectCard key={project.number} project={project} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, delay, large }) {
  return (
    <div
      className={`reveal reveal-delay-${delay} group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-amber/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/5 ${
        large ? 'p-8' : 'p-6'
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-muted">{project.number}</span>
        <div className="flex items-center gap-3">
          <span
            className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
              badgeStyles[project.badgeVariant]
            }`}
          >
            {project.badge}
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-dim hover:text-text hover:border-text transition-all duration-300 group-hover:border-amber/40 group-hover:text-amber"
            aria-label="GitHub"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Title */}
      <h3
        className={`font-display font-light text-text mb-3 leading-tight group-hover:text-gradient-amber transition-all duration-300 ${
          large ? 'text-2xl' : 'text-xl'
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-dim text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2 py-1 rounded bg-void border border-border text-muted group-hover:border-border/80 group-hover:text-dim transition-all duration-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Hover overlay line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
