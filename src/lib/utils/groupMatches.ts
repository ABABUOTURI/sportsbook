import type { GroupedMatches, Match } from '$lib/types/match';

export const groupByCompetition = (matches: Match[]): GroupedMatches[] => {
	const groups = new Map<string, GroupedMatches>();

	for (const match of matches) {
		const key = `${match.competition_name}||${match.country_name}`;
		const existing = groups.get(key);

		if (existing) {
			existing.matches.push(match);
		} else {
			groups.set(key, {
				competition_name: match.competition_name,
				country_name: match.country_name,
				matches: [match]
			});
		}
	}

	return Array.from(groups.values()).sort((a, b) => b.matches.length - a.matches.length);
};
