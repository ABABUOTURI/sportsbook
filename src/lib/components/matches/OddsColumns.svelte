<script lang="ts">
	import type { Match } from '$lib/types/match';
	import OddButton from './OddButton.svelte';
	import { get1x2, getBTTS, getDoubleChance } from '$lib/utils/getMarket';

	let { match } = $props<{ match: Match }>();

	const market1x2 = get1x2(match);
	const marketDC = getDoubleChance(match);
	const marketBTTS = getBTTS(match);

	const placeholderCount = (count: number) => Array.from({ length: count });
</script>

<div class="grid gap-3 rounded-[20px] border border-slate-800/70 bg-[#111827] p-3">
	<div class="grid gap-3 md:grid-cols-[1.3fr_1.5fr] xl:grid-cols-[1fr_1.6fr]">
		<div class="space-y-1">
			<div class="text-sm font-semibold text-slate-100">{match.home_team}</div>
			<div class="text-sm font-semibold text-slate-100">{match.away_team}</div>
			<div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
				<span>{match.competition_name}</span>
				<span>{match.country_name}</span>
				<span>{new Date(match.start_time).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
			</div>
		</div>
		<div class="flex flex-wrap items-center justify-end gap-2 text-xs text-slate-400">
			{#if match.status === 1 || match.status_desc.toLowerCase().includes('live')}
				<span class="rounded-full bg-red-500/15 px-2 py-0.5 text-red-400">Live</span>
			{/if}
			<span class="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">{match.total_markets} markets</span>
		</div>
	</div>

	<div class="grid gap-3 lg:grid-cols-[1.15fr_1.15fr_0.9fr]">
		<div class="space-y-2">
			<div class="text-[10px] uppercase tracking-[0.2em] text-slate-500">1 / X / 2</div>
			<div class="flex items-center gap-1">
				{#if market1x2}
					<OddButton odd={market1x2.home} label="1" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={market1x2.home.market_name} />
					<OddButton odd={market1x2.draw} label="X" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={market1x2.draw.market_name} />
					<OddButton odd={market1x2.away} label="2" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={market1x2.away.market_name} />
				{:else}
					{#each placeholderCount(3) as _}
						<button type="button" class="flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-500" disabled>
							<span class="text-[10px] uppercase tracking-wide">--</span>
							<span class="text-sm font-bold">--</span>
						</button>
					{/each}
				{/if}
			</div>
		</div>
		<div class="space-y-2">
			<div class="text-[10px] uppercase tracking-[0.2em] text-slate-500">1orX / 1or2 / Xor2</div>
			<div class="flex items-center gap-1">
				{#if marketDC}
					<OddButton odd={marketDC.oneOrX} label="1orX" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketDC.oneOrX.market_name} />
					<OddButton odd={marketDC.oneOrTwo} label="1or2" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketDC.oneOrTwo.market_name} />
					<OddButton odd={marketDC.xOrTwo} label="Xor2" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketDC.xOrTwo.market_name} />
				{:else}
					{#each placeholderCount(3) as _}
						<button type="button" class="flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-500" disabled>
							<span class="text-[10px] uppercase tracking-wide">--</span>
							<span class="text-sm font-bold">--</span>
						</button>
					{/each}
				{/if}
			</div>
		</div>
		<div class="space-y-2">
			<div class="text-[10px] uppercase tracking-[0.2em] text-slate-500">Yes / No</div>
			<div class="flex items-center gap-1">
				{#if marketBTTS}
					<OddButton odd={marketBTTS.yes} label="Yes" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketBTTS.yes.market_name} />
					<OddButton odd={marketBTTS.no} label="No" matchId={match.parent_match_id} homeTeam={match.home_team} awayTeam={match.away_team} marketName={marketBTTS.no.market_name} />
				{:else}
					{#each placeholderCount(2) as _}
						<button type="button" class="flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-500" disabled>
							<span class="text-[10px] uppercase tracking-wide">--</span>
							<span class="text-sm font-bold">--</span>
						</button>
					{/each}
				{/if}
			</div>
			<div>
				<button type="button" class="text-[10px] text-blue-400 underline transition-colors hover:text-orange-400">
					+{match.total_markets - 8} More
				</button>
			</div>
		</div>
	</div>
</div>