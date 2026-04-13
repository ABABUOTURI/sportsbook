<script lang="ts">
	import FeatureLanding from '$lib/components/feature/FeatureLanding.svelte';
</script>

<FeatureLanding
	title="Profile"
	description="Profile landing placeholder for account details and settings preview."
	cards={[
		{ subtitle: 'Account', title: 'Display name', value: 'Demo User' },
		{ subtitle: 'Wallet', title: 'Balance', value: '$250.00' },
		{ subtitle: 'Tier', title: 'Loyalty', value: 'Silver' }
	]}
/>
