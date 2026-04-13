<script lang="ts">
	import { availableLeagues, activeCompetition } from '$lib/stores/matches';
</script>

<div>
	<div class="px-3 pt-3 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
		Top Leagues
	</div>
	<div class="space-y-1">
		{#each $availableLeagues as league}
			<button
				type="button"
				class={`flex items-center justify-between px-3 py-2 cursor-pointer border-l-2 transition-colors ${
					$activeCompetition === league.competition_name
						? 'border-orange-500 bg-orange-500/10'
						: 'border-transparent hover:bg-slate-700/40 hover:border-blue-400/60'
				}`}
				onclick={() => activeCompetition.set($activeCompetition === league.competition_name ? null : league.competition_name)}
			>
				<div class="flex items-center gap-2">
					<span class="text-blue-400 w-4 h-4 leading-none flex items-center justify-center">⚽</span>
					<div>
						<div class={`text-sm ${$activeCompetition === league.competition_name ? 'text-orange-400' : 'text-slate-300'}`}>
							{league.competition_name}
						</div>
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
