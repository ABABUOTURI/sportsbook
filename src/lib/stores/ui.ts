import { writable } from 'svelte/store';

type ActivePage = 'home' | 'live' | 'aviator' | 'crash' | 'league';

const activePage = writable<ActivePage>('home');
const activeBetslipTab = writable<'betslip' | 'jenga'>('jenga');

export { activePage, activeBetslipTab };
