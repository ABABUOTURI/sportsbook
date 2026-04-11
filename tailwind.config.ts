import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F97316',
				primaryDark: '#EA580C',
				primaryGlow: 'rgba(249,115,22,0.5)',
				accent: '#3B82F6',
				accentDark: '#1D4ED8',
				accentGlow: 'rgba(59,130,246,0.5)',
				surface: '#0F172A',
				surfaceLight: '#1E293B',
				card: '#1E293B',
				border: '#334155',
				textPrimary: '#F8FAFC',
				textMuted: '#94A3B8'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			},
			borderRadius: {
				pill: '9999px',
				card: '12px',
				btn: '8px'
			},
			boxShadow: {
				orange: '0 0 12px rgba(249,115,22,0.5)',
				blue: '0 0 12px rgba(59,130,246,0.5)',
				bet: '0 4px 14px rgba(249,115,22,0.4)'
			},
			keyframes: {
				'pulse-dot': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.3' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'pulse-dot': 'pulse-dot 1.2s ease-in-out infinite',
				'slide-in': 'slide-in 0.3s ease-out'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none'
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none'
				}
			});
		})
	]
};

export default config;
