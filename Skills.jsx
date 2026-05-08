import { useState } from 'react'
import styles from './Skills.module.css'

const categories = [
  {
    name: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'C / C++', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'Rust', level: 75 },
      { name: 'JavaScript / TS', level: 88 },
      { name: 'Go', level: 72 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    name: 'Systems & Infra',
    icon: '⬡',
    skills: [
      { name: 'Linux / Unix', level: 94 },
      { name: 'Docker / K8s', level: 85 },
      { name: 'AWS / GCP', level: 82 },
      { name: 'Networking', level: 80 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'PostgreSQL', level: 84 },
    ],
  },
  {
    name: 'Frameworks',
    icon: '◈',
    skills: [
      { name: 'React / Next.js', level: 88 },
      { name: 'Node.js', level: 86 },
      { name: 'FastAPI', level: 82 },
      { name: 'GraphQL', level: 76 },
      { name: 'gRPC', level: 72 },
      { name: 'Redis', level: 79 },
    ],
  },
]

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.num}>02.</span>
          <span>Skills & Tech Stack</span>
        </div>

        <h2 className={`${styles.heading} reveal`}>My Toolkit</h2>

        <div className={`${styles.tabs} reveal reveal-delay-1`}>
          {categories.map((c, i) => (
            <button
              key={c.name}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
            >
              <span className={styles.tabIcon} aria-hidden="true">{c.icon}</span>
              {c.name}
            </button>
          ))}
        </div>

        <div className={`${styles.panel} reveal reveal-delay-2`} key={active}>
          {categories[active].skills.map((skill, i) => (
            <div
              key={skill.name}
              className={styles.skillRow}
              style={{ '--delay': `${i * 0.06}s` }}
            >
              <div className={styles.skillMeta}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.bar}>
                <div
                  className={styles.barFill}
                  style={{ '--width': `${skill.level}%`, '--delay': `${i * 0.06 + 0.2}s` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.tools} reveal reveal-delay-3`}>
          {['Git', 'Vim / Neovim', 'Figma', 'Postman', 'Terraform', 'Prometheus', 'Grafana', 'Jira'].map(t => (
            <span key={t} className={styles.tool}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
