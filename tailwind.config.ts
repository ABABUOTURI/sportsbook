import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
	plugins: [
		plugin(({ addUtilities, theme }) => {
			const slate600 = theme('colors.slate.600') as string;
			const slate700 = theme('colors.slate.700') as string;
			addUtilities({
				'.scrollbar-thin': {
					'scrollbar-width': 'thin',
					'scrollbar-color': `${slate600} transparent`
				},
				'.scrollbar-thumb-slate': {
					'--scrollbar-thumb': slate600
				},
				'.scrollbar-track-transparent': {
					'--scrollbar-track': 'transparent'
				},
				'.scrollbar-rounded': {
					'--scrollbar-radius': '8px'
				},
				'.scrollbar-webkit': {
					'&::-webkit-scrollbar': {
						width: '8px',
						height: '8px'
					},
					'&::-webkit-scrollbar-thumb': {
						background: 'var(--scrollbar-thumb, transparent)',
						borderRadius: 'var(--scrollbar-radius, 8px)'
					},
					'&::-webkit-scrollbar-track': {
						background: 'var(--scrollbar-track, transparent)'
					}
				},
				'.scrollbar-thumb-slate-700': {
					'--scrollbar-thumb': slate700
				},
				'.scrollbar-hidden': {
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none'
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none'
				},
				'.scroll-smooth-y': {
					overflowY: 'scroll',
					scrollBehavior: 'smooth',
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none'
				},
				'.scroll-smooth-y::-webkit-scrollbar': {
					display: 'none'
				}
			});
		})
	]
};

export default config;
