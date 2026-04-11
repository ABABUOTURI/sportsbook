import type { PageLoad } from './$types';
import type { Match } from '$lib/types/match';
import games from '../../data/games.json';

export const load: PageLoad = async () => {
	const matches = games as Match[];
	return { matches };
};
