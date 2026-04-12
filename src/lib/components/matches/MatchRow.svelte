<script lang="ts">
	import type { Match } from '$lib/types/match';
	import OddsColumns from './OddsColumns.svelte';
	import { formatMatchTime } from '$lib/utils/formatDate';

	let { match } = $props<{ match: Match }>();
</script>

<div class="flex flex-col gap-3 px-4 py-3 border-b border-slate-800/80 transition-all hover:bg-slate-950/80">
	<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<div class="text-sm font-semibold text-slate-100">{match.home_team}</div>
			<div class="text-sm font-semibold text-slate-100">{match.away_team}</div>
		</div>
		<div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
			<span>{formatMatchTime(match.start_time)}</span>
			{#if match.status === 1 || match.status_desc.toLowerCase().includes('live')}
				<span class="inline-flex items-center rounded-full bg-red-500/15 px-2 py-0.5 text-red-400">Live</span>
			{/if}
			{#if match.result && match.result !== '0:0'}
				<span class="font-semibold text-orange-400">{match.result}</span>
			{/if}
		</div>
	</div>

	<div class="flex-1">
		<OddsColumns {match} />
	</div>
</div>