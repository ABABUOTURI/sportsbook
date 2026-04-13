<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
	import { activePage } from '$lib/stores/ui';

	$effect(() => {
		activePage.set('aviator');
	});
</script>

<FeatureLanding
	title="Aviator"
	description="Aviator lounge landing page with dummy trend cards and quick insights."
	cards={[
		{ subtitle: 'Recent Rounds', title: 'Top multiplier', value: '12.8x' },
		{ subtitle: 'Crash Avg', title: 'Session average', value: '2.34x' },
		{ subtitle: 'Player Mood', title: 'Crowd signal', value: 'Bullish' }
	]}
/>
