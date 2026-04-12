<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { base } from '$app/paths';

	const banners = [
		{
			title: 'Sports Welcome Bonus',
			subtitle: '100% up to £50 on first deposit',
			image: `${base}/images/banners/banner-welcome.png`,
			cta: 'Claim Now',
			ctaStyle: 'orange'
		},
		{
			title: 'Early Payout',
			subtitle: 'On a 2-goal or 20-point lead',
			image: `${base}/images/banners/banner-earlypayout.png`,
			cta: 'Learn More',
			ctaStyle: 'blue'
		},
		{
			title: 'Sports Welcome Bonus',
			subtitle: '100% up to £50 on first deposit',
			image: `${base}/images/banners/banner-welcome2.png`,
			cta: 'Claim Now',
			ctaStyle: 'orange'
		}
	];

	let currentSlide = 0;
	let interval: ReturnType<typeof setInterval> | undefined;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % banners.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + banners.length) % banners.length;
	}

	function goToSlide(index: number) {
		currentSlide = index;
	}

	onMount(() => {
		interval = setInterval(nextSlide, 4000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div class="relative overflow-hidden rounded-xl mx-0 h-36 w-full bg-slate-900">
	<div
		class="flex h-full transition-transform duration-500 ease-in-out"
		style="transform: translateX(-{currentSlide * 100}%)"
	>
		{#each banners as banner, index}
			<div class="min-w-full h-full relative overflow-hidden rounded-xl">
				<img
					src={banner.image}
					alt={banner.title}
					class="absolute inset-0 w-full h-full object-cover"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
				<div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
					<h2 class="font-bold text-lg">{banner.title}</h2>
					<p class="text-slate-200 text-sm mt-1">{banner.subtitle}</p>
					<button
						class="text-xs px-3 py-1.5 rounded-full mt-2 font-semibold {banner.ctaStyle === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-500 hover:bg-blue-600'} text-white"
					>
						{banner.cta}
					</button>
				</div>
			</div>
		{/each}
	</div>

	<!-- Navigation dots -->
	<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
		{#each banners as _, index}
			<button
				aria-label="Go to slide {index + 1}"
				aria-current={currentSlide === index}
				onclick={() => goToSlide(index)}
				class="w-2 h-2 rounded-full transition-all duration-300 {currentSlide === index ? 'bg-orange-500 w-4' : 'bg-slate-500'}"
			></button>
		{/each}
	</div>

	<!-- Prev/Next arrows -->
	<button
		aria-label="Previous slide"
		onclick={prevSlide}
		class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-orange-500/80 text-white rounded-full p-1.5 transition hidden md:block"
	>
		<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
		</svg>
	</button>
	<button
		aria-label="Next slide"
		onclick={nextSlide}
		class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-orange-500/80 text-white rounded-full p-1.5 transition hidden md:block"
	>
		<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
		</svg>
	</button>
</div>
