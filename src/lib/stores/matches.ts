import { derived, writable } from 'svelte/store';
import type { GroupedMatches, Match } from '$lib/types/match';
import { groupByCompetition } from '$lib/utils/groupMatches';

const matches = writable<Match[]>([]);

const groupedMatches = derived(matches, ($matches): GroupedMatches[] =>
	groupByCompetition($matches)
);

const setMatches = (list: Match[]) => {
	matches.set(list);
};

const loadMatches = (list: Match[]) => {
	setMatches(list);
};

export { matches, groupedMatches, loadMatches, setMatches };
