<script lang="ts">
	import type { Odd } from '$lib/types/match';
	import { betslipState, toggleBet } from '$lib/stores/betslip';

	let { odd, label, matchId, homeTeam, awayTeam, marketName } = $props<{ 
		odd: Odd;
		label: string;
		matchId: number;
		homeTeam: string;
		awayTeam: string;
		marketName: string;
	}>();

	const selected = $betslipState.selections.some((item) => item.event_odd_id === odd.event_odd_id);
	const movement = odd.odd_value > odd.prev_odd_value ? '▲' : odd.odd_value < odd.prev_odd_value ? '▼' : '';
	const movementColor = movement === '▲' ? 'text-green-400' : movement === '▼' ? 'text-red-400' : '';
	const isActive = odd.market_status === 1;

	const buttonClasses = isActive
		? selected
			? 'flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-pointer select-none transition-all duration-150 border bg-orange-500 border-orange-400 text-white shadow-[0_0_8px_rgba(249,115,22,0.6)]'
			: 'flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-pointer select-none transition-all duration-150 border bg-[#0F172A] border-slate-700 hover:bg-blue-500/20 hover:border-blue-400 text-slate-200'
		: 'flex flex-col items-center justify-center min-w-[52px] px-2 py-1.5 rounded-lg cursor-not-allowed select-none transition-all duration-150 border bg-slate-800 text-slate-600';

	const labelClasses = selected ? 'text-[10px] uppercase tracking-wide text-white' : 'text-[10px] uppercase tracking-wide text-slate-400';
	const valueClasses = selected ? 'text-sm font-bold text-white flex items-center gap-1' : 'text-sm font-bold text-slate-200 flex items-center gap-1';

	function handleClick() {
		if (!isActive) return;
		toggleBet({
			event_odd_id: odd.event_odd_id,
			parent_match_id: matchId,
			home_team: homeTeam,
			away_team: awayTeam,
			market_name: marketName,
			outcome_name: odd.outcome_name,
			outcome_alias: odd.outcome_alias,
			odd_value: odd.odd_value
		});
	}
</script>

<button class={buttonClasses} onclick={handleClick} disabled={!isActive}>
	<span class={labelClasses}>{label}</span>
	<span class={valueClasses}>
		{odd.odd_value.toFixed(2)}
		{#if movement}
			<span class={`${movementColor} text-xs`}>{movement}</span>
		{/if}
	</span>
</button>