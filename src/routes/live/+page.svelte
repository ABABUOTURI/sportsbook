<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
	import { activePage } from '$lib/stores/ui';

	$effect(() => {
		activePage.set('live');
	});
</script>

<FeatureLanding
	title="Live Matches"
	description="Live center preview with dummy in-play insights and momentum snapshots."
	cards={[
		{ subtitle: "Now Playing", title: "Atletico Madrid vs FC Barcelona", value: "63'" },
		{ subtitle: "Goal Threat", title: "Shots on target", value: '7 : 5' },
		{ subtitle: "Market Pulse", title: "Odds update speed", value: 'Fast' }
	]}
/>
