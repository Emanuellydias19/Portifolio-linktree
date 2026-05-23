import React, { useEffect, useRef, useState } from 'react'
import photo1 from './assets/photo1.jpeg'
import photo2 from './assets/photo2.jpeg'
import photo3 from './assets/photo3.jpeg'
import photo4 from './assets/photo4.jpeg'
import photo5 from './assets/photo5.jpeg'
import photo6 from './assets/photo6.jpeg'
import photo7 from './assets/photo7.jpeg'
import photo8 from './assets/photo8.jpeg'

const LINKS = [
  {
    section: 'pessoal',
    items: [
      { label: 'GitHub', sub: '@Emanuellydias19', href: 'https://github.com/Emanuellydias19', icon: 'github' },
      { label: 'LinkedIn', sub: 'Emanuelly Dias', href: 'https://www.linkedin.com/in/emanuelly-dias-2a0480305/', icon: 'linkedin' },
      { label: 'X / Twitter', sub: '@manudia996889', href: 'https://x.com/manudia996889', icon: 'x' },
      { label: 'Telegram', sub: '@Meraki', href: 'https://t.me/Meraki', icon: 'telegram' }
    ]
  },
  {
    section: 'OPEN — chrome devtools for Solana',
    items: [
      { label: 'GitHub do projeto', sub: 'OpenSubmissionn', href: 'https://github.com/OpenSubmissionn', icon: 'github', accent: true },
      { label: 'X do projeto', sub: '@OpenDevT', href: 'https://x.com/OpenDevT', icon: 'x', accent: true }
    ]
  },
  {
    section: 'contato',
    items: [
      { label: 'Email pessoal', sub: 'manud2817@gmail.com', href: 'mailto:manud2817@gmail.com', icon: 'mail' },
      { label: 'Email institucional', sub: 'emanuelly.dias@sou.inteli.edu.br', href: 'mailto:emanuelly.dias@sou.inteli.edu.br', icon: 'mail-inteli' }
    ]
  }
]

const PHOTOS = [
  { src: photo1, caption: 'Solflare × Superteam Brasil' },
  { src: photo2, caption: 'Superteam Brasil — meetup' },
  { src: photo3, caption: 'time OPEN' },
  { src: photo7, caption: 'OPEN — devtools for Solana' },
  { src: photo5, caption: 'noite de hack' },
  { src: photo6, caption: 'estande, café e código' },
  { src: photo4, caption: 'brand wall' },
  { src: photo8, caption: 'depois do pitch' }
]

function Icon({ name }) {
  const p = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'github':
      return (
        <svg {...p}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>
      )
    case 'linkedin':
      return (
        <svg {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      )
    case 'x':
      return (
        <svg {...p}><path d="M4 4l16 16M20 4L4 20"/></svg>
      )
    case 'telegram':
      return (
        <svg {...p}><path d="M21 4 2 11l6 2 2 6 3-4 5 4 3-15z"/><path d="m8 13 8-5-5 8"/></svg>
      )
    case 'mail':
      return (
        <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
      )
    case 'mail-inteli':
      return (
        <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/><path d="M16 14h3M16 17h2"/></svg>
      )
    default:
      return null
  }
}

// SVG: Solana-style stacked-bars mark used as the abyssal pulse logo
function SolanaMark() {
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" aria-hidden="true">
      <defs>
        <linearGradient id="sol1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00e1ff"/>
          <stop offset="0.5" stopColor="#9945ff"/>
          <stop offset="1" stopColor="#dc1fff"/>
        </linearGradient>
      </defs>
      <g fill="url(#sol1)">
        <path d="M14 18 L48 18 L54 12 L20 12 Z"/>
        <path d="M14 34 L48 34 L54 28 L20 28 Z"/>
        <path d="M14 50 L48 50 L54 44 L20 44 Z"/>
      </g>
    </svg>
  )
}

