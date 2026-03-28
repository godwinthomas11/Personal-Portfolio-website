const skillCategories = [
  {
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Python', tag: 'Primary' },
      { name: 'Java', tag: 'Primary' },
      { name: 'C / C++', tag: 'Proficient' },
      { name: 'SQL', tag: 'Proficient' },
    ],
    accent: 'amber',
  },
  {
    label: 'AI / ML',
    icon: '⚙',
    skills: [
      { name: 'Machine Learning', tag: 'Core' },
      { name: 'NLP', tag: 'Core' },
      { name: 'Recommendation Systems', tag: 'Applied' },
      { name: 'Scikit-learn', tag: 'Applied' },
      { name: 'Model Evaluation', tag: 'Applied' },
      { name: 'Model Deployment', tag: 'Basic' },
    ],
    accent: 'electric',
  },
  {
    label: 'Data & Analytics',
    icon: '▦',
    skills: [
      { name: 'Data Visualization (Power BI)', tag: 'Advanced' },
      { name: 'Pandas / NumPy', tag: 'Advanced' },
      { name: 'Data Preprocessing', tag: 'Proficient' },
      { name: 'Feature Engineering', tag: 'Proficient' },
      { name: 'Exploratory Data Analysis', tag: 'Proficient' },
      { name: 'Statistical Analysis', tag: 'Proficient' },
    ],
    accent: 'jade',
  },
  {
    label: 'Core CS',
    icon: '◈',
    skills: [
      { name: 'Data Structures', tag: 'Strong' },
      { name: 'Algorithms', tag: 'Strong' },
      { name: 'OOP Design', tag: 'Strong' },
      { name: 'MVC Architecture', tag: 'Applied' },
    ],
    accent: 'amber',
  },
  {
    label: 'Tools & Platforms',
    icon: '⌘',
    skills: [
      { name: 'Git / GitHub', tag: 'Daily' },
      { name: 'VS Code', tag: 'Daily' },
      { name: 'Figma', tag: 'Proficient' },
      { name: 'Apache Tomcat', tag: 'Applied' },
    ],
    accent: 'electric',
  },
  {
    label: 'Web & Frameworks',
    icon: '◻',
    skills: [
      { name: 'Java Servlets / JSP', tag: 'Applied' },
      { name: 'REST APIs', tag: 'Applied' },
      { name: 'MySQL', tag: 'Proficient' },
      { name: 'Backend Development', tag: 'Applied' },
      { name: 'A-Frame / WebVR', tag: 'Explored' },
    ],
    accent: 'jade',
  },
]

const accentColors = {
  amber: {
    icon: 'text-amber',
    tag: 'text-amber bg-amber/8 border-amber/20',
    dot: 'bg-amber',
    glow: 'hover:border-amber/30 hover:shadow-[0_0_24px_rgba(251,191,36,0.05)]',
  },
  electric: {
    icon: 'text-electric',
    tag: 'text-electric bg-electric/8 border-electric/20',
    dot: 'bg-electric',
    glow: 'hover:border-electric/30 hover:shadow-[0_0_24px_rgba(59,130,246,0.05)]',
  },
  jade: {
    icon: 'text-jade',
    tag: 'text-jade bg-jade/8 border-jade/20',
    dot: 'bg-jade',
    glow: 'hover:border-jade/30 hover:shadow-[0_0_24px_rgba(52,211,153,0.05)]',
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="section-number">04 — Skills</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-light text-text leading-tight">
            The stack I{' '}
            <span className="italic text-gradient-amber">wield.</span>
          </h2>
          <p className="font-body text-dim text-sm max-w-xs leading-relaxed">
            Tools that translate curiosity into working systems.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, i) => {
            const c = accentColors[category.accent]
            return (
              <div
                key={category.label}
                className={`reveal reveal-delay-${(i % 3) + 1} group bg-surface border border-border rounded-xl p-6 transition-all duration-500 hover:-translate-y-0.5 ${c.glow}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-mono text-base ${c.icon}`}>{category.icon}</span>
                  <span className="font-body font-semibold text-text text-sm tracking-wide">
                    {category.label}
                  </span>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 group/pill"
                    >
                      <span
                        className={`font-body text-xs text-soft/80 border border-border/60 bg-surface/80 rounded-md px-2.5 py-1 leading-none transition-colors duration-200 group-hover/pill:text-text group-hover/pill:border-border flex items-center gap-1.5`}
                      >
                        <span className={`w-1 h-1 rounded-full ${c.dot} opacity-60 flex-shrink-0`} />
                        {skill.name}
                        <span
                          className={`ml-0.5 font-mono text-[9px] uppercase tracking-wider px-1 py-0.5 rounded border ${c.tag} opacity-70`}
                        >
                          {skill.tag}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom section — always learning */}
        <div className="reveal mt-8 p-6 rounded-xl border border-border bg-surface/50 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-amber text-lg">↗</span>
            <div>
              <div className="font-body font-medium text-text text-sm">Always learning</div>
              <div className="font-body text-dim text-xs">
                Currently exploring: Large Language Models, RAG systems, Agentic AI
              </div>
            </div>
          </div>
          <span className="font-mono text-xs text-dim border border-border px-3 py-1.5 rounded-full">
            2026 focus
          </span>
        </div>
      </div>
    </section>
  )
}
