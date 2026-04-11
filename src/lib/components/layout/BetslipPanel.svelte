<script lang="ts">
	import BetslipTab from '$lib/components/betslip/BetslipTab.svelte';
	import JengaBetsTab from '$lib/components/betslip/JengaBetsTab.svelte';
	import { activeBetslipTab } from '$lib/stores/ui';
	import { betslipState } from '$lib/stores/betslip';

	const setTab = (tab: 'betslip' | 'jenga') => {
		activeBetslipTab.set(tab);
	};
</script>

<aside class="mt-8 h-[calc(100%-32px)] overflow-hidden rounded-[10px] border border-slate-700/50 bg-[#1E293B]">
	<div class="flex-shrink-0 flex gap-2 px-3 pt-3">
		<button
			type="button"
			on:click={() => setTab('betslip')}
			class={`flex-1 rounded-[10px] border-b-2 px-4 py-3 text-xs shadow-[0_6px_16px_rgba(15,23,42,0.35)] transition ${
				$activeBetslipTab === 'betslip'
					? 'bg-[#0F172A] text-white font-semibold border-orange-500'
					: 'bg-[#1E293B] text-slate-400 border-transparent hover:text-white'
			}`}
		>
			Betslip ({$betslipState.selections.length})
		</button>
		<button
			type="button"
			on:click={() => setTab('jenga')}
			class={`flex-1 rounded-[10px] border-b-2 px-4 py-3 text-xs shadow-[0_6px_16px_rgba(15,23,42,0.35)] transition ${
				$activeBetslipTab === 'jenga'
					? 'bg-[#0F172A] text-white font-semibold border-orange-500'
					: 'bg-[#1E293B] text-slate-400 border-transparent hover:text-white'
			}`}
		>
			Jenga bets (0)
		</button>
	</div>
	<div class="flex-1 overflow-y-scroll overflow-x-hidden">
		{#if $activeBetslipTab === 'betslip'}
			<BetslipTab />
		{:else}
			<JengaBetsTab />
		{/if}
	</div>
</aside>
