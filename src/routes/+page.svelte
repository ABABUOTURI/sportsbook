<script lang="ts">
	import { onMount } from 'svelte';
	import { groupedMatches, setMatches } from '$lib/stores/matches';
	import type { PageData } from './$types';

	let isLoading = true;
	const loadDelayMs = 2500;
	const { data } = $props<PageData>();

	onMount(() => {
		setMatches(data.matches);
		const timer = setTimeout(() => {
			isLoading = false;
		}, loadDelayMs);

		return () => clearTimeout(timer);
	});
</script>

{#if isLoading}
	<section class="flex min-h-[60vh] items-center justify-center">
		<div class="flex flex-col items-center gap-4">
			<div class="flex items-center gap-2" aria-label="Loading" role="status">
				<span class="h-3 w-3 animate-pulse rounded-full bg-primary"></span>
				<span class="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:150ms]"></span>
				<span class="h-3 w-3 animate-pulse rounded-full bg-primary [animation-delay:300ms]"></span>
			</div>
			<p class="text-sm text-textMuted">Loading sportsbook experience...</p>
		</div>
	</section>
{:else}
	<section class="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-6 px-4 py-8">
		{#if $groupedMatches.length === 0}
			<div
				class="h-64 w-full rounded-card border border-border/40 bg-surfaceLight/10"
				aria-hidden="true"
			></div>
		{:else}
			{#each $groupedMatches as group}
				<div class="rounded-card border border-border/40 bg-surfaceLight/10 p-4">
					<div class="flex items-center justify-between">
						<div class="text-sm font-semibold text-textPrimary">
							{group.competition_name}
						</div>
						<div class="text-xs text-textMuted">{group.country_name}</div>
					</div>
					<div class="mt-3 divide-y divide-border/30">
						{#each group.matches as match}
							<div class="flex flex-wrap items-center gap-3 py-3">
								<div class="min-w-[180px] text-sm text-textPrimary">
									{match.home_team} vs {match.away_team}
								</div>
								<div class="text-xs text-textMuted">{match.start_time}</div>
								<div class="ml-auto text-xs text-textMuted">
									{match.main_market_name}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</section>
{/if}
