<script lang="ts">
	import { tick } from 'svelte';
	import type { PageData } from './$types';
	import { activeFilter, filteredMatches, loadMatches } from '$lib/stores/matches';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import BetslipPanel from '$lib/components/layout/BetslipPanel.svelte';
	import MobileDrawer from '$lib/components/layout/MobileDrawer.svelte';
	import MobileBottomNav from '$lib/components/layout/MobileBottomNav.svelte';
	import MobileBetslipSheet from '$lib/components/layout/MobileBetslipSheet.svelte';
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

<div class="w-full h-screen overflow-hidden bg-[#0F172A] flex flex-col">
	<div class="flex-shrink-0">
		<TopNav onsearch={(query) => (searchQuery = query)} />
	</div>

	<div class="flex-1 min-h-0 grid grid-cols-[256px_1fr_320px] max-[456px]:grid-cols-1 overflow-hidden">
		<div class="w-64 h-full overflow-y-scroll no-scrollbar bg-[#1E293B] border-r border-slate-700/50 sticky top-0 max-[456px]:hidden">
			<Sidebar onsearch={(query) => (searchQuery = query)} />
		</div>
		<main
			bind:this={mainContent}
			class="min-h-0 overflow-y-scroll no-scrollbar px-4 py-3 max-[456px]:px-3 max-[456px]:py-2 max-[456px]:pb-20"
		>
			<div class="space-y-4">
				<div class="sticky top-0 z-20 bg-[#0F172A] py-1 space-y-3 max-[456px]:pb-2">
					<BannerCarousel />
					<div class="rounded-[18px] bg-[#0F172A] p-4 shadow-bet max-[456px]:mt-1">
						<FilterTabs />
					</div>
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

		<div class="w-80 h-full overflow-y-scroll no-scrollbar bg-[#1E293B] border-l border-slate-700/50 sticky top-0 max-[456px]:hidden">
			<BetslipPanel />
		</div>
	</div>
</div>

<MobileDrawer />
<MobileBottomNav />
<MobileBetslipSheet />
