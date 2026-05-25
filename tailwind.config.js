/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0b12',
          800: '#10121c',
          700: '#161824',
          600: '#1d2030',
        },
        accent: {
          violet: '#9945ff',
          purple: '#7c3aed',
          electric: '#00d4ff',
          cyan: '#22d3ee',
          magenta: '#dc1fff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(ellipse at top, rgba(153, 69, 255, 0.18), transparent 50%)',
        'accent-gradient':
          'linear-gradient(135deg, #00d4ff 0%, #9945ff 50%, #dc1fff 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        float: 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(153, 69, 255, 0.45)',
        'glow-cyan': '0 0 40px -10px rgba(0, 212, 255, 0.45)',
        'glow-soft': '0 0 80px -20px rgba(153, 69, 255, 0.25)',
      },
    },
  },
  plugins: [],
}
