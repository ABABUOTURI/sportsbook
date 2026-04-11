<script lang="ts">
	import { Ticket, Trash2 } from '$lib/icons';
	import BetslipEmptyState from '$lib/components/betslip/BetslipEmptyState.svelte';
	import { betslipState, clearBets, removeBet, placeBet, updateStake } from '$lib/stores/betslip';

	let stake = 0;

	function handleStakeChange(event: Event) {
		const value = Number((event.target as HTMLInputElement).value);
		stake = Number.isNaN(value) ? 0 : value;
		updateStake(stake);
	}
</script>

<div class="flex h-full flex-col">
	<div class="flex items-center justify-between px-4 py-3">
		<div class="flex items-center gap-2 text-sm font-semibold text-orange-400">
			<Ticket size={16} strokeWidth={2} class="text-orange-400" />
			Betslip
		</div>
		<button
			type="button"
			onclick={clearBets}
			class="flex items-center gap-1 text-xs text-slate-400 hover:text-red-400 transition"
		>
			<Trash2 size={16} strokeWidth={2} class="text-slate-400" />
			Clear All
		</button>
	</div>

	{#if $betslipState.selections.length === 0}
		<div class="flex flex-1 flex-col items-center justify-center h-full gap-4 px-6">
			<BetslipEmptyState />
		</div>
	{:else}
		<div class="flex-1 overflow-y-auto">
			{#each $betslipState.selections as selection}
				<div class="relative px-3 py-3 border-b border-slate-800">
					<div class="text-xs text-slate-400">{selection.home_team} v {selection.away_team}</div>
					<div class="text-[10px] text-slate-500 mt-0.5">{selection.market_name}</div>
					<div class="mt-1 flex items-center justify-between">
						<div class="text-sm font-semibold text-white">{selection.outcome_alias || selection.outcome_name}</div>
						<div class="text-sm font-bold text-orange-400">{selection.odd_value.toFixed(2)}</div>
					</div>
					<button
						type="button"
						onclick={() => removeBet(selection.event_odd_id)}
						class="absolute top-2 right-2 text-slate-500 hover:text-red-400 transition text-lg"
					>
						×
					</button>
				</div>
			{/each}
		</div>

		<div class="sticky bottom-0 bg-[#1E293B] border-t border-slate-700 p-4">
			<div class="flex flex-col gap-3">
				<div class="flex items-center justify-between gap-3">
					<label class="text-xs text-slate-400">Stake</label>
					<input
						type="number"
						min="0"
						value={stake}
						oninput={handleStakeChange}
						class="w-32 rounded-lg border border-slate-700 bg-[#0F172A] px-3 py-2 text-sm text-white focus:border-orange-500 focus:outline-none"
					/>
				</div>

				<div class="space-y-2">
					<div class="flex items-center justify-between text-xs text-slate-400">
						<span>Total Odds:</span>
						<span class="text-blue-400">{$betslipState.totalOdds.toFixed(2)}</span>
					</div>
					<div class="flex items-center justify-between text-xs text-slate-400">
						<span>Potential Win:</span>
						<span class="text-orange-400 font-bold text-base">${$betslipState.potentialWin.toFixed(2)}</span>
					</div>
				</div>

				<div class="space-y-3">
					<button
						type="button"
						onclick={clearBets}
						class="w-full rounded-lg border border-slate-700 bg-transparent py-3 text-sm font-semibold text-slate-400 hover:text-red-400 transition"
					>
						Clear All
					</button>
					<button
						type="button"
						class="w-full rounded-lg bg-orange-500 py-3 text-sm font-bold text-white shadow-[0_4px_14px_rgba(249,115,22,0.4)] transition hover:bg-orange-600 hover:shadow-[0_4px_20px_rgba(249,115,22,0.6)]"
					>
						Place Bet
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>
