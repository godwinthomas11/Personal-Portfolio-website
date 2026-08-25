const work = [
  {
    title: 'Tender Intelligence Platform',
    subtitle: 'Retrieval-Augmented Generation (RAG)',
    description:
      "Diagnosed a manual, error-prone tender-review process that costs the bid team days per document, quantified the impact, and proposed an AI platform to fix it. Now architecting it: hybrid dense-embedding and keyword retrieval with reranking, structure-aware document chunking, and citation-grounded generation so every answer traces back to its source page.",
    status: 'Designing & Validating',
    statusVariant: 'amber',
    tech: ['RAG', 'LLMs', 'Vector Search', 'Python'],
    featured: true,
  },
  {
    title: 'Chrisen PipeFlow Checker',
    subtitle: 'Engineering automation tool',
    description:
      "An automated hydraulics design tool implementing Manning's equation for pipe-flow verification, returning an instant pass / fail verdict instead of a manual calculation. Verified against real engineering calculations and adopted company-wide.",
    status: 'Shipped · In Use',
    statusVariant: 'jade',
    tech: ['Python', 'Engineering Automation'],
    featured: false,
  },
  {
    title: 'Trip Generation Engine',
    subtitle: 'Legacy workbook rebuild',
    description:
      'Rebuilding a legacy Excel/VBA transportation-engineering workbook as a full-stack Python application — validating every module against the original tool\'s known outputs before it replaces it in production.',
    status: 'In Development',
    statusVariant: 'electric',
    tech: ['Python', 'SQLAlchemy', 'PostgreSQL', 'React'],
    featured: false,
  },
  {
    title: 'Durban Office Infrastructure',
    subtitle: 'Server & network deployment',
    description:
      "Designed and commissioned the complete server, Active Directory domain, and network infrastructure for the company's new office — the on-premise environment my AI platform will run behind for client confidentiality.",
    status: 'Commissioned',
    statusVariant: 'jade',
    tech: ['Windows Server', 'Active Directory', 'Networking'],
    featured: false,
  },
]

const statusStyles = {
  amber: 'bg-amber/10 text-amber border-amber/20',
  jade: 'bg-jade/10 text-jade border-jade/20',
  electric: 'bg-electric/10 text-electric border-electric/20',
}

export default function NowBuilding() {
  return (
    <section id="now" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="section-number">02 — Right Now</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <div className="reveal reveal-delay-1 flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-light text-text leading-tight">
            What I'm building{' '}
            <span className="italic text-gradient-amber">right now.</span>
          </h2>
          <p className="font-body text-dim text-sm max-w-xs leading-relaxed">
            Six months, one international internship, one AI platform built from the ground up.
          </p>
        </div>

        <p className="reveal reveal-delay-1 font-body text-soft text-[15px] leading-relaxed max-w-3xl mb-16">
          I joined <span className="text-text">Chrisen Consulting</span>, a multidisciplinary
          engineering consultancy in Centurion, South Africa, in July 2026 — and shipped their
          live corporate website in my first two weeks. Since then, here's what I've been building.
        </p>

        {/* Featured card */}
        <div className="grid md:grid-cols-1 gap-4 mb-4">
          {work.filter((w) => w.featured).map((item, i) => (
            <WorkCard key={item.title} item={item} delay={i + 1} large />
          ))}
        </div>

        {/* Supporting cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {work.filter((w) => !w.featured).map((item, i) => (
            <WorkCard key={item.title} item={item} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ item, delay, large }) {
  return (
    <div
      className={`reveal reveal-delay-${delay} group relative bg-surface border border-border rounded-xl overflow-hidden hover:border-amber/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber/5 ${
        large ? 'p-8' : 'p-6'
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-5 gap-3">
        <div>
          <h3 className={`font-display font-light text-text leading-tight group-hover:text-gradient-amber transition-all duration-300 ${large ? 'text-2xl' : 'text-lg'}`}>
            {item.title}
          </h3>
          <span className="font-mono text-xs text-dim mt-1 block">{item.subtitle}</span>
        </div>
        <span
          className={`font-mono text-xs px-2.5 py-1 rounded-full border whitespace-nowrap ${statusStyles[item.statusVariant]}`}
        >
          {item.status}
        </span>
      </div>

      {/* Description */}
      <p className={`font-body text-dim leading-relaxed mb-6 ${large ? 'text-sm max-w-2xl' : 'text-sm'}`}>
        {item.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {item.tech.map((t) => (
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
