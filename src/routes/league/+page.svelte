<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
	import { activePage } from '$lib/stores/ui';

	$effect(() => {
		activePage.set('league');
	});
</script>

<FeatureLanding
	title="League Center"
	description="League overview placeholder with sample standings and fixture insights."
	cards={[
		{ subtitle: 'Top League', title: 'Premier League', value: '20 teams' },
		{ subtitle: 'Featured Fixture', title: 'Arsenal vs Chelsea', value: 'Today 20:00' },
		{ subtitle: 'Status', title: 'Data source', value: 'Demo' }
	]}
/>
