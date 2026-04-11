<script lang="ts">
	import { Ticket, Trash2 } from '$lib/icons';
	import BetslipEmptyState from '$lib/components/betslip/BetslipEmptyState.svelte';
</script>

<div class="flex h-full flex-col gap-4 p-4">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2 text-sm font-semibold text-orange-400">
			<Ticket size={16} strokeWidth={2} class="text-orange-400" />
			Betslip
		</div>
		<button
			type="button"
			class="flex items-center gap-1 text-xs text-white hover:text-red-400"
		>
			<Trash2 size={16} strokeWidth={2} class="text-red-400" />
			Clear
		</button>
	</div>

	<BetslipEmptyState />
</div>
