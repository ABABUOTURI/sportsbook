<script lang="ts">
	import type { Odd } from '$lib/types/match';
	import type { BetSelection } from '$lib/types/betslip';
	import { isSelected, toggleBet } from '$lib/stores/betslip';

	let { odd, label, matchId, homeTeam, awayTeam, marketName } = $props<{
		odd: Odd;
		label: string;
		matchId: number;
		homeTeam: string;
		awayTeam: string;
		marketName: string;
	}>();

	const selectedStore = $derived(isSelected(odd.event_odd_id));
	const selected = $derived($selectedStore);
	const isActive = $derived(odd.market_status === 1);
	const isUp = $derived(odd.odd_value > odd.prev_odd_value);
	const isDown = $derived(odd.odd_value < odd.prev_odd_value);

	const buttonClasses = $derived(
		isActive
			? selected
				? 'flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-pointer select-none transition-all duration-150 border bg-orange-500 border-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.6)]'
				: 'flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-pointer select-none transition-all duration-150 border bg-[#0F172A] border-slate-700 hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-300'
			: 'flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-not-allowed select-none transition-all duration-150 border bg-slate-800 border-slate-700 text-slate-600'
	);

	const labelClasses = $derived(`text-[10px] uppercase tracking-wide ${selected ? 'text-white' : isActive ? 'text-slate-400' : 'text-slate-600'}`);
	const valueClasses = $derived(`text-sm font-bold flex items-center gap-1 ${selected ? 'text-white' : isActive ? 'text-slate-200' : 'text-slate-600'}`);

	function handleClick() {
		if (!isActive) return;
		const selection: BetSelection = {
			event_odd_id: odd.event_odd_id,
			parent_match_id: matchId,
			home_team: homeTeam,
			away_team: awayTeam,
			market_name: marketName,
			outcome_name: odd.outcome_name,
			outcome_alias: odd.outcome_alias,
			odd_value: odd.odd_value
		};
		toggleBet(selection);
	}
</script>

<button class={buttonClasses} onclick={isActive ? handleClick : undefined} disabled={!isActive}>
	<span class={labelClasses}>{label}</span>
	<span class={valueClasses}>
		{odd.odd_value.toFixed(2)}
		{#if isUp}
			<span class="text-[10px] text-green-400">▲</span>
		{:else if isDown}
			<span class="text-[10px] text-red-400">▼</span>
		{/if}
	</span>
</button>
