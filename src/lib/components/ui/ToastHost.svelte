<script lang="ts">
	import { toasts } from '$lib/stores/feedback';
</script>

<div class="fixed top-3 right-3 z-[100] flex flex-col gap-2 pointer-events-none">
	{#each $toasts as toast (toast.id)}
		<div
			class="min-w-[220px] max-w-[320px] rounded-lg border px-3 py-2 text-sm shadow-lg backdrop-blur-sm bg-[#1E293B]/95 text-slate-100 border-slate-600"
		>
			{toast.message}
		</div>
	{/each}
</div>
