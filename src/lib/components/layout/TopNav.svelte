<script lang="ts">
	import { activePage } from '$lib/stores/ui';

	const tabs = [
		{
			label: 'Home',
			icon: 'M3 9.5 12 3l9 6.5v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z'
		},
		{
			label: 'Live',
			icon: 'M7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-3 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0'
		},
		{
			label: 'Aviator',
			icon: 'M3 11l9-6 9 6-9 3z',
			accent: 'text-red-400'
		},
		{
			label: 'Crash',
			icon: 'M12 3l3 6-3 12-3-12z',
			accent: 'text-orange-400'
		},
		{
			label: 'League',
			icon: 'M6 4h12v4a6 6 0 0 1-12 0z',
			accent: 'text-blue-400'
		}
	] as const;

	const setActive = (label: (typeof tabs)[number]['label']) => {
		activePage.set(label);
	};
</script>

<nav class="h-16 w-full bg-[#0F172A] border-b border-orange-500/60">
	<div class="mx-auto flex h-full max-w-5xl items-center justify-center gap-3 px-4">
		{#each tabs as tab}
			<button
				type="button"
				on:click={() => setActive(tab.label)}
				class={`flex items-center gap-2 rounded-pill px-4 py-2 text-sm transition ${
					$activePage === tab.label
						? 'bg-orange-500 text-white font-semibold shadow-[0_0_12px_rgba(249,115,22,0.5)]'
						: 'border border-slate-600 text-slate-300 hover:border-orange-400 hover:text-orange-400'
				}`}
			>
				<svg
					class={`h-4 w-4 ${tab.accent ?? ''} ${
						$activePage === tab.label ? 'text-white' : ''
					}`}
					viewBox="0 0 24 24"
					fill="currentColor"
					aria-hidden="true"
				>
					<path d={tab.icon} />
				</svg>
				<span>{tab.label}</span>
			</button>
		{/each}
	</div>
</nav>
