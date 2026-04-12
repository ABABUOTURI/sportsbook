<script lang="ts">
	import SearchBar from '$lib/components/sidebar/SearchBar.svelte';
	import QuickActions from '$lib/components/sidebar/QuickActions.svelte';
	import TopGames from '$lib/components/sidebar/TopGames.svelte';
	import TopLeagues from '$lib/components/sidebar/TopLeagues.svelte';

	let { onsearch }: { onsearch: (query: string) => void } = $props();
</script>

<aside class="w-64 overflow-y-auto overflow-x-hidden bg-[#1E293B] border-r border-slate-700/50">
	<div class="flex flex-col gap-4 p-4">
		<SearchBar {onsearch} />
		<QuickActions />
		<TopGames />
		<TopLeagues />
	</div>
</aside>
