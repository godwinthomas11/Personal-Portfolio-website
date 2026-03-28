const experiences = [
  {
    type: 'work',
    role: 'R&D Data Analysis Intern',
    company: 'Schindler India',
    location: 'Chakan, Pune',
    period: 'Mar 2024 – Aug 2024',
    description: [
      'Managed Global Product Governance (GPG) system and performed in-depth data analysis using Python',
      'Built Power BI dashboards to derive actionable insights for R&D decision-making',
      'Collaborated with cross-functional R&D teams to streamline workflows and reporting processes',
    ],
    tags: ['Python', 'Power BI', 'SQL', 'Data Analysis'],
    color: 'amber',
  },
  {
    type: 'leadership',
    role: 'Founding Head — Entrepreneurship Cell',
    company: 'MIT World Peace University',
    location: 'Pune',
    period: '2024 – 2026',
    description: [
      'Founded and led the E-Cell, driving campus startup culture and entrepreneurship initiatives',
      'Organized pitch events, hackathons, and mentorship programs for student innovators',
      'Built a community of 100+ student entrepreneurs and collaborated with external startup ecosystems',
    ],
    tags: ['Leadership', 'Strategy', 'Community Building'],
    color: 'electric',
  },
  {
    type: 'leadership',
    role: 'University Secretary — Perception & Outreach',
    company: 'Student Council, MIT-WPU',
    location: 'Pune',
    period: '2024 – 2025',
    description: [
      'Led communications, outreach strategies, and execution of major university programs',
      'Acted as liaison between student body and university administration for key initiatives',
      'Managed branding and perception for student council events and startup-facing programs',
    ],
    tags: ['Communication', 'Outreach', 'Event Management'],
    color: 'jade',
  },
]

const iconMap = {
  amber: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
    </svg>
  ),
  electric: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  jade: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0" />
    </svg>
  ),
}

const colorMap = {
  amber: { dot: 'bg-amber', text: 'text-amber', border: 'border-amber/20', bg: 'bg-amber/5' },
  electric: { dot: 'bg-electric', text: 'text-electric', border: 'border-electric/20', bg: 'bg-electric/5' },
  jade: { dot: 'bg-jade', text: 'text-jade', border: 'border-jade/20', bg: 'bg-jade/5' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="section-number">03 — Experience</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <h2 className="reveal reveal-delay-1 font-display text-[clamp(28px,4vw,44px)] font-light text-text leading-tight mb-16">
          Where I've{' '}
          <span className="italic text-gradient-amber">contributed.</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 timeline-line">
          <div className="space-y-2">
            {experiences.map((exp, i) => {
              const c = colorMap[exp.color]
              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} relative group`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[2.15rem] top-6 w-3 h-3 rounded-full border-2 border-void ${c.dot} transition-all duration-300 group-hover:scale-150`}
                  />

                  {/* Card */}
                  <div
                    className={`bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-opacity-50 transition-all duration-500 hover:-translate-y-0.5 ${c.border.replace('border-', 'hover:border-')} ml-4 mb-6`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={c.text}>{iconMap[exp.color]}</span>
                          <h3 className="font-body font-semibold text-text text-base">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-body text-soft text-sm">{exp.company}</span>
                          <span className="text-muted">·</span>
                          <span className="font-body text-dim text-xs">{exp.location}</span>
                        </div>
                      </div>
                      <span className={`font-mono text-xs px-3 py-1.5 rounded-full border ${c.border} ${c.text} ${c.bg} whitespace-nowrap`}>
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((d, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.dot}`} />
                          <span className="font-body text-dim text-sm leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 rounded bg-void border border-border text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
