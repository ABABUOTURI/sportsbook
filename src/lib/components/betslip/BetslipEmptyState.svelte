<script lang="ts"></script>

<div class="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
	<div class="relative flex items-center justify-center rounded-full p-4 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-orange-500/10 before:blur-xl">
		<svg
			viewBox="0 0 64 64"
			aria-hidden="true"
			class="w-20 h-20 stroke-slate-600 fill-none"
		>
			<path d="M12 18h40v28H12z" stroke-width="2" />
			<path d="M12 18c-2 0-4 2-4 4v10c0 2 2 4 4 4" stroke-width="2" />
			<path d="M52 18c2 0 4 2 4 4v10c0 2-2 4-4 4" stroke-width="2" />
			<path d="M18 14v4" stroke-width="2" stroke-linecap="round" />
			<path d="M46 14v4" stroke-width="2" stroke-linecap="round" />
			<path d="M18 46v4" stroke-width="2" stroke-linecap="round" />
			<path d="M46 46v4" stroke-width="2" stroke-linecap="round" />
			<path d="M20 26h24" stroke-width="2" stroke-linecap="round" />
			<path d="M20 34h24" stroke-width="2" stroke-linecap="round" />
		</svg>
	</div>

	<p class="text-base font-semibold text-slate-400">No bets selected</p>
	<p class="text-xs text-slate-500 leading-relaxed">Click any odds button to add a selection to your betslip</p>

	<div class="flex flex-col items-center gap-2">
		<div class="flex items-center justify-center gap-2">
			<span class="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-[#0F172A] text-xs text-slate-500">1</span>
			<span class="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-[#0F172A] text-xs text-slate-500">X</span>
			<span class="flex h-8 w-8 items-center justify-center rounded border border-slate-700 bg-[#0F172A] text-xs text-slate-500">2</span>
		</div>
		<p class="text-[10px] text-slate-600">Select an outcome above</p>
	</div>
</div>
