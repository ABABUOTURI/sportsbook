<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { activeCompetition, activeFilter, filteredMatches, loadMatches } from '$lib/stores/matches';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import BetslipPanel from '$lib/components/layout/BetslipPanel.svelte';
	import BannerCarousel from '$lib/components/banners/BannerCarousel.svelte';
	import FilterTabs from '$lib/components/matches/FilterTabs.svelte';
	import SportSection from '$lib/components/matches/SportSection.svelte';

	let { data } = $props<{ data?: PageData }>();
	let searchQuery = $state('');

	$effect(() => {
		if (data?.matches) {
			loadMatches(data.matches);
		}
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

<div class="w-full h-screen overflow-hidden bg-[#0F172A] grid grid-rows-[4rem_1fr]">
	<div class="w-full h-16 overflow-hidden">
		<TopNav />
	</div>

	<div class="grid grid-cols-[384px_1fr_320px] overflow-hidden h-full bg-[#0F172A]">
		<div class="h-full overflow-y-scroll overflow-x-hidden border-r border-slate-700/60 bg-[#1E293B]">
			<Sidebar onsearch={(query) => searchQuery = query} />
		</div>

		<main class="h-full overflow-y-scroll overflow-x-hidden bg-[#0F172A] p-4">
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
						<div class="rounded-3xl border border-slate-700/60 bg-[#1E293B] p-8 text-center text-slate-400">
							No matches found.
						</div>
					{/if}
				</div>
			</div>
		</main>

		<div class="h-full overflow-y-scroll overflow-x-hidden p-4 bg-[#1E293B]">
			<BetslipPanel />
		</div>
	</div>
</div>
