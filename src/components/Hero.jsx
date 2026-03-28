import { useEffect, useRef } from 'react'

const roles = [ 'AI Engineer', 'Machine Learning Engineer','Software Developer', 'System Builder','Problem Solver', ]

export default function Hero() {
  const taglineRef = useRef(null)

  useEffect(() => {
    let index = 0
    let charIndex = 0
    let deleting = false
    let timeout

    const type = () => {
      const current = roles[index]
      const el = taglineRef.current
      if (!el) return

      if (!deleting) {
        el.textContent = current.slice(0, charIndex + 1)
        charIndex++
        if (charIndex === current.length) {
          deleting = true
          timeout = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1)
        charIndex--
        if (charIndex === 0) {
          deleting = false
          index = (index + 1) % roles.length
        }
      }

      timeout = setTimeout(type, deleting ? 60 : 110)
    }

    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(#F0EDE8 1px, transparent 1px), linear-gradient(90deg, #F0EDE8 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Status badge */}
        <div className="reveal mb-10 flex items-center gap-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-jade opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-jade" />
          </span>
          <span className="font-mono text-xs text-dim tracking-widest uppercase">
            Actively Seeking Internships
          </span>
        </div>

        {/* Main heading */}
        <div className="reveal reveal-delay-1">
          <h1 className="font-display font-light leading-[1.05] tracking-tight mb-2">
            <span className="block text-[clamp(52px,9vw,110px)] text-text">
              Godwin
            </span>
            <span className="block text-[clamp(52px,9vw,110px)] text-gradient-amber italic">
              Thomas.
            </span>
          </h1>
        </div>

        {/* Typewriter tagline */}
        <div className="reveal reveal-delay-2 flex items-center gap-3 mt-6 mb-8">
          <span className="font-mono text-sm text-dim">/&gt;</span>
          <span
            ref={taglineRef}
            className="font-mono text-sm md:text-base text-amber"
          />
          <span className="inline-block w-0.5 h-5 bg-amber animate-pulse" />
        </div>

        {/* One-liner */}
        <p className="reveal reveal-delay-3 font-body text-soft text-base md:text-lg max-w-xl leading-relaxed mb-12">
          B.Tech AI & Data Science student building intelligent systems that matter.
          <span className="text-text"> NASA Global Finalist · R&D Intern at Schindler India. </span>
          Building Intelligent systems that solve real world problems..
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-4 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-amber text-void font-body font-semibold text-sm px-6 py-3 rounded-md hover:bg-amber/90 transition-all duration-300 hover:gap-3"
          >
            View Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-soft font-body font-medium text-sm px-6 py-3 rounded-md hover:border-text hover:text-text transition-all duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Social links */}
        <div className="reveal reveal-delay-5 flex items-center gap-6 mt-16">
          <span className="font-mono text-xs text-muted tracking-widest">FIND ME ON</span>
          <div className="h-px flex-1 max-w-12 bg-border" />
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/godwinthomas11/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-dim hover:text-amber transition-colors duration-300 tracking-wide"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/godwinthomas11"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-dim hover:text-amber transition-colors duration-300 tracking-wide"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-dim tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-dim to-transparent animate-pulse" />
      </div>
    </section>
  )
}
