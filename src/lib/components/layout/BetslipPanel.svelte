<script lang="ts">
	import BetslipTab from '$lib/components/betslip/BetslipTab.svelte';
	import JengaBetsTab from '$lib/components/betslip/JengaBetsTab.svelte';
	import { activeBetslipTab } from '$lib/stores/ui';
	import { betslipState } from '$lib/stores/betslip';

	const setTab = (tab: 'betslip' | 'jenga') => {
		activeBetslipTab.set(tab);
	};
</script>

<aside class="w-80 h-[calc(100vh-4rem)] bg-[#1E293B] border-l border-slate-700/50 overflow-hidden flex flex-col">
	<div class="flex w-full border-b border-slate-700/50 flex-shrink-0">
		<button
			type="button"
			onclick={() => setTab('betslip')}
			class={`flex-1 py-3 text-sm transition-all border-b-2 ${
				$activeBetslipTab === 'betslip'
					? 'bg-[#0F172A] text-white font-semibold border-orange-500'
					: 'bg-[#1E293B] text-slate-400 border-transparent hover:text-white'
			}`}
		>
			Betslip ({$betslipState.selections.length})
		</button>
		<button
			type="button"
			onclick={() => setTab('jenga')}
			class={`flex-1 py-3 text-sm transition-all border-b-2 ${
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
