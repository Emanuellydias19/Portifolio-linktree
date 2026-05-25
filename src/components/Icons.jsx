import React from 'react'

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function GitHub({ size = 20 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

export function LinkedIn({ size = 20 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function XLogo({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Mail({ size = 20 }) {
  return (
    <svg width={size} height={size} {...base}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}

export function Telegram({ size = 20 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M21.5 4.5 2.5 11.5l6 2 2 6 3-4 5 4 3-15z" />
      <path d="m8.5 13.5 8-5-5 8" />
    </svg>
  )
}

export function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  )
}

export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export function Download({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5M12 15V3" />
    </svg>
  )
}

export function Sparkle({ size = 16 }) {
  return (
    <svg width={size} height={size} {...base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  )
}

import orcaMask from '../assets/orca-mask.png'

/**
 * Orca logo. Uses the real orca silhouette as a CSS mask over a gradient div,
 * so the shape can be themed in any color without rasterization loss.
 */
export function Orca({ size = 32, gradient = 'linear-gradient(135deg, #c4b5fd 0%, #a855f7 50%, #6d28d9 100%)' }) {
  return (
    <span
      role="img"
      aria-label="orca"
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        background: gradient,
        WebkitMaskImage: `url(${orcaMask})`,
        maskImage: `url(${orcaMask})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  )
}

/** Kept as alias so any leftover imports keep working. */
export const SolMark = Orca

export function Dot({ size = 6 }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#22c55e',
        boxShadow: '0 0 12px rgba(34,197,94,0.7)',
        display: 'inline-block',
      }}
    />
  )
}
