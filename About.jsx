import styles from './About.module.css'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '12+', label: 'Technologies' },
  { value: '3', label: 'Open Source Libs' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.num}>01.</span>
          <span>About Me</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} reveal`}>
              Engineering at the intersection of <em>logic</em> and <em>craft</em>
            </h2>
            <div className={`${styles.body} reveal reveal-delay-1`}>
              <p>
                I'm a Computer Engineer who believes great software is never an accident — it's the result of
                deliberate decisions, rigorous thinking, and a relentless pursuit of clarity. Whether I'm
                architecting distributed systems or optimizing a critical render path, I bring the same
                intensity to every layer of the stack.
              </p>
              <p>
                Currently building scalable infrastructure and exploring the frontier of systems programming.
                When I'm not knee-deep in a terminal, I'm contributing to open source, reading about compilers,
                or designing tools that make other engineers faster.
              </p>
            </div>

            <div className={`${styles.tags} reveal reveal-delay-2`}>
              {['Systems Design', 'Full-Stack Dev', 'Cloud Architecture', 'Open Source', 'Performance Engineering'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={`${styles.avatarWrap} reveal reveal-delay-1`}>
              <div className={styles.avatarFrame}>
                <div className={styles.avatar}>
                  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="60" cy="45" r="22" fill="rgba(0,245,212,0.12)" stroke="rgba(0,245,212,0.4)" strokeWidth="1"/>
                    <path d="M20 100 C20 76 36 62 60 62 C84 62 100 76 100 100" fill="rgba(0,245,212,0.08)" stroke="rgba(0,245,212,0.3)" strokeWidth="1"/>
                    <circle cx="60" cy="45" r="14" fill="rgba(0,245,212,0.2)"/>
                  </svg>
                  <p className={styles.avatarLabel}>Alex Sharma</p>
                  <p className={styles.avatarSub}>Kathmandu, Nepal</p>
                </div>
              </div>
              <div className={styles.corner} aria-hidden="true" />
            </div>

            <div className={`${styles.statsGrid} reveal reveal-delay-2`}>
              {stats.map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
