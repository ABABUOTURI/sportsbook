<script lang="ts">
	import { onMount } from 'svelte';
	import { loadMatches } from '$lib/stores/matches';
	import type { PageData } from './$types';
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import BetslipPanel from '$lib/components/layout/BetslipPanel.svelte';

	const { data } = $props<{ data?: PageData }>();

	onMount(() => {
		loadMatches(data?.matches ?? []);
	});
</script>

<div class="w-full h-screen overflow-hidden bg-[#0F172A] grid grid-rows-[4rem_1fr]">
	<div class="w-full h-16 overflow-hidden">
		<TopNav />
	</div>
		<div class="grid grid-cols-[384px_1fr_320px] overflow-hidden h-full bg-[#0F172A]">
		<div class="h-full overflow-y-scroll overflow-x-hidden">
			<Sidebar />
		</div>
		<main class="h-full overflow-y-scroll overflow-x-hidden bg-[#0F172A]"></main>
		<div class="h-full overflow-y-scroll overflow-x-hidden">
			<BetslipPanel />
		</div>
	</div>
</div>
