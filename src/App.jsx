import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { useScrollReveal } from './hooks/useScrollReveal'

export default function App() {
  const cursorRef = useRef(null)
  const cursorRingRef = useRef(null)
  const [cursorVisible, setCursorVisible] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = cursorRingRef.current
    if (!cursor || !ring) return

    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0
    let rafId

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
      if (!cursorVisible) setCursorVisible(true)
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      ring.classList.add('hovering')
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
    }

    const onLeave = () => {
      ring.classList.remove('hovering')
      cursor.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [cursorVisible])

  return (
    <div className="noise-overlay min-h-screen bg-void">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      />
      <div
        ref={cursorRingRef}
        className="custom-cursor-ring"
        style={{ opacity: cursorVisible ? 1 : 0 }}
      />

      {/* Ambient background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="ambient-blob w-[600px] h-[600px] opacity-[0.04]"
          style={{
            background: '#D4A853',
            top: '-200px',
            right: '-200px',
          }}
        />
        <div
          className="ambient-blob w-[500px] h-[500px] opacity-[0.03]"
          style={{
            background: '#4A9EFF',
            bottom: '20%',
            left: '-150px',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  )
}
