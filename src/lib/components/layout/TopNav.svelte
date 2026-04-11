<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { activePage } from '$lib/stores/ui';
	import { Flame, Home, PlaneTakeoff, Trophy, Tv } from '$lib/icons';

	type NavItem = {
		id: 'home' | 'live' | 'aviator' | 'crash' | 'league';
		label: string;
		icon: ComponentType;
		activeColor: string;
		glowColor: string;
	};

	const navItems: NavItem[] = [
		{
			id: 'home',
			label: 'Home',
			icon: Home,
			activeColor: 'bg-orange-500 border-orange-500',
			glowColor: 'shadow-[0_0_12px_rgba(249,115,22,0.5)]'
		},
		{
			id: 'live',
			label: 'Live',
			icon: Tv,
			activeColor: 'bg-blue-600 border-blue-600',
			glowColor: 'shadow-[0_0_12px_rgba(59,130,246,0.5)]'
		},
		{
			id: 'aviator',
			label: 'Aviator',
			icon: PlaneTakeoff,
			activeColor: 'bg-red-500 border-red-500',
			glowColor: 'shadow-[0_0_12px_rgba(239,68,68,0.5)]'
		},
		{
			id: 'crash',
			label: 'Crash',
			icon: Flame,
			activeColor: 'bg-orange-600 border-orange-600',
			glowColor: 'shadow-[0_0_12px_rgba(234,88,12,0.5)]'
		},
		{
			id: 'league',
			label: 'League',
			icon: Trophy,
			activeColor: 'bg-blue-500 border-blue-500',
			glowColor: 'shadow-[0_0_12px_rgba(59,130,246,0.5)]'
		}
	];

	const setActive = (id: NavItem['id']) => {
		activePage.set(id);
	};
</script>

<nav class="h-16 w-full bg-[#0F172A] border-b border-orange-500/60 rounded-b-[8px]">
	<div class="mx-auto flex h-full max-w-5xl items-center justify-center gap-3 px-4">
		{#each navItems as item}
			<button
				type="button"
				on:click={() => setActive(item.id)}
				class={`flex items-center gap-2 rounded-pill px-4 py-2 text-sm transition ${
					$activePage === item.id
						? `${item.activeColor} ${item.glowColor} text-white font-semibold`
						: 'border border-slate-600 text-slate-300 hover:border-orange-400 hover:text-orange-400'
				}`}
			>
				<svelte:component
					this={item.icon}
					size={18}
					strokeWidth={1.8}
					class={$activePage === item.id ? 'text-white' : 'text-slate-400'}
				/>
				<span>{item.label}</span>
			</button>
		{/each}
	</div>
</nav>
