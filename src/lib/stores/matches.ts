import { derived, writable } from 'svelte/store';
import type { GroupedMatches, Match } from '$lib/types/match';
import { groupByCompetition } from '$lib/utils/groupMatches';

const matches = writable<Match[]>([]);
const activeCompetition = writable<string | null>(null);
const activeFilter = writable<'highlights' | 'live' | 'upcoming'>('highlights');

const groupedMatches = derived(matches, ($matches): GroupedMatches[] =>
	groupByCompetition($matches)
);

const availableLeagues = derived(groupedMatches, ($groupedMatches) =>
	$groupedMatches.map((group) => ({
		competition_name: group.competition_name,
		country_name: group.country_name,
		match_count: group.matches.length
	}))
);

const filteredMatches = derived(
	[groupedMatches, activeCompetition, activeFilter],
	([$groupedMatches, $activeCompetition, $activeFilter]) =>
		$groupedMatches
			.map((group) => ({
				...group,
				matches: group.matches.filter((match) => {
					if ($activeCompetition && match.competition_name !== $activeCompetition) {
						return false;
					}

					if ($activeFilter === 'live') {
						return match.status === 1 || match.status_desc.toLowerCase().includes('live');
					}

					if ($activeFilter === 'upcoming') {
						return match.status === 0;
					}

					return true;
				})
			}))
			.filter((group) => group.matches.length > 0)
);

const setMatches = (list: Match[]) => {
	matches.set(list);
};

const loadMatches = (list: Match[]) => {
	setMatches(list);
};

export {
	matches,
	groupedMatches,
	availableLeagues,
	filteredMatches,
	activeCompetition,
	activeFilter,
	loadMatches,
	setMatches
};
