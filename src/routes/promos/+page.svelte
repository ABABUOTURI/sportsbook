<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
</script>

<FeatureLanding
	title="Promotions"
	description="Promo landing page with sample offers and teaser rewards."
	cards={[
		{ subtitle: 'Welcome Bonus', title: 'First deposit boost', value: '+100%' },
		{ subtitle: 'Weekend Deal', title: 'Accumulator insurance', value: 'Up to $20' },
		{ subtitle: 'Cashback', title: 'Live bets cashback', value: '5%' }
	]}
/>
