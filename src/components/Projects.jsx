import { motion } from 'framer-motion'
import { ArrowUpRight } from './Icons.jsx'

const ease = [0.16, 1, 0.3, 1]

const OPEN_APP_URL = 'https://opendev-kappa.vercel.app/'

const WHAT_IT_HAS = [
  'Compute-unit analysis',
  'Flame graphs',
  'Transaction optimization',
  'Developer tooling',
  'Solana performance',
]

/* ---------- Live OPEN window ---------- */
function AppWindow() {
  return (
    <div
      className="group rounded-2xl border border-accent-violet/30 bg-[#070811] overflow-hidden relative"
      style={{
        boxShadow:
          '0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(153,69,255,0.18), inset 0 1px 0 rgba(255,255,255,0.06), 0 0 80px -30px rgba(153,69,255,0.4)',
      }}
    >
      <div className="flex items-center gap-3 px-3.5 py-2.5 border-b border-white/8 bg-gradient-to-r from-[#0a0b12] via-[#10121c] to-[#0a0b12]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <a href={OPEN_APP_URL} target="_blank" rel="noreferrer" className="flex-1 mx-2">
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[10.5px] text-white/70 hover:border-accent-violet/40 transition-colors">
            <span className="text-accent-violet">●</span>
            <span className="truncate">opendev-kappa.vercel.app</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/40 ml-auto"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </div>
        </a>
        <span className="font-mono text-[10px] text-accent-violet/90 tracking-wider hidden sm:inline">
          LIVE
        </span>
      </div>

      <div className="relative bg-[#0a0b12]">
        <iframe
          src={OPEN_APP_URL}
          title="OPEN DevTools — live preview"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="w-full h-[480px] sm:h-[560px] lg:h-[620px] block"
          style={{ colorScheme: 'dark' }}
        />
        <a
          href={OPEN_APP_URL}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-t from-[#0a0b12]/95 via-[#0a0b12]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet/20 backdrop-blur-md border border-accent-violet/50 text-[12.5px] font-semibold text-white shadow-[0_8px_30px_-6px_rgba(153,69,255,0.7)]">
            Open the live app
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-kicker">03 / Projects</span>
          <h2 className="mt-5 font-display font-semibold text-[34px] sm:text-[44px] leading-[1.05] tracking-tight text-white">
            OPEN.
          </h2>
          <p className="mt-3 text-[15.5px] text-white/75 leading-relaxed">
            Developer tooling for the Solana ecosystem.
          </p>

          <ul className="mt-5 flex flex-wrap items-center gap-2">
            {WHAT_IT_HAS.map((f) => (
              <li key={f} className="skill-pill">
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <AppWindow />

          <div className="mt-4 flex items-center justify-between flex-wrap gap-3 font-mono text-[11px] text-white/55">
            <span className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-violet opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-violet" />
              </span>
              Live preview of the OPEN app
            </span>
            <a
              href={OPEN_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <span>opendev-kappa.vercel.app</span>
              <ArrowUpRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
