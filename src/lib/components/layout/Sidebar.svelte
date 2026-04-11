<script lang="ts">
	import SearchBar from '$lib/components/sidebar/SearchBar.svelte';
	import QuickActions from '$lib/components/sidebar/QuickActions.svelte';
	import TopGames from '$lib/components/sidebar/TopGames.svelte';
	import TopLeagues from '$lib/components/sidebar/TopLeagues.svelte';

	let { onsearch }: { onsearch: (query: string) => void } = $props();
</script>

<aside
	class="h-[calc(100vh-4rem)] w-96 overflow-y-scroll overflow-x-hidden border-r border-slate-700/50 bg-[#1E293B] text-textPrimary hover:border-l-2 hover:border-l-orange-500 transition-all"
>
	<div class="flex flex-col gap-4 p-4">
		<SearchBar {onsearch} />
		<QuickActions />
		<TopGames />
		<TopLeagues />
	</div>
</aside>
