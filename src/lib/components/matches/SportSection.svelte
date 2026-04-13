<script lang="ts">
	import type { GroupedMatches } from '$lib/types/match';
	import MatchRow from './MatchRow.svelte';
	import { showToast } from '$lib/stores/feedback';

	let { group } = $props<{ group: GroupedMatches }>();
</script>

<section class="mb-4 rounded-lg overflow-hidden transition-all">
	<div class="flex items-center justify-between bg-[#1E293B] px-4 py-2.5 sticky top-0 z-10 border-l-4 border-orange-500">
		<div class="flex items-center">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400 w-5 h-5">
				<circle cx="12" cy="12" r="9" />
				<path d="M12 3.5L13.8 8.9L19.5 9.9L15.2 13.8L16.6 19.4L12 16.7L7.4 19.4L8.8 13.8L4.5 9.9L10.2 8.9L12 3.5Z" />
			</svg>
			<span class="text-sm font-bold text-white ml-2">{group.competition_name}</span>
			<span class="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full ml-2">
				{group.country_name}
			</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="text-xs text-slate-400">{group.matches.length} matches</span>
			<button
				type="button"
				onclick={() => showToast(`${group.competition_name} details coming soon`)}
				class="text-slate-500 hover:text-orange-400 cursor-pointer"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
					<path d="M9 18l6-6-6-6" />
				</svg>
			</button>
		</div>
	</div>

	<div class="bg-[#0F172A] rounded-b-lg overflow-hidden">
		{#each group.matches as match}
			<MatchRow {match} />
		{/each}
	</div>
</section>
