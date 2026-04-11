<script lang="ts">
	import { Trophy } from '$lib/icons';
	import { availableLeagues, activeCompetition } from '$lib/stores/matches';

	let leagues = [];
	let active = null;

	availableLeagues.subscribe(value => leagues = value);
	activeCompetition.subscribe(value => active = value);

	function handleLeagueClick(competitionName: string) {
		activeCompetition.set(active === competitionName ? null : competitionName);
	}
</script>

<div>
	<div class="px-3 pt-3 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
		Top Leagues
	</div>
	<div class="space-y-1">
		{#each leagues as league}
			<button
				type="button"
				class="flex items-center justify-between px-3 py-2 cursor-pointer border-l-2 transition-colors
					{active === league.competition_name
						? 'border-orange-500 bg-orange-500/10'
						: 'border-transparent hover:bg-slate-700/40 hover:border-blue-400/60'}"
				on:click={() => handleLeagueClick(league.competition_name)}
			>
				<div class="flex items-center gap-2">
					<Trophy size={16} strokeWidth={1.8} class="text-blue-400 w-4 h-4" />
					<div>
						<div class="text-sm text-slate-300">{league.competition_name}</div>
						<div class="text-xs text-slate-500">{league.country_name}</div>
					</div>
				</div>
				<div class="text-xs bg-slate-700 text-slate-300 rounded-full px-2 py-0.5">
					{league.match_count}
				</div>
			</button>
		{/each}
	</div>
</div>
