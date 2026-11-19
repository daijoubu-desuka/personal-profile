// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Anthropic-style editorial serif
        serif: ['Newsreader', 'Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Deep obsidian & warm darks
        canvas: '#0b0d0f',
        surface: '#121519',
        'surface-elevated': '#181c22',
        'surface-hover': '#1e232b',

        // Hairline structural lines
        edge: '#222730',
        'edge-subtle': '#181c22',
        'edge-bright': '#323846',

        // Editorial text tones (warm off-white, never harsh blinding white)
        parchment: {
          50: '#ffffff',
          100: '#f7f6f2',
          200: '#eceae3',
          300: '#d7d4c8',
          400: '#a3a093',
          500: '#737064',
          600: '#4a483f',
        },
        muted: '#858b98',
        faint: '#4e5461',

        // Controlled, purposeful emerald green splashes
        emerald: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          dim: 'rgba(16, 185, 129, 0.10)',
          border: 'rgba(16, 185, 129, 0.25)',
          glow: 'rgba(52, 211, 153, 0.2)',
        },
      },
      letterSpacing: {
        editorial: '-0.02em',
        'editorial-tight': '-0.035em',
        meta: '0.08em',
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
} satisfies Config
