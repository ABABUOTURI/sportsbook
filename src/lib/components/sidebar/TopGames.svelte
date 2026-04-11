<script lang="ts">
	import { ChevronRight, PlaneTakeoff, TrendingUp } from '$lib/icons';
</script>

<div class="rounded-card border border-border/60 bg-surface/40 p-3">
	<div class="mb-3 flex items-center justify-between">
		<div class="text-xs font-semibold uppercase tracking-wide text-orange-400">Top Games</div>
		<ChevronRight size={16} strokeWidth={2} class="text-slate-400" />
	</div>
	<div class="space-y-3">
		<button
			type="button"
			class="group flex h-16 w-full items-center justify-between rounded-[18px] border border-slate-700/70 bg-[#0F172A] px-4 text-left text-white transition hover:border-orange-500"
		>
			<div>
				<div class="text-xs uppercase tracking-[0.16em] text-slate-400">Aviator</div>
				<div class="mt-1 text-sm font-semibold">Live crash game</div>
			</div>
			<PlaneTakeoff size={20} strokeWidth={1.8} class="text-orange-400 transition group-hover:text-white" />
		</button>
		<button
			type="button"
			class="group flex h-16 w-full items-center justify-between rounded-[18px] border border-slate-700/70 bg-[#0F172A] px-4 text-left text-white transition hover:border-blue-500"
		>
			<div>
				<div class="text-xs uppercase tracking-[0.16em] text-slate-400">JetX</div>
				<div class="mt-1 text-sm font-semibold">High-speed wins</div>
			</div>
			<TrendingUp size={20} strokeWidth={1.8} class="text-blue-400 transition group-hover:text-white" />
		</button>
		<button
			type="button"
			class="group flex h-16 w-full items-center justify-between rounded-[18px] border border-slate-700/70 bg-[#0F172A] px-4 text-left text-white transition hover:border-slate-400"
		>
			<div>
				<div class="text-xs uppercase tracking-[0.16em] text-slate-400">Navigator</div>
				<div class="mt-1 text-sm font-semibold">Top league picks</div>
			</div>
			<ChevronRight size={20} strokeWidth={1.8} class="text-slate-400 transition group-hover:text-white" />
		</button>
	</div>
</div>
