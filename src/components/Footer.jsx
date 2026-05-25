import { Orca, GitHub, LinkedIn, XLogo, Mail, Telegram, ArrowUpRight } from './Icons.jsx'

const QUICKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Team', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const SOCIALS = [
  { Icon: GitHub, href: 'https://github.com/Emanuellydias19', label: 'GitHub' },
  { Icon: LinkedIn, href: 'https://www.linkedin.com/in/emanuelly-dias-2a0480305/', label: 'LinkedIn' },
  { Icon: XLogo, href: 'https://x.com/manudia996889', label: 'X' },
  { Icon: Telegram, href: 'https://t.me/MerakiSolana', label: 'Telegram' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-12 overflow-hidden">
      {/* Glowing accent strip at top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-accent-violet to-transparent shadow-[0_0_30px_rgba(153,69,255,0.7)]" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[260px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(153,69,255,0.22), rgba(34,211,238,0.06) 30%, transparent 65%)',
        }}
      />

      {/* Big gradient backplate */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-full bg-accent-violet/25 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-[500px] h-[400px] rounded-full bg-accent-electric/12 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-accent-magenta/10 blur-[140px] pointer-events-none" />

      <div className="relative pt-20 pb-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {/* CTA band */}
          <div className="rounded-3xl glass-strong border-accent-violet/25 p-8 sm:p-12 mb-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-20 w-[400px] h-[400px] rounded-full bg-accent-violet/30 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 w-[300px] h-[300px] rounded-full bg-accent-electric/20 blur-[100px] pointer-events-none" />

            <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
              <div>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent-violet">
                  Let's connect
                </span>
                <h3 className="mt-3 font-display font-bold text-[30px] sm:text-[40px] leading-[1.05] tracking-tight text-white">
                  Got something to{' '}
                  <span className="text-gradient-bold">build together?</span>
                </h3>
                <p className="mt-3 text-[15px] text-white/80 max-w-lg leading-relaxed">
                  Open to collaborations, internships, and good conversations about Solana,
                  Rust, or developer tooling.
                </p>
              </div>

              <div className="flex flex-wrap lg:justify-end gap-3">
                <a href="mailto:manud2817@gmail.com" className="btn-primary">
                  <Mail size={16} />
                  <span>Email me</span>
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
            </div>
          </div>

          {/* Footer body */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <Orca size={32} />
                <span className="font-display font-bold tracking-tight text-[17px] text-white">
                  Emanuelly
                  <span className="bg-gradient-to-r from-accent-violet to-accent-magenta bg-clip-text text-transparent">
                    .
                  </span>
                </span>
              </div>
              <p className="mt-4 max-w-md text-[14px] text-white/70 leading-relaxed">
                Engineer building developer-first tools for the Solana ecosystem.
                Currently learning Rust, shipping with OPEN.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[10.5px] text-white/80 uppercase tracking-[0.18em]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                Available for work
              </div>
            </div>

            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-violet mb-4">
                Navigate
              </div>
              <ul className="space-y-2.5">
                {QUICKS.map((q) => (
                  <li key={q.label}>
                    <a
                      href={q.href}
                      className="group inline-flex items-center gap-1.5 text-[14px] text-white/75 hover:text-white transition-colors"
                    >
                      <span>{q.label}</span>
                      <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-violet">
                        <ArrowUpRight />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent-violet mb-4">
                Channels
              </div>
              <ul className="space-y-2.5">
                {SOCIALS.map(({ Icon, href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 text-[14px] text-white/75 hover:text-white transition-colors"
                    >
                      <span className="text-white/55 group-hover:text-accent-violet transition-colors">
                        <Icon size={15} />
                      </span>
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-white/55">
            <span>
              © {year} Emanuelly Dias. Built with{' '}
              <span className="text-accent-violet">Solana</span> energy.
            </span>
            <span className="flex items-center gap-3">
              <span>v1.0</span>
              <span className="h-px w-6 bg-white/15" />
              <span>Designed & built by Emanuelly</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
