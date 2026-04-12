<script lang="ts">
	const games = [
		{ name: 'Aviator', src: '/images/games/aviator.png' },
		{ name: 'JetX', src: '/images/games/jetx.png' },
		{ name: 'Navigator', src: '/images/games/navigator.png' }
	];

	let imageError = $state<Record<string, boolean>>({
		Aviator: false,
		JetX: false,
		Navigator: false
	});

	function handleImageError(name: string) {
		imageError = { ...imageError, [name]: true };
	}
</script>

<div>
	<div class="px-3 pt-3 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
		Top Games
	</div>
	<div class="space-y-2">
		{#each games as game}
			<button
				type="button"
				class="mx-3 mb-2 w-full overflow-hidden rounded-lg cursor-pointer relative group ring-0 transition group-hover:ring-1 group-hover:ring-orange-500/60 bg-slate-900"
			>
				{#if !imageError[game.name]}
					<img
						src={game.src}
						alt={game.name}
						class="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
						onerror={() => handleImageError(game.name)}
					/>
				{:else}
					<div class="flex h-full w-full items-center justify-center bg-slate-900 text-sm font-semibold text-slate-200">
						{game.name}
					</div>
				{/if}
				<div class="absolute inset-0 bg-orange-500/0 transition-colors duration-300 group-hover:bg-orange-500/10"></div>
			</button>
		{/each}
	</div>
</div>
