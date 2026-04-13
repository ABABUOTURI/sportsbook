<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
	import { activePage } from '$lib/stores/ui';

	$effect(() => {
		activePage.set('crash');
	});
</script>

<FeatureLanding
	title="Crash"
	description="Crash mode mock page showing sample rounds and quick stats."
	cards={[
		{ subtitle: 'Round Feed', title: 'Last round', value: '1.92x' },
		{ subtitle: 'Hot Streak', title: 'Best streak', value: '5 rounds' },
		{ subtitle: 'Risk Level', title: 'Current mode', value: 'Moderate' }
	]}
/>
