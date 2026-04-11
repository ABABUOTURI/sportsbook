import type { Market, Match, Odd } from '$lib/types/match';

export const getMarket = (match: Match, subTypeId: number): Market | undefined =>
	match.markets.find((market) => market.sub_type_id === subTypeId);

export const getOdd = (market: Market, outcomeId: string): Odd | undefined =>
	market.odds.find((odd) => String(odd.outcome_id) === outcomeId);

export const get1x2 = (
	match: Match
): { home: Odd; draw: Odd; away: Odd } | null => {
	const market = getMarket(match, 1);
	if (!market) return null;

	const home = getOdd(market, '1');
	const draw = getOdd(market, '2');
	const away = getOdd(market, '3');

	if (!home || !draw || !away) return null;
	return { home, draw, away };
};

export const getBTTS = (match: Match): { yes: Odd; no: Odd } | null => {
	const market = getMarket(match, 29);
	if (!market) return null;

	const yes = getOdd(market, '1');
	const no = getOdd(market, '2');

	if (!yes || !no) return null;
	return { yes, no };
};

export const getDoubleChance = (
	match: Match
): { oneOrX: Odd; oneOrTwo: Odd; xOrTwo: Odd } | null => {
	const market = getMarket(match, 10);
	if (!market) return null;

	const oneOrX = getOdd(market, '1');
	const oneOrTwo = getOdd(market, '2');
	const xOrTwo = getOdd(market, '3');

	if (!oneOrX || !oneOrTwo || !xOrTwo) return null;
	return { oneOrX, oneOrTwo, xOrTwo };
};
