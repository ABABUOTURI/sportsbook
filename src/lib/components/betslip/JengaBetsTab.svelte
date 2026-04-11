<script lang="ts">
	import { CheckCircle2, X } from '$lib/icons';
</script>

<div class="flex h-full flex-col gap-4 p-4">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2 text-sm font-semibold text-orange-400">
			<CheckCircle2 size={16} strokeWidth={2} class="text-blue-400" />
			Jenga Bets
		</div>
		<button type="button" class="text-slate-400 hover:text-red-400">
			<X size={16} strokeWidth={2} class="text-red-400" />
		</button>
	</div>

	<div class="rounded-card border border-border/60 bg-[#0F172A] p-6 text-sm text-white">
		Jenga bets will appear here.
	</div>
</div>
