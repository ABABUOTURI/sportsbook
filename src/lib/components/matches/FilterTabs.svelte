<script lang="ts">
	import { derived } from 'svelte/store';
	import { matches, activeFilter } from '$lib/stores/matches';

	const highlightsCount = derived(matches, ($matches) => $matches.length);
	const liveCount = derived(matches, ($matches) => $matches.filter((match) => match.status === 1).length);
	const upcomingCount = derived(matches, ($matches) => $matches.filter((match) => match.status === 0).length);

	function setFilter(value: 'highlights' | 'live' | 'upcoming') {
		activeFilter.set(value);
	}
</script>

<div class="flex items-center gap-2 px-0 py-3">
	<button
		type="button"
		class="rounded-full px-4 py-1.5 text-sm cursor-pointer transition-all duration-200 { $activeFilter === 'highlights' ? 'bg-orange-500 text-white font-semibold shadow-[0_0_10px_rgba(249,115,22,0.4)]' : 'bg-transparent border border-slate-600 text-slate-400 hover:border-orange-400 hover:text-orange-400' }"
		onclick={() => setFilter('highlights')}
	>
		<span>Highlights</span>
		<span class="ml-2 text-[10px] text-slate-300">{$highlightsCount}</span>
	</button>

	<button
		type="button"
		class="rounded-full px-4 py-1.5 text-sm cursor-pointer transition-all duration-200 { $activeFilter === 'live' ? 'bg-blue-600 text-white font-semibold' : 'bg-transparent border border-slate-600 text-slate-400 hover:border-orange-400 hover:text-orange-400' }"
		onclick={() => setFilter('live')}
	>
		<span class="inline-flex items-center">
			<span class="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block mr-1.5"></span>
			Live
		</span>
		<span class="ml-2 text-[10px] text-slate-300">{$liveCount}</span>
	</button>

	<button
		type="button"
		class="rounded-full px-4 py-1.5 text-sm cursor-pointer transition-all duration-200 { $activeFilter === 'upcoming' ? 'bg-blue-500 text-white font-semibold' : 'bg-transparent border border-slate-600 text-slate-400 hover:border-blue-400 hover:text-blue-400' }"
		onclick={() => setFilter('upcoming')}
	>
		<span>Upcoming</span>
		<span class="ml-2 text-[10px] text-slate-300">{$upcomingCount}</span>
	</button>
</div>
