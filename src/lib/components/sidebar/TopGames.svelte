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
				class="mx-3 mb-2 w-[calc(100%-1.5rem)] rounded-lg overflow-hidden cursor-pointer relative group ring-0 group-hover:ring-1 group-hover:ring-orange-500/60 bg-[#0F172A]"
			>
				{#if !imageError[game.name]}
					<img
						src={game.src}
						alt={game.name}
						class="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
						onerror={() => handleImageError(game.name)}
					/>
				{:else}
					<div class="w-full h-14 flex items-center justify-center bg-[#0F172A] text-sm font-semibold text-slate-200">
						{game.name}
					</div>
				{/if}
				<div class="absolute inset-0 bg-orange-500/0 transition-colors duration-300 group-hover:bg-orange-500/10"></div>
			</button>
		{/each}
	</div>
</div>
