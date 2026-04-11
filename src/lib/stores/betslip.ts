import { derived, writable } from 'svelte/store';
import type { BetslipState, BetSelection } from '$lib/types/betslip';

const initialState: BetslipState = {
	selections: [],
	totalOdds: 0,
	stake: 0,
	potentialWin: 0
};

const betslipState = writable<BetslipState>({ ...initialState });

const recalculateTotals = (state: BetslipState) => {
	state.totalOdds = state.selections.reduce((acc, selection) => acc * selection.odd_value, 1);
	state.potentialWin = state.stake > 0 ? Number((state.totalOdds * state.stake).toFixed(2)) : 0;
};

export const toggleBet = (selection: BetSelection) => {
	betslipState.update((state) => {
		const existingIndex = state.selections.findIndex((item) => item.event_odd_id === selection.event_odd_id);
		if (existingIndex >= 0) {
			state.selections.splice(existingIndex, 1);
		} else {
			state.selections.push(selection);
		}
		recalculateTotals(state);
		return state;
	});
};

export const removeBet = (eventOddId: number) => {
	betslipState.update((state) => {
		state.selections = state.selections.filter((item) => item.event_odd_id !== eventOddId);
		recalculateTotals(state);
		return state;
	});
};

export const updateStake = (stake: number) => {
	betslipState.update((state) => {
		state.stake = stake;
		state.potentialWin = stake > 0 ? Number((state.totalOdds * stake).toFixed(2)) : 0;
		return state;
	});
};

export const placeBet = () => {
	// Simulate bet placement and clear selections after placing
	betslipState.set({ ...initialState });
};

export const clearBets = () => {
	betslipState.set({ ...initialState });
};

export const isSelected = (eventOddId: number) =>
	derived(betslipState, ($state) => $state.selections.some((item) => item.event_odd_id === eventOddId));

export { betslipState };
