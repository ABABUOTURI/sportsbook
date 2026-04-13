<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ComponentType } from 'svelte';
	import { Flame, Gamepad2, Home, Menu, PlaneTakeoff, Ticket, Trophy } from '$lib/icons';
	import { activePage, drawerOpen, mobileBetslipOpen } from '$lib/stores/ui';
	import { betslipState } from '$lib/stores/betslip';

	type NavItem = {
		id: 'home' | 'live' | 'aviator' | 'crash' | 'league';
		label: string;
		icon: ComponentType;
		iconClass?: string;
	};

	const navItems: NavItem[] = [
		{ id: 'home', label: 'Home', icon: Home },
		{ id: 'live', label: 'Live', icon: Gamepad2 },
		{ id: 'aviator', label: 'Aviator', icon: PlaneTakeoff, iconClass: 'text-red-400' },
		{ id: 'crash', label: 'Crash', icon: Flame, iconClass: 'text-orange-400' },
		{ id: 'league', label: 'League', icon: Trophy, iconClass: 'text-blue-400' }
	];

	const routes: Record<NavItem['id'], string> = {
		home: '/',
		live: '/live',
		aviator: '/aviator',
		crash: '/crash',
		league: '/league'
	};

	function goTo(id: NavItem['id']) {
		activePage.set(id);
		goto(routes[id]);
	}
</script>

<div class="hidden max-[456px]:flex w-full h-12 bg-[#0F172A] border-b border-orange-500/30 items-center justify-between px-4">
	<button
		type="button"
		onclick={() => $drawerOpen = true}
		class="p-2 rounded-lg text-slate-400 hover:text-orange-400 hover:bg-slate-800/60 transition-colors"
	>
		<Menu size={22} strokeWidth={1.8} />
	</button>
	<span class="text-orange-400 font-bold text-base tracking-wide">SportsBet</span>
	<button
		type="button"
		onclick={() => $mobileBetslipOpen = true}
		class="relative p-2 rounded-lg text-slate-400 hover:text-orange-400 hover:bg-slate-800/60 transition-colors"
	>
		<Ticket size={22} strokeWidth={1.8} />
		{#if $betslipState.selections.length > 0}
			<span class="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center">
				{$betslipState.selections.length}
			</span>
		{/if}
	</button>
</div>

<nav class="w-full h-16 max-[456px]:hidden bg-[#0F172A] border-b border-orange-500/30 flex items-center justify-center px-6">
	<div class="flex items-center justify-center gap-2">
		{#each navItems as item}
			<button
				type="button"
				onclick={() => goTo(item.id)}
				class={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
					$activePage === item.id
						? 'bg-orange-500 text-white font-semibold shadow-[0_0_12px_rgba(249,115,22,0.5)]'
						: 'border border-slate-600 text-slate-300 hover:border-orange-400 hover:text-orange-400'
				}`}
			>
				<svelte:component
					this={item.icon}
					size={16}
					strokeWidth={1.8}
					class={$activePage === item.id ? 'text-white' : item.iconClass ?? 'text-slate-400'}
				/>
				<span>{item.label}</span>
			</button>
		{/each}
	</div>
</nav>
