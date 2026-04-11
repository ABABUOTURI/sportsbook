import { writable } from 'svelte/store';

type ActivePage = 'Home' | 'Live' | 'Aviator' | 'Crash' | 'League';

const activePage = writable<ActivePage>('Home');

export { activePage };
