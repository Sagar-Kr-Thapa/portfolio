import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle grid
    const particles = []
    const cols = Math.floor(canvas.width / 60)
    const rows = Math.floor(canvas.height / 60)

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        particles.push({
          x: (i / cols) * canvas.width + 30,
          y: (j / rows) * canvas.height + 30,
          ox: (i / cols) * canvas.width + 30,
          oy: (j / rows) * canvas.height + 30,
          alpha: Math.random() * 0.3 + 0.05,
          speed: Math.random() * 0.008 + 0.002,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.01

      particles.forEach((p) => {
        const alpha = p.alpha * (0.5 + 0.5 * Math.sin(t * p.speed * 100 + p.phase))
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 212, ${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.greeting}>Hello, World. I'm</p>
        <h1 className={styles.name}>
          <span className={styles.firstName}>Alex</span>
          <br />
          <span className={styles.lastName}>Sharma</span>
        </h1>
        <div className={styles.titleRow}>
          <span className={styles.titleBar} />
          <p className={styles.title}>Computer Engineer</p>
        </div>
        <p className={styles.tagline}>
          I build systems that scale, interfaces that delight,<br />
          and solutions that endure.
        </p>
        <div className={styles.actions}>
          <a href="#about" className={styles.btnPrimary}>
            Explore My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className={styles.btnOutline}>Get In Touch</a>
        </div>
        <div className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
