import { writable } from 'svelte/store';

export type ActivePage = 'home' | 'live' | 'aviator' | 'crash' | 'league';

export const activePage = writable<ActivePage>('home');
export const activeBetslipTab = writable<'betslip' | 'jenga'>('jenga');
export const sidebarOpen = writable(true);
