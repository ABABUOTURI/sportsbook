<script lang="ts">
	import type { Match } from '$lib/types/match';
	import OddsColumns from './OddsColumns.svelte';
	import { formatMatchTime } from '$lib/utils/formatDate';

	let { match } = $props<{ match: Match }>();
	const isLive = $derived(match.status_desc.toLowerCase() === 'live' || match.status === 1);
	const hasScore = $derived(Boolean(match.result) && match.result !== '0:0' && match.result !== '0-0');
</script>

<div class="overflow-x-auto no-scrollbar">
	<div class="flex items-center justify-between gap-4 px-4 py-3 border-b border-slate-800/80 hover:bg-slate-800/40 transition-all cursor-default border-l-2 border-l-orange-500/0 hover:border-l-orange-500/60 max-[456px]:min-w-[860px]">
		<div class="min-w-[140px]">
			<div class="text-sm font-semibold text-slate-100">{match.home_team}</div>
			<div class="text-sm font-semibold text-slate-100 mt-0.5">{match.away_team}</div>
			<div class="flex flex-wrap items-center mt-1 text-xs text-slate-500">
				<span>{formatMatchTime(match.start_time)}</span>
				{#if isLive}
					<span class="inline bg-red-500/20 text-red-400 text-[10px] px-1.5 py-0.5 rounded font-medium ml-2">Live</span>
				{/if}
				{#if hasScore}
					<span class="text-sm font-bold text-orange-400 ml-2">{match.result}</span>
				{/if}
			</div>
		</div>
		<div class="flex-1 min-w-0 flex justify-end">
			<OddsColumns {match} />
		</div>
	</div>
</div>
