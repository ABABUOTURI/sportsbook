<script lang="ts">
	import { Search, XCircle } from '$lib/icons';

	let { onsearch }: { onsearch: (query: string) => void } = $props();
	let searchQuery = $state('');

	function handleInput(event: Event) {
		searchQuery = (event.target as HTMLInputElement).value;
		onsearch(searchQuery);
	}

	function clearSearch() {
		searchQuery = '';
		onsearch(searchQuery);
	}
</script>

<div class="px-3 py-3">
	<div class="relative flex items-center">
		<Search size={16} strokeWidth={1.8} class="absolute left-3 text-slate-500 w-4 h-4" />
		<input
			type="text"
			bind:value={searchQuery}
			placeholder="Search teams or leagues"
			class="w-full rounded-lg bg-[#0F172A] border border-slate-700 text-sm text-slate-300 placeholder-slate-500 pl-9 pr-3 py-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition"
			oninput={handleInput}
		/>
		{#if searchQuery}
			<button
				type="button"
				onclick={clearSearch}
				class="absolute right-3 text-slate-400 hover:text-orange-400"
			>
				<XCircle size={16} strokeWidth={1.8} class="w-4 h-4" />
			</button>
		{/if}
	</div>
</div>
