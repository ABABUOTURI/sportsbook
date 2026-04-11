<script lang="ts">
	import { List, MessageCircle, Flame, UserCircle, Users } from '$lib/icons';

	const quickActions = [
		{ label: 'My Bets', icon: List },
		{ label: 'Profile', icon: UserCircle },
		{ label: 'Chat us', icon: MessageCircle },
		{ label: 'Join Affiliate', icon: Users },
		{ label: 'Promos', icon: Flame }
	];
</script>

<div class="rounded-card border border-border/60 bg-surface/40 p-3">
	<div class="mb-3 text-xs font-semibold uppercase tracking-wide text-orange-400">
		Quick Actions
	</div>
	<div class="grid grid-cols-5 gap-2">
		{#each quickActions as action}
			<button
				type="button"
				class="flex flex-col items-center justify-center gap-2 rounded-[18px] bg-[#0F172A] px-2 py-3 text-[8px] font-semibold uppercase tracking-[0.08em] text-white transition hover:text-orange-300"
			>
				<svelte:component this={action.icon} size={18} strokeWidth={1.8} class="text-slate-400" />
				<span>{action.label}</span>
			</button>
		{/each}
	</div>
</div>
