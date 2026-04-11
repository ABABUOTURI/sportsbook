import { writable } from 'svelte/store';
import type { BetslipState } from '$lib/types/betslip';

const betslipState = writable<BetslipState>({
	selections: [],
	totalOdds: 0,
	stake: 0,
	potentialWin: 0
});

export { betslipState };