export default function App() {
  const eyesRef = useRef(null)
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 })
  const [awoken, setAwoken] = useState(false)

  // bubbles
  const bubbles = Array.from({ length: 28 }).map((_, i) => ({
    left: Math.random() * 100,
    size: 4 + Math.random() * 18,
    delay: Math.random() * 14,
    duration: 10 + Math.random() * 16,
    drift: (Math.random() - 0.5) * 60
  }))

  // pupils follow cursor on the footer
  useEffect(() => {
    const handle = (e) => {
      const node = eyesRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      const max = 6
      const k = dist === 0 ? 0 : Math.min(1, 300 / dist)
      setPupilOffset({ x: (dx / Math.max(dist, 1)) * max * k, y: (dy / Math.max(dist, 1)) * max * k })

      // wake up when cursor is close to the footer
      const proximity = Math.hypot(dx, dy)
      setAwoken(proximity < 360)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <div className="abyss">
      {/* Light rays falling from the surface */}
      <div className="rays" aria-hidden="true">
        <span/><span/><span/><span/><span/><span/>
      </div>

      {/* Bubbles drifting upward */}
      <div className="bubbles" aria-hidden="true">
        {bubbles.map((b, i) => (
          <span
            key={i}
            style={{
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              ['--drift']: `${b.drift}px`
            }}
          />
        ))}
      </div>

      {/* Drifting jellyfish silhouettes */}
      <div className="creatures" aria-hidden="true">
        <svg className="jelly jelly-a" viewBox="0 0 200 260">
          <defs>
            <radialGradient id="jga" cx="50%" cy="35%" r="60%">
              <stop offset="0" stopColor="#dc1fff" stopOpacity="0.9"/>
              <stop offset="0.5" stopColor="#7b3bff" stopOpacity="0.45"/>
              <stop offset="1" stopColor="#0a1238" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <path d="M20 90 Q100 -20 180 90 Q170 110 150 100 Q140 130 120 105 Q110 135 100 110 Q90 135 80 105 Q60 130 50 100 Q30 110 20 90 Z" fill="url(#jga)"/>
          <g stroke="#9945ff" strokeOpacity="0.35" strokeWidth="1.4" fill="none">
            <path d="M40 105 Q44 160 36 220"/>
            <path d="M70 110 Q72 170 66 240"/>
            <path d="M100 110 Q100 170 100 250"/>
            <path d="M130 110 Q128 170 134 240"/>
            <path d="M160 105 Q156 160 164 220"/>
          </g>
        </svg>
        <svg className="jelly jelly-b" viewBox="0 0 200 260">
          <defs>
            <radialGradient id="jgb" cx="50%" cy="35%" r="60%">
              <stop offset="0" stopColor="#00e1ff" stopOpacity="0.8"/>
              <stop offset="0.5" stopColor="#3a5cff" stopOpacity="0.35"/>
              <stop offset="1" stopColor="#020314" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <path d="M20 90 Q100 -20 180 90 Q170 110 150 100 Q140 130 120 105 Q110 135 100 110 Q90 135 80 105 Q60 130 50 100 Q30 110 20 90 Z" fill="url(#jgb)"/>
          <g stroke="#00e1ff" strokeOpacity="0.3" strokeWidth="1.2" fill="none">
            <path d="M40 105 Q44 160 36 220"/>
            <path d="M70 110 Q72 170 66 240"/>
            <path d="M100 110 Q100 170 100 250"/>
            <path d="M130 110 Q128 170 134 240"/>
            <path d="M160 105 Q156 160 164 220"/>
          </g>
        </svg>
      </div>

      {/* Top status bar */}
      <header className="topbar">
        <div className="brand">
          <SolanaMark/>
          <span className="brand-title">descend<span className="dot">.</span></span>
        </div>
        <div className="depth">
          <span className="depth-label">profundidade</span>
          <span className="depth-value">— 1 240 m</span>
        </div>
      </header>

      {/* HERO */}
      <main className="hero">
        <div className="halo">
          <div className="halo-ring" />
          <div className="avatar">
            <span>EC</span>
          </div>
          <div className="status-orb" title="online" />
        </div>

        <h1 className="name">
          Emanuelly <span className="name-accent">Dias</span>
        </h1>
        <p className="role">
          <span className="role-tag">2º ano · Engenharia de Software</span>
          <span className="role-sep">·</span>
          <span className="role-tag role-tag-alt">Inteli</span>
        </p>

        <p className="bio">
          Mergulho em código como mergulho na natureza — sem freio.
          <br/>
          Construo no ecossistema <b>Solana</b> com o time da <b>OPEN</b>,
          procuro adrenalina onde encontrar e curto trilhas quando a tela apaga.
        </p>

        <div className="cta-row">
          <a className="cta cta-orange" href="#links">
            <span>ver meus links</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a className="cta cta-ghost" href="#galeria">galeria do time</a>
        </div>

        <div className="chips">
          <span className="chip">Solana</span>
          <span className="chip">React</span>
          <span className="chip">DevTools</span>
          <span className="chip">Open Source</span>
          <span className="chip">Hackathon</span>
        </div>
      </main>

      {/* LINKS */}
      <section id="links" className="links">
        <h2 className="section-title">
          <span className="section-tag">01</span> links
          <span className="section-sub">tudo que importa, em um só lugar</span>
        </h2>

        {LINKS.map((group) => (
          <div className="link-group" key={group.section}>
            <h3 className="group-title">{group.section}</h3>
            <div className="link-grid">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className={`link-card${item.accent ? ' link-card-accent' : ''}`}
                >
                  <div className="link-icon"><Icon name={item.icon}/></div>
                  <div className="link-meta">
                    <span className="link-label">{item.label}</span>
                    <span className="link-sub">{item.sub}</span>
                  </div>
                  <span className="link-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* GALLERY */}
      <section id="galeria" className="gallery">
        <h2 className="section-title">
          <span className="section-tag">02</span> registro do time
          <span className="section-sub">eventos, hacks e madrugadas com o pessoal da OPEN</span>
        </h2>

        <div className="gallery-grid">
          {PHOTOS.map((p, i) => (
            <figure key={i} className={`gphoto gphoto-${i % 4}`}>
              <img src={p.src} alt={p.caption} loading="lazy"/>
              <figcaption>{p.caption}</figcaption>
              <div className="gphoto-glow" />
            </figure>
          ))}
        </div>
      </section>

      {/* FOOTER — the deep */}
      <footer className={`abyss-floor${awoken ? ' awake' : ''}`}>
        <div className="floor-fog" />

        <div className="floor-content">
          <p className="warning">você desceu mais fundo do que devia.</p>
          <p className="whisper">há algo aqui embaixo.</p>

          <div className="eyes" ref={eyesRef}>
            <div className="eye">
              <div className="pupil" style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }} />
            </div>
            <div className="eye">
              <div className="pupil" style={{ transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px)` }} />
            </div>
          </div>

          <p className="signature">
            feito por <b>Emanuelly</b> · <span className="sig-mark">EC</span> · 2026
          </p>
          <p className="signature signature-faint">
            built on Solana energy · & cold ocean light
          </p>
        </div>
      </footer>
    </div>
  )
}
