import styles from './Experience.module.css'

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Quantum Systems Ltd.',
    period: '2022 — Present',
    type: 'Full-time',
    description:
      'Lead architect for core infrastructure serving 2M+ daily active users. Designed a distributed event-sourcing system that reduced latency by 60%. Mentored 4 junior engineers and championed engineering best practices.',
    stack: ['Go', 'Kubernetes', 'PostgreSQL', 'Kafka', 'Terraform'],
  },
  {
    role: 'Software Engineer II',
    company: 'DataBridge Technologies',
    period: '2020 — 2022',
    type: 'Full-time',
    description:
      'Built real-time data pipelines processing 500K events/second. Re-architected the authentication service from a monolith to microservices, cutting deployment time from 45 min to under 5 min.',
    stack: ['Python', 'FastAPI', 'Redis', 'AWS', 'Docker'],
  },
  {
    role: 'Backend Developer',
    company: 'NovaTech Startups',
    period: '2019 — 2020',
    type: 'Full-time',
    description:
      'Developed RESTful APIs powering a B2B SaaS platform. Optimized critical SQL queries achieving 10x performance gains. Delivered features end-to-end in a fast-paced environment.',
    stack: ['Node.js', 'TypeScript', 'MySQL', 'AWS EC2'],
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2018 — Present',
    type: 'Open Source',
    description:
      'Active contributor to systems-level open source tooling. Authored a Rust networking utility library with 800+ GitHub stars. Regular contributor to Linux kernel documentation.',
    stack: ['Rust', 'C', 'Linux'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.num}>03.</span>
          <span>Experience</span>
        </div>
        <h2 className={`${styles.heading} reveal`}>Where I've Worked</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <article
              key={i}
              className={`${styles.card} reveal`}
              style={{ '--delay': `${i * 0.1}s`, transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.dot} aria-hidden="true" />
              <div className={styles.connector} aria-hidden="true" />

              <div className={styles.cardInner}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.period}>{exp.period}</span>
                    <span className={styles.type}>{exp.type}</span>
                  </div>
                </div>

                <p className={styles.desc}>{exp.description}</p>

                <div className={styles.stack}>
                  {exp.stack.map(s => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
