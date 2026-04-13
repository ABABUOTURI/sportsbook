import { writable } from 'svelte/store';

export type ActivePage = 'home' | 'live' | 'aviator' | 'crash' | 'league';

export const activePage = writable<ActivePage>('home');
export const activeBetslipTab = writable<'betslip' | 'jenga'>('betslip');
export const sidebarOpen = writable<boolean>(false);
export const drawerOpen = writable<boolean>(false);
export const mobileBetslipOpen = writable<boolean>(false);
export const mobileSearchOpen = writable<boolean>(false);
