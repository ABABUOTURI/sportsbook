import type { PageLoad } from './$types';
import type { Match } from '$lib/types/match';
import gamesData from '../../data/games.json';

export const load: PageLoad = () => {
	return { matches: gamesData as Match[] };
};
