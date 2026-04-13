<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { Flame, Gamepad2, Home, PlaneTakeoff, Trophy } from '$lib/icons';
	import { activePage } from '$lib/stores/ui';

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
</script>

<nav class="w-full h-16 bg-[#0F172A] border-b border-orange-500/30 flex items-center justify-center px-6">
	<div class="flex items-center justify-center gap-2">
		{#each navItems as item}
			<button
				type="button"
				onclick={() => activePage.set(item.id)}
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
