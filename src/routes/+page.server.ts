import { readFile } from 'node:fs/promises';
import type { PageServerLoad } from './$types';
import type { Match } from '$lib/types/match';

export const load: PageServerLoad = async () => {
	const fileUrl = new URL('../../data/games.json', import.meta.url);
	const raw = await readFile(fileUrl, 'utf-8');
	const matches = JSON.parse(raw) as Match[];

	return { matches };
};
