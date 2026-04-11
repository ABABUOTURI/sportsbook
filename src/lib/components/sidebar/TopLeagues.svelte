<script lang="ts">
	import { ChevronRight } from '$lib/icons';
</script>

<div class="rounded-card border border-border/60 bg-surface/40 p-3">
	<div class="mb-3 flex items-center justify-between">
		<div class="text-xs font-semibold uppercase tracking-wide text-orange-400">Top Leagues</div>
		<ChevronRight size={16} strokeWidth={2} class="text-slate-400" />
	</div>
	<div class="space-y-2 text-sm text-white">
		<div class="rounded-[14px] border border-slate-700/70 bg-[#0F172A] px-3 py-3">
			<div class="font-semibold">Premier League</div>
			<div class="text-xs text-slate-400">England</div>
		</div>
		<div class="rounded-[14px] border border-slate-700/70 bg-[#0F172A] px-3 py-3">
			<div class="font-semibold">La Liga</div>
			<div class="text-xs text-slate-400">Spain</div>
		</div>
		<div class="rounded-[14px] border border-slate-700/70 bg-[#0F172A] px-3 py-3">
			<div class="font-semibold">Bundesliga</div>
			<div class="text-xs text-slate-400">Germany</div>
		</div>
	</div>
</div>
