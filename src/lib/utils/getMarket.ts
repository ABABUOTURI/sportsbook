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

	const yes =
		getOdd(market, '74') ??
		market.odds.find((odd) => odd.outcome_name.toLowerCase() === 'yes' || odd.outcome_alias.toLowerCase() === 'yes');
	const no =
		getOdd(market, '76') ??
		market.odds.find((odd) => odd.outcome_name.toLowerCase() === 'no' || odd.outcome_alias.toLowerCase() === 'no');

	if (!yes || !no) return null;
	return { yes, no };
};

export const getDoubleChance = (
	match: Match
): { oneOrX: Odd; oneOrTwo: Odd; xOrTwo: Odd } | null => {
	const market = getMarket(match, 10);
	if (!market) return null;

	const oneOrX =
		getOdd(market, '9') ??
		market.odds.find((odd) => odd.outcome_name.toLowerCase().replaceAll(' ', '') === '1orx');
	const oneOrTwo =
		getOdd(market, '10') ??
		market.odds.find((odd) => odd.outcome_name.toLowerCase().replaceAll(' ', '') === '1or2');
	const xOrTwo =
		getOdd(market, '11') ??
		market.odds.find((odd) => odd.outcome_name.toLowerCase().replaceAll(' ', '') === 'xor2');

	if (!oneOrX || !oneOrTwo || !xOrTwo) return null;
	return { oneOrX, oneOrTwo, xOrTwo };
};
