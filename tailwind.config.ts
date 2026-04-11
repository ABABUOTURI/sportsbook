import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F97316',
				primaryDark: '#EA580C',
				accent: '#3B82F6',
				accentDark: '#1D4ED8',
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
			}
		}
	},
	plugins: []
};

export default config;
