import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1]

const HIGHLIGHTS = [
  {
    title: 'Blockchain Infrastructure',
    body: 'Drawn to the hard parts: runtimes, performance, and the systems that ship transactions.',
  },
  {
    title: 'Developer Tooling',
    body: 'Builders deserve sharper tools. I want to build the ones I wish existed yesterday.',
  },
  {
    title: 'Solana Ecosystem',
    body: 'Working with the OPEN team, shipping product around debugging, optimization & DX.',
  },
  {
    title: 'Rust & Systems',
    body: 'On a focused Rust journey: ownership, async, and the low-level fundamentals that scale.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20"
        >
          <div className="lg:sticky lg:top-32 self-start">
            <span className="section-kicker">01 / About</span>
            <h2 className="mt-5 font-display font-semibold text-[34px] sm:text-[44px] leading-[1.05] tracking-tight text-white">
              An engineer building the{' '}
              <span className="text-gradient-bold">future of crypto infrastructure.</span>
            </h2>
          </div>

          <div className="space-y-7 text-[16.5px] leading-relaxed text-white/85">
            <p>
              I'm a software engineer fascinated by what happens at the boundary of{' '}
              <span className="text-white font-medium">systems programming</span> and{' '}
              <span className="text-white font-medium">distributed networks</span>. Blockchain
              infrastructure isn't a buzzword to me, it's where the most interesting
              performance problems live.
            </p>
            <p>
              I'm building inside the Solana ecosystem with the{' '}
              <span className="text-white font-medium">OPEN</span> team, a developer tooling
              platform focused on compute-unit analysis, transaction optimization, and
              the kind of debugging experience devs actually deserve.
            </p>
            <p>
              Right now my focus is going deeper: studying{' '}
              <span className="text-white font-medium">Rust</span>, blockchain fundamentals, and the
              architectural patterns behind production protocols. I care about open
              source, performance, and shipping things that make other builders faster.
            </p>

            <div className="pt-4 grid sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease }}
                  className="glass rounded-2xl p-5 hover:bg-accent-violet/[0.06] hover:border-accent-violet/30 transition-colors"
                >
                  <div className="text-[14.5px] font-semibold text-white">{h.title}</div>
                  <div className="mt-1.5 text-[13.5px] text-white/75 leading-relaxed">{h.body}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
