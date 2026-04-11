<script lang="ts">
	import type { GroupedMatches } from '$lib/types/match';
	import MatchRow from './MatchRow.svelte';

	let { group } = $props<{ group: GroupedMatches }>();
</script>

<section class="mb-4 rounded-lg overflow-hidden ring-1 ring-slate-800 transition-all hover:ring-slate-700">
	<div class="flex items-center justify-between bg-[#1E293B] px-4 py-2.5 sticky top-0 z-10">
		<div class="flex items-center gap-3">
			<span class="inline-flex items-center justify-center w-5 h-5 text-orange-400 rounded-full bg-orange-500/10">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
					<circle cx="12" cy="12" r="9" />
					<path d="M12 3.5L13.8 8.9L19.5 9.9L15.2 13.8L16.6 19.4L12 16.7L7.4 19.4L8.8 13.8L4.5 9.9L10.2 8.9L12 3.5Z" />
				</svg>
			</span>
			<div>
				<div class="text-sm font-bold text-white">{group.competition_name}</div>
				<div class="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full inline-block mt-1">
					{group.country_name}
				</div>
			</div>
		</div>
		<div class="flex items-center gap-3">
			<div class="text-xs text-slate-400">{group.matches.length} matches</div>
			<div class="text-slate-500 hover:text-orange-400 cursor-pointer">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
					<path d="M9 18l6-6-6-6" />
				</svg>
			</div>
		</div>
	</div>

	<div class="bg-[#0F172A] rounded-b-lg overflow-hidden">
		{#each group.matches as match}
			<MatchRow {match} />
		{/each}
	</div>
</section>
