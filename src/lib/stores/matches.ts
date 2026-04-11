import { derived, writable } from 'svelte/store';
import type { GroupedMatches, Match } from '$lib/types/match';
import { groupByCompetition } from '$lib/utils/groupMatches';

const matches = writable<Match[]>([]);

const groupedMatches = derived(matches, ($matches): GroupedMatches[] =>
	groupByCompetition($matches)
);

const availableLeagues = derived(groupedMatches, ($groupedMatches) =>
	$groupedMatches.map(group => ({
		competition_name: group.competition_name,
		country_name: group.country_name,
		match_count: group.matches.length
	}))
);

const activeCompetition = writable<string | null>(null);

const setMatches = (list: Match[]) => {
	matches.set(list);
};

const loadMatches = (list: Match[]) => {
	setMatches(list);
};

export { matches, groupedMatches, availableLeagues, activeCompetition, loadMatches, setMatches };
