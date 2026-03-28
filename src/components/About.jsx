const stats = [
  { value: '8.44', label: 'CGPA', sub: 'B.Tech AI & DS' },
  { value: '40', label: 'Global Rank', sub: 'NASA Space Apps' },
  { value: '3+  ', label: 'Projects', sub: 'AI & Full-Stack Systems' },
  { value: '1', label: 'Publication', sub: 'IJRASET Research' },
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-16">
          <span className="section-number">01 — About</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="reveal font-display text-[clamp(32px,5vw,52px)] font-light leading-tight text-text mb-8">
              Building at the
              <span className="italic text-gradient-amber"> intersection </span>
              of intelligence and impact.
            </h2>
            <div className="reveal reveal-delay-1 space-y-4 font-body text-soft leading-relaxed text-[15px]">
          <p>
I’m a B.Tech student in Artificial Intelligence & Data Science at MIT World Peace University, focused on building intelligent systems that create real-world impact.
</p>

<p>
I enjoy working at the intersection of data, systems, and problem-solving, where ideas are turned into practical and scalable solutions.
</p>

<p>
Beyond code, I lead as Head of MIT-WPU’s Entrepreneurship Cell and served as University Secretary for MITWPU Perception and Outreach Student Council, building teams, driving initiatives, and turning ideas into execution.
</p>
            </div>

            {/* Tags */}
            <div className="reveal reveal-delay-2 flex flex-wrap gap-2 mt-8">
              {['Python','C/C++','Java','Servlets & JSP', 'Machine Learning', 'NLP',  'Power BI', 'SQL', 'React', 'Full-Stack','Git','MVC Architecture'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-border text-dim hover:border-amber/40 hover:text-soft transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="reveal reveal-delay-2">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-border bg-surface rounded-lg p-6 hover:border-amber/30 hover:bg-ink transition-all duration-500 group"
                >
                  <div className="font-display text-4xl font-light text-gradient-amber mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="font-body text-sm font-medium text-text mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-mono text-xs text-dim">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-6 p-6 rounded-lg bg-surface border-l-2 border-amber">
              <p className="font-display italic text-soft text-lg leading-relaxed">
                " Great systems are built where ideas meet execution."
              </p>
              <span className="font-mono text-xs text-dim mt-2 block">— guiding principle</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
