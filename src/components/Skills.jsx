import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const GROUPS = [
  {
    title: 'Frontend',
    code: 'fe',
    items: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
  },
  {
    title: 'Backend',
    code: 'be',
    items: ['Node.js', 'REST APIs', 'Databases', 'Authentication'],
  },
  {
    title: 'Blockchain',
    code: 'web3',
    items: ['Solana', 'Rust', 'Anchor', 'Smart Contracts', 'Web3', 'Dev Tooling'],
  },
  {
    title: 'Tools',
    code: 'env',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'VSCode'],
  },
  {
    title: 'Currently learning',
    code: 'now',
    items: ['Rust (deep dive)', 'Blockchain fundamentals'],
    accent: true,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[460px] h-[460px] rounded-full bg-accent-violet/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="max-w-3xl"
        >
          <span className="section-kicker">02 / Skills</span>
          <h2 className="mt-5 font-display font-semibold text-[34px] sm:text-[44px] leading-[1.05] tracking-tight text-white">
            The stack I build with.
          </h2>
          <p className="mt-4 text-[16px] text-white/80 leading-relaxed">
            A working knowledge of the tools that get me from blank file to shipped
            product, plus the ones I'm sharpening right now.
          </p>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              className={`glass rounded-2xl p-6 sm:p-7 hover:border-accent-violet/40 hover:bg-accent-violet/[0.04] transition-colors duration-500 ${
                group.accent ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-accent-violet">
                    {group.code}
                  </span>
                  <h3 className="text-[17.5px] font-semibold text-white">{group.title}</h3>
                </div>
                {group.accent && (
                  <span className="flex items-center gap-2 font-mono text-[10.5px] text-accent-electric uppercase tracking-[0.18em]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-electric opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-electric" />
                    </span>
                    in progress
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
