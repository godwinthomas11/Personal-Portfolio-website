const achievements = [
  {
    icon: '🚀',
    title: 'NASA Space Apps Challenge',
    subtitle: 'Top 40 Global Finalist',
    description:
      'Selected among Top 40 teams worldwide from 8700+ teams across 152 countries. The only team from India to reach the global stage in 2023.',
    meta: 'Global · 2023 · 152 Countries',
    highlight: 'Only Indian team',
    color: 'electric',
  },
  {
    icon: '📄',
    title: 'Published Research Paper',
    subtitle: 'IJRASET Journal',
    description:
      'Research on ML-based Wardrobe Coordination and outfit recommendation systems published in the International Journal for Research in Applied Science and Engineering Technology.',
    meta: 'IJRASET · Peer Reviewed',
    highlight: 'Research',
    color: 'amber',
  },
  {
    icon: '⚡',
    title: 'India Book of Records',
    subtitle: 'World Record Holder  ',
    description:
      'Played a key role in organising and executing a national record for maximum ventures registered within 72 hours, enabling onboarding of 4,538 students and creation of 1,805 ventures under the Wadhwani Venture Cohort.',
    meta: 'India Book of Records • 2025',
    highlight: 'World Record',
    color: 'jade',
  },
  {
    icon: '🏆',
    title: 'Student Leadership & Entrepreneurship',
    subtitle: 'University Secretary & Founding Head — E-Cell',
    description:
      'Served as University Secretary for Perception & Outreach at MIT-WPU, leading student communication and engagement initiatives. Founded and led the Entrepreneurship Cell, organising MIT’s flagship event RIDE and Startup Expo — Pune’s largest student-led startup event.',
    meta: 'MIT-WPU • 2024–2026',
    highlight: 'Student Leadership',
    color: 'amber',
  },
]

const accentColors = {
  amber: {
    iconBg: 'bg-amber/10',
    badge: 'bg-amber/10 text-amber border-amber/20',
    glow: 'hover:shadow-amber/5',
    border: 'hover:border-amber/30',
  },
  electric: {
    iconBg: 'bg-electric/10',
    badge: 'bg-electric/10 text-electric border-electric/20',
    glow: 'hover:shadow-electric/5',
    border: 'hover:border-electric/30',
  },
  jade: {
    iconBg: 'bg-jade/10',
    badge: 'bg-jade/10 text-jade border-jade/20',
    glow: 'hover:shadow-jade/5',
    border: 'hover:border-jade/30',
  },
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="section-number">05 — Achievements</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-light text-text leading-tight">
            Milestones that{' '}
            <span className="italic text-gradient-amber">define me.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a, i) => {
            const c = accentColors[a.color]
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} group relative bg-surface border border-border rounded-xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${c.glow} ${c.border}`}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {a.icon}
                  </div>
                  <span className={`font-mono text-xs px-2.5 py-1 rounded-full border ${c.badge}`}>
                    {a.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-body font-semibold text-text text-base mb-0.5">
                  {a.title}
                </h3>
                <div className="font-body text-sm text-soft mb-3">{a.subtitle}</div>
                <p className="font-body text-dim text-sm leading-relaxed mb-5">
                  {a.description}
                </p>

                {/* Footer */}
                <div className="font-mono text-xs text-muted border-t border-border pt-4">
                  {a.meta}
                </div>

                {/* Bottom line glow */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-amber to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </div>
            )
          })}
        </div>

        {/* Education callout */}
        <div className="reveal mt-6 grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-xl border border-border bg-surface flex items-center gap-5">
            <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center text-xl flex-shrink-0">🎓</div>
            <div>
              <div className="font-body font-semibold text-text text-sm">B.Tech — AI & Data Science</div>
              <div className="font-body text-dim text-xs mt-0.5">MIT World Peace University · CGPA 8.44 · Expected 2027</div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border bg-surface flex items-center gap-5">
            <div className="w-10 h-10 rounded-lg bg-jade/10 flex items-center justify-center text-xl flex-shrink-0">📐</div>
            <div>
              <div className="font-body font-semibold text-text text-sm">Diploma — Computer Science</div>
              <div className="font-body text-dim text-xs mt-0.5">MIT World Peace University · CGPA 9.10 · 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
