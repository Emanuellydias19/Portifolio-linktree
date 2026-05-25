import { motion } from 'framer-motion'
import { GitHub, LinkedIn, XLogo, Mail, ArrowRight, Dot } from './Icons.jsx'

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Emanuellydias19', Icon: GitHub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emanuelly-dias-2a0480305/', Icon: LinkedIn },
  { label: 'Twitter', href: 'https://x.com/manudia996889', Icon: XLogo },
]

function Particles() {
  const items = Array.from({ length: 18 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 5,
    dur: 9 + Math.random() * 10,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="particle"
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [-20, 20, -20], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <Particles />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-violet/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-electric/8 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[12px] font-mono text-white/85 mb-8"
        >
          <Dot />
          <span>Building on Solana · Open to opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.05 }}
          className="font-display font-semibold tracking-tight text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.02] text-white"
        >
          Emanuelly{' '}
          <span className="text-gradient-bold">Dias</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.18 }}
          className="mt-7 max-w-2xl text-[17px] sm:text-[19px] leading-relaxed text-white/85"
        >
          Software Engineer focused on{' '}
          <span className="text-white font-medium">blockchain infrastructure</span>, developer tooling,
          and the <span className="text-white font-medium">Solana</span> ecosystem.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.28 }}
          className="mt-3 max-w-2xl text-[15px] sm:text-[16px] leading-relaxed text-white/65"
        >
          Currently studying Rust and blockchain fundamentals while building developer-first tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary group">
            <span>View work</span>
            <span className="transition-transform group-hover:translate-x-0.5">
              <ArrowRight />
            </span>
          </a>
          <a href="#contact" className="btn-ghost group">
            <Mail size={16} />
            <span>Get in touch</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center gap-5"
        >
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              <Icon size={19} />
            </a>
          ))}
          <span className="h-px w-12 bg-white/15" />
          <span className="font-mono text-[11px] text-white/45 uppercase tracking-[0.25em]">
            v1.0
          </span>
        </motion.div>

        {/* Tech ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
        >
          {[
            { k: 'Stack', v: 'Rust · TS · Solana' },
            { k: 'Focus', v: 'Dev Tooling' },
            { k: 'Team', v: 'OPEN' },
            { k: 'Based', v: 'Brasil' },
          ].map((m) => (
            <div key={m.k} className="stat-card">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent-violet">
                {m.k}
              </div>
              <div className="mt-1.5 text-[14px] text-white font-medium">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
