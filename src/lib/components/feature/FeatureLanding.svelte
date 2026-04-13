<script lang="ts">
	import TopNav from '$lib/components/layout/TopNav.svelte';
	import MobileDrawer from '$lib/components/layout/MobileDrawer.svelte';
	import MobileBottomNav from '$lib/components/layout/MobileBottomNav.svelte';
	import MobileBetslipSheet from '$lib/components/layout/MobileBetslipSheet.svelte';

	type DummyCard = { title: string; subtitle: string; value: string };

	let {
		title,
		description,
		cards
	}: {
		title: string;
		description: string;
		cards: DummyCard[];
	} = $props();
</script>

<div class="w-full min-h-screen bg-[#0F172A] text-slate-100 flex flex-col">
	<div class="flex-shrink-0">
		<TopNav />
	</div>

	<div class="flex-1 overflow-y-auto no-scrollbar px-4 py-6 max-[456px]:pb-24">
		<div class="max-w-4xl mx-auto space-y-5">
			<div class="rounded-xl bg-[#1E293B] p-5">
				<h1 class="text-2xl font-bold text-orange-400">{title}</h1>
				<p class="mt-2 text-sm text-slate-300">{description}</p>
				<a href="/" class="inline-flex mt-4 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
					Back to Home
				</a>
			</div>

			<div class="grid gap-3 md:grid-cols-3">
				{#each cards as card}
					<div class="rounded-xl bg-[#1E293B] p-4">
						<p class="text-[11px] uppercase tracking-wide text-slate-500">{card.subtitle}</p>
						<p class="mt-2 text-base font-semibold text-white">{card.title}</p>
						<p class="mt-3 text-lg font-bold text-blue-300">{card.value}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<MobileDrawer />
<MobileBottomNav />
<MobileBetslipSheet />
