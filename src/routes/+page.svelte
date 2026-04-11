<script lang="ts">
	import { tick } from 'svelte';
	import type { PageData } from './$types';
	import { activeCompetition, activeFilter, filteredMatches, loadMatches } from '$lib/stores/matches';
	import { betslipState } from '$lib/stores/betslip';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import BetslipPanel from '$lib/components/layout/BetslipPanel.svelte';
	import BannerCarousel from '$lib/components/banners/BannerCarousel.svelte';
	import FilterTabs from '$lib/components/matches/FilterTabs.svelte';
	import SportSection from '$lib/components/matches/SportSection.svelte';

	let { data } = $props<{ data?: PageData }>();
	let searchQuery = $state('');
	let mainContent: HTMLElement | undefined;

	$effect(() => {
		if (data?.matches) {
			loadMatches(data.matches);
		}
	});

	$effect(() => {
		$activeFilter;
		tick().then(() => {
			if (mainContent) {
				mainContent.scrollTop = 0;
			}
		});
	});

	const normalizeSearch = (value: string) => value.trim().toLowerCase();

	const matchesFilter = (searchValue: string) => (match: { home_team: string; away_team: string; competition_name: string; country_name: string }) => {
		if (!searchValue) return true;
		return [match.home_team, match.away_team, match.competition_name, match.country_name]
			.some((text) => text.toLowerCase().includes(searchValue));
	};

	let filteredBySearch = $derived(normalizeSearch(searchQuery));
	let groupedDisplay = $derived($filteredMatches
		.map((group) => ({
			...group,
			matches: group.matches.filter(matchesFilter(filteredBySearch))
		}))
		.filter((group) => group.matches.length > 0));
</script>

<div class="w-full h-screen overflow-hidden bg-[#0F172A] grid" style="grid-template-rows: 4rem 1fr; grid-template-columns: 224px 1fr 320px;">
	<div class="col-span-3 h-16 overflow-hidden relative">
		<TopNav />
		{#if $betslipState.selections.length > 0}
			<div class="absolute top-3.5 right-6 flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-xs font-bold">
				{$betslipState.selections.length}
			</div>
		{/if}
	</div>

	<div class="h-full overflow-y-auto overflow-x-hidden border-r border-slate-700/60 bg-[#1E293B]">
		<Sidebar onsearch={(query) => (searchQuery = query)} />
	</div>

	<main
		bind:this={mainContent}
		class="h-full overflow-y-auto overflow-x-hidden bg-[#0F172A] px-4 py-3 animate-[pulse_6s_ease-in-out_infinite]"
	>
		<div class="space-y-4">
			<BannerCarousel />
			<div class="rounded-[18px] border border-slate-700/70 bg-[#0F172A] p-4 shadow-bet">
				<FilterTabs />
			</div>
			<div class="space-y-5">
				{#if groupedDisplay.length > 0}
					{#each groupedDisplay as group}
						<SportSection {group} />
					{/each}
				{:else}
					<div class="rounded-3xl border border-slate-700/60 bg-[#1E293B] p-8 text-center text-slate-400 flex flex-col items-center justify-center gap-3 min-h-[300px]">
						<svg viewBox="0 0 24 24" class="w-12 h-12 text-orange-500/40" fill="none" stroke="currentColor" stroke-width="2">
							<circle cx="12" cy="12" r="10" />
							<path d="M12 8v4l3 2" />
						</svg>
						<p class="text-sm">No matches found</p>
					</div>
				{/if}
			</div>
		</div>
	</main>

	<div class="h-full overflow-y-auto overflow-x-hidden p-4 bg-[#1E293B]">
		<BetslipPanel />
	</div>
</div>
