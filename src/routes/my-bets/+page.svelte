<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
</script>

<FeatureLanding
	title="My Bets"
	description="My Bets preview page with dummy history and pending bet snapshots."
	cards={[
		{ subtitle: 'Open Bets', title: 'Pending slips', value: '2' },
		{ subtitle: 'Settled Today', title: 'Closed slips', value: '6' },
		{ subtitle: 'Win Rate', title: 'Last 7 days', value: '58%' }
	]}
/>
