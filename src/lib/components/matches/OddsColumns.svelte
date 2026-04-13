<script lang="ts">
	import type { Match } from '$lib/types/match';
	import OddButton from './OddButton.svelte';
	import { get1x2, getBTTS, getDoubleChance } from '$lib/utils/getMarket';

	let { match } = $props<{ match: Match }>();

	const market1x2 = $derived(get1x2(match));
	const marketDC = $derived(getDoubleChance(match));
	const marketBTTS = $derived(getBTTS(match));
	const moreMarketsCount = $derived(Math.max(match.total_markets - 8, 0));

	const placeholderCount = (count: number) => Array.from({ length: count });
</script>

<div class="flex items-end gap-1 whitespace-nowrap">
	<div class="flex-shrink-0">
		<div class="text-[9px] text-slate-500 text-center mb-1">1 / X / 2</div>
		<div class="flex items-center gap-1">
			{#if market1x2}
				<OddButton odd={market1x2.home} label="1" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={market1x2.home.market_name} />
				<OddButton odd={market1x2.draw} label="X" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={market1x2.draw.market_name} />
				<OddButton odd={market1x2.away} label="2" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={market1x2.away.market_name} />
			{:else}
				{#each placeholderCount(3) as _}
					<button type="button" class="flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-not-allowed select-none transition-all duration-150 border bg-slate-800 border-slate-700 text-slate-600" disabled>
						<span class="text-[10px] uppercase tracking-wide">--</span>
						<span class="text-sm font-bold">--</span>
					</button>
				{/each}
			{/if}
		</div>
	</div>
	<div class="w-px h-8 bg-slate-700/50 flex-shrink-0"></div>
	<div class="flex-shrink-0">
		<div class="text-[9px] text-slate-500 text-center mb-1">1orX / 1or2 / Xor2</div>
		<div class="flex items-center gap-1">
			{#if marketDC}
				<OddButton odd={marketDC.oneOrX} label="1orX" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketDC.oneOrX.market_name} />
				<OddButton odd={marketDC.oneOrTwo} label="1or2" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketDC.oneOrTwo.market_name} />
				<OddButton odd={marketDC.xOrTwo} label="Xor2" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketDC.xOrTwo.market_name} />
			{:else}
				{#each placeholderCount(3) as _}
					<button type="button" class="flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-not-allowed select-none transition-all duration-150 border bg-slate-800 border-slate-700 text-slate-600" disabled>
						<span class="text-[10px] uppercase tracking-wide">--</span>
						<span class="text-sm font-bold">--</span>
					</button>
				{/each}
			{/if}
		</div>
	</div>
	<div class="w-px h-8 bg-slate-700/50 flex-shrink-0"></div>
	<div class="flex-shrink-0">
		<div class="text-[9px] text-slate-500 text-center mb-1">Yes / No</div>
		<div class="flex items-center gap-1">
			{#if marketBTTS}
				<OddButton odd={marketBTTS.yes} label="Yes" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketBTTS.yes.market_name} />
				<OddButton odd={marketBTTS.no} label="No" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketBTTS.no.market_name} />
			{:else}
				{#each placeholderCount(2) as _}
					<button type="button" class="flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-not-allowed select-none transition-all duration-150 border bg-slate-800 border-slate-700 text-slate-600" disabled>
						<span class="text-[10px] uppercase tracking-wide">--</span>
						<span class="text-sm font-bold">--</span>
					</button>
				{/each}
			{/if}
		</div>
	</div>
	<button type="button" class="min-w-[42px] text-right self-end mb-[2px] text-[10px] text-blue-400 hover:text-orange-400 underline cursor-pointer transition-colors">
		+{moreMarketsCount} More
	</button>
</div>
