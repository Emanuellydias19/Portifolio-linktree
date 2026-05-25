import { motion } from 'framer-motion'
import { GitHub, LinkedIn, XLogo, Mail, Telegram, ArrowUpRight } from './Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

const CHANNELS = [
  {
    label: 'Email',
    sub: 'manud2817@gmail.com',
    href: 'mailto:manud2817@gmail.com',
    Icon: Mail,
  },
  {
    label: 'Email · Inteli',
    sub: 'emanuelly.dias@sou.inteli.edu.br',
    href: 'mailto:emanuelly.dias@sou.inteli.edu.br',
    Icon: Mail,
  },
  {
    label: 'GitHub',
    sub: '@Emanuellydias19',
    href: 'https://github.com/Emanuellydias19',
    Icon: GitHub,
  },
  {
    label: 'LinkedIn',
    sub: 'Emanuelly Dias',
    href: 'https://www.linkedin.com/in/emanuelly-dias-2a0480305/',
    Icon: LinkedIn,
  },
  {
    label: 'Twitter / X',
    sub: '@manudia996889',
    href: 'https://x.com/manudia996889',
    Icon: XLogo,
  },
  {
    label: 'Telegram',
    sub: 'MerakiSolana',
    href: 'https://t.me/MerakiSolana',
    Icon: Telegram,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-violet/8 blur-[150px] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-kicker mx-auto">05 / Contact</span>
          <h2 className="mt-5 font-display font-semibold text-[36px] sm:text-[52px] leading-[1.05] tracking-tight text-white">
            Let's build something{' '}
            <span className="text-gradient-bold">together.</span>
          </h2>
          <p className="mt-5 text-[16.5px] text-white/80 leading-relaxed">
            Open to collaborations, internships, and conversations about Solana,
            developer tooling, or Rust. The fastest way to reach me is email or Telegram.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:manud2817@gmail.com" className="btn-primary">
              <Mail size={16} />
              <span>manud2817@gmail.com</span>
            </a>
            <a
              href="https://t.me/MerakiSolana"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Telegram size={16} />
              <span>Telegram</span>
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CHANNELS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect()
                e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
                e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
              }}
              className="contact-card group"
            >
              <div className="contact-icon">
                <c.Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13.5px] font-semibold text-white">{c.label}</div>
                <div className="mt-0.5 text-[12.5px] text-white/75 truncate font-mono">{c.sub}</div>
              </div>
              <span className="text-green-300/60 group-hover:text-green-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
