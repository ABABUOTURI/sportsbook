<script lang="ts">
	import type { ComponentType } from 'svelte';
	import SearchBar from '$lib/components/sidebar/SearchBar.svelte';
	import QuickActions from '$lib/components/sidebar/QuickActions.svelte';
	import TopGames from '$lib/components/sidebar/TopGames.svelte';
	import TopLeagues from '$lib/components/sidebar/TopLeagues.svelte';
	import { activePage, sidebarOpen } from '$lib/stores/ui';
	import { activeCompetition, availableLeagues } from '$lib/stores/matches';
	import {
		ClipboardList,
		Flame,
		Home,
		MessageCircle,
		PlaneTakeoff,
		Sparkles,
		Trophy,
		Tv,
		UserCircle,
		UserPlus,
		X
	} from '$lib/icons';

	let { onsearch }: { onsearch: (query: string) => void } = $props();

	type NavItem = {
		id: 'home' | 'live' | 'aviator' | 'crash' | 'league';
		label: string;
		icon: ComponentType;
	};

	const navItems: NavItem[] = [
		{ id: 'home', label: 'Home', icon: Home },
		{ id: 'live', label: 'Live', icon: Tv },
		{ id: 'aviator', label: 'Aviator', icon: PlaneTakeoff },
		{ id: 'crash', label: 'Crash', icon: Flame },
		{ id: 'league', label: 'League', icon: Trophy }
	];

	const quickActions = [
		{ label: 'My Bets', icon: ClipboardList },
		{ label: 'Profile', icon: UserCircle },
		{ label: 'Chat us', icon: MessageCircle },
		{ label: 'Affiliate', icon: UserPlus },
		{ label: 'Promos', icon: Sparkles }
	];

	const games = [
		{ name: 'Aviator', src: '/images/games/aviator.png' },
		{ name: 'JetX', src: '/images/games/jetx.png' },
		{ name: 'Navigator', src: '/images/games/navigator.png' }
	];
</script>

<!-- Mobile drawer -->
<div
	class="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300"
	class:opacity-100={$sidebarOpen}
	class:opacity-0={!$sidebarOpen}
	class:pointer-events-auto={$sidebarOpen}
	class:pointer-events-none={!$sidebarOpen}
	onclick={() => sidebarOpen.set(false)}
></div>

<aside
	class="fixed top-0 left-0 h-full w-72 z-50 bg-[#1E293B] lg:hidden flex flex-col overflow-y-scroll no-scrollbar border-r border-slate-700/50 transition-transform duration-300 ease-out"
	class:translate-x-0={$sidebarOpen}
	class:-translate-x-full={!$sidebarOpen}
>
	<div class="flex items-center justify-between px-4 py-3 border-b border-slate-700 flex-shrink-0">
		<span class="text-sm font-semibold text-white">Menu</span>
		<button type="button" onclick={() => sidebarOpen.set(false)}>
			<X size={18} class="text-slate-400 hover:text-orange-400 transition-colors" />
		</button>
	</div>

	<div class="px-3 py-3 border-b border-slate-700/50">
		<div class="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-2 mb-2">Navigation</div>
		{#each navItems as item}
			<button
				type="button"
				onclick={() => {
					activePage.set(item.id);
					sidebarOpen.set(false);
				}}
				class={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all w-full text-left mb-1 border-l-2 ${
					$activePage === item.id
						? 'bg-orange-500/20 text-orange-400 border-orange-500'
						: 'text-slate-300 hover:bg-slate-700/40 hover:text-white border-transparent'
				}`}
			>
				<svelte:component this={item.icon} size={18} strokeWidth={1.8} />
				<span class="text-sm font-medium">{item.label}</span>
			</button>
		{/each}
	</div>

	<div class="px-3 py-3 border-b border-slate-700/50">
		<div class="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-2 mb-2">Quick Actions</div>
		{#each quickActions as action}
			<button
				type="button"
				onclick={() => sidebarOpen.set(false)}
				class="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all w-full text-left mb-1 text-slate-300 hover:bg-slate-700/40 hover:text-white border-l-2 border-transparent"
			>
				<svelte:component this={action.icon} size={18} strokeWidth={1.8} />
				<span class="text-sm font-medium">{action.label}</span>
			</button>
		{/each}
	</div>

	<div class="px-3 py-3 border-b border-slate-700/50">
		<div class="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-2 mb-2">Top Games</div>
		{#each games as game}
			<button
				type="button"
				class="mx-0 mb-2 w-full overflow-hidden rounded-lg cursor-pointer relative group ring-0 transition group-hover:ring-1 group-hover:ring-orange-500/60 aspect-[3/1]"
			>
				<img src={game.src} alt={game.name} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
				<div class="absolute inset-0 bg-orange-500/0 transition-colors duration-300 group-hover:bg-orange-500/10"></div>
			</button>
		{/each}
	</div>

	<div class="px-3 py-3">
		<div class="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-2 mb-2">Top Leagues</div>
		{#each $availableLeagues as league}
			<button
				type="button"
				class="flex items-center justify-between px-3 py-2 cursor-pointer border-l-2 transition-colors w-full text-left mb-1 border-transparent hover:bg-slate-700/40 hover:border-blue-400/60"
				onclick={() => {
					activeCompetition.set($activeCompetition === league.competition_name ? null : league.competition_name);
					sidebarOpen.set(false);
				}}
			>
				<div class="flex items-center gap-2">
					<Trophy size={16} strokeWidth={1.8} class="text-blue-400 w-4 h-4" />
					<div>
						<div class="text-sm text-slate-300">{league.competition_name}</div>
						<div class="text-xs text-slate-500">{league.country_name}</div>
					</div>
				</div>
				<div class="text-xs bg-slate-700 text-slate-300 rounded-full px-2 py-0.5">
					{league.match_count}
				</div>
			</button>
		{/each}
	</div>
</aside>

<!-- Desktop sidebar -->
<aside class="flex flex-col h-full overflow-y-scroll no-scrollbar bg-[#1E293B] border-r border-slate-700/50">
	<div class="flex flex-col gap-4 p-4">
		<SearchBar {onsearch} />
		<QuickActions />
		<div class="border-t border-slate-700/60"></div>
		<TopGames />
		<div class="border-t border-slate-700/60"></div>
		<TopLeagues />
	</div>
</aside>
