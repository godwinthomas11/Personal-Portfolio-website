import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// ─── REPLACE THESE WITH YOUR EMAILJS CREDENTIALS ────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_uytklmn'
const EMAILJS_TEMPLATE_ID = 'template_dr18c9g'
const EMAILJS_PUBLIC_KEY  = 'RwYnzfGgmk4uTNw6K'
// ────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    label: 'Email',
    value: 'godwinthomas118@gmail.com',
    href: 'mailto:godwinthomas118@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
      </svg>
    ),
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/godwinthomas11',
    href: 'https://www.linkedin.com/in/godwinthomas11/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/godwinthomas11',
    href: 'https://github.com/godwinthomas11',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    external: true,
  },
  {
    label: 'Phone',
    value: '+91 77569 73005',
    href: 'tel:+917756973005',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 5.9 5.9l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    external: false,
  },
]

// ─── CONTACT MODAL ───────────────────────────────────────────────────────────
function ContactModal({ isOpen, onClose }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ from_name: '', reply_to: '', subject: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ from_name: '', reply_to: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const handleClose = () => {
    setStatus('idle')
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      <div
        onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(6px)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          animation: 'fadeIn 0.2s ease',
        }}
      >
        <div
          style={{
            background: '#111',
            border: '1px solid #2a2a2a',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '480px',
            padding: '32px',
            animation: 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)',
            position: 'relative',
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'transparent', border: 'none',
              color: '#666', cursor: 'pointer', fontSize: '20px',
              lineHeight: 1, padding: '4px 8px',
              borderRadius: '6px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = '#666'}
          >
            ✕
          </button>

          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%',
                background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', fontSize: '24px', color: '#4ade80',
              }}>
                ✓
              </div>
              <h3 style={{ fontFamily: 'var(--font-display, serif)', fontSize: '22px', color: '#fff', marginBottom: '8px' }}>
                Message sent!
              </h3>
              <p style={{ color: '#666', fontSize: '14px', marginBottom: '24px' }}>
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                onClick={handleClose}
                style={{
                  background: '#c9943a', color: '#000', border: 'none',
                  borderRadius: '8px', padding: '10px 24px',
                  fontWeight: 600, fontSize: '14px', cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 style={{
                fontFamily: 'var(--font-display, serif)',
                fontSize: '22px', fontWeight: 300,
                color: '#fff', marginBottom: '4px',
              }}>
                Send a message
              </h3>
              <p style={{ color: '#555', fontSize: '13px', marginBottom: '24px' }}>
                I'll reply within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Name</label>
                    <input
                      name="from_name"
                      value={form.from_name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#c9943a'}
                      onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Email</label>
                    <input
                      name="reply_to"
                      type="email"
                      value={form.reply_to}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#c9943a'}
                      onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#c9943a'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me what you have in mind..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                    onFocus={e => e.target.style.borderColor = '#c9943a'}
                    onBlur={e => e.target.style.borderColor = '#2a2a2a'}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '13px', margin: 0 }}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    marginTop: '4px',
                    background: status === 'sending' ? '#7a5a22' : '#c9943a',
                    color: '#000', border: 'none',
                    borderRadius: '8px', padding: '12px 24px',
                    fontWeight: 600, fontSize: '14px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    transition: 'background 0.2s',
                    width: '100%',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <span style={spinnerStyle} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(32px) scale(0.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </>
  )
}

const labelStyle = {
  display: 'block', fontSize: '11px',
  color: '#555', marginBottom: '6px',
  fontFamily: 'monospace', letterSpacing: '0.05em',
  textTransform: 'uppercase',
}

const inputStyle = {
  width: '100%', background: '#0d0d0d',
  border: '1px solid #2a2a2a', borderRadius: '8px',
  padding: '10px 12px', color: '#ccc',
  fontSize: '14px', outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
}

const spinnerStyle = {
  display: 'inline-block',
  width: '14px', height: '14px',
  border: '2px solid rgba(0,0,0,0.3)',
  borderTopColor: '#000',
  borderRadius: '50%',
  animation: 'spin 0.7s linear infinite',
}

// ─── MAIN CONTACT SECTION ────────────────────────────────────────────────────
export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false)

  // ← CHANGE 1: listen for the event fired by the Navbar "Hire me" button
  useEffect(() => {
    const handler = () => setModalOpen(true)
    window.addEventListener('open-contact-modal', handler)
    return () => window.removeEventListener('open-contact-modal', handler)
  }, [])

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-6">
          <span className="section-number">06 — Contact</span>
          <div className="h-px flex-1 max-w-24 bg-border" />
        </div>

        <div className="reveal reveal-delay-1 mb-20">
          <h2 className="font-display text-[clamp(36px,7vw,88px)] font-light leading-[1.0] text-text tracking-tight">
            Let's build
            <br />
            <span className="italic text-gradient-amber">something</span>
            <br />
            remarkable.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`reveal reveal-delay-${i + 1} group flex items-center justify-between p-5 rounded-xl border border-border bg-surface hover:border-amber/30 hover:bg-ink transition-all duration-400`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber/5 border border-border flex items-center justify-center text-dim group-hover:text-amber group-hover:border-amber/30 transition-all duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-muted mb-0.5">{link.label}</div>
                    <div className="font-body text-sm text-soft group-hover:text-text transition-colors duration-300">
                      {link.value}
                    </div>
                  </div>
                </div>
                <span className="text-muted group-hover:text-amber group-hover:translate-x-1 transition-all duration-300 text-sm">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="reveal reveal-delay-3">
            <div className="p-8 rounded-xl border border-border bg-surface">
              <h3 className="font-display text-xl font-light text-text mb-3">
                Open to opportunities
              </h3>
              <p className="font-body text-dim text-sm leading-relaxed mb-6">
                I'm currently seeking internships, research positions, and collaborative
                projects in AI, ML, and Software Development. If you have something
                interesting in mind — I'd love to hear it.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'AI / ML Engineering Roles',
                  'Software Development Internships',
                  'Research Collaborations',
                  'Startup Projects & Hackathons',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-jade flex-shrink-0" />
                    <span className="font-body text-sm text-soft">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 w-full justify-center bg-amber text-void font-body font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-amber/90 transition-all duration-300 group hover:gap-3"
              >
                Send me a message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="reveal mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg text-text">
            GT<span className="text-amber">.</span>
          </span>
          <span className="font-mono text-xs text-muted text-center">
            © 2025 Godwin Thomas · Pune, India · Built with React + Tailwind
          </span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-jade animate-pulse" />
            <span className="font-mono text-xs text-dim">Available</span>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}
