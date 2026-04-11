<script lang="ts">
	import { ClipboardList, MessageCircle, Sparkles, UserCircle, UserPlus } from '$lib/icons';
</script>

<div class="flex items-center justify-around px-2 py-3 border-b border-slate-700/50">
	<button type="button" class="flex flex-col items-center gap-1 cursor-pointer text-slate-400 transition-colors duration-150 hover:text-orange-400">
		<ClipboardList size={20} strokeWidth={1.8} class="w-5 h-5" />
		<span class="text-[10px] text-slate-400">My Bets</span>
	</button>

	<button type="button" class="flex flex-col items-center gap-1 cursor-pointer text-slate-400 transition-colors duration-150 hover:text-orange-400">
		<UserCircle size={20} strokeWidth={1.8} class="w-5 h-5" />
		<span class="text-[10px] text-slate-400">Profile</span>
	</button>

	<div class="w-px h-8 bg-slate-600"></div>

	<button type="button" class="flex flex-col items-center gap-1 cursor-pointer text-slate-400 transition-colors duration-150 hover:text-orange-400">
		<MessageCircle size={20} strokeWidth={1.8} class="w-5 h-5" />
		<span class="text-[10px] text-slate-400">Chat us</span>
	</button>

	<button type="button" class="flex flex-col items-center gap-1 cursor-pointer text-slate-400 transition-colors duration-150 hover:text-orange-400">
		<UserPlus size={20} strokeWidth={1.8} class="w-5 h-5" />
		<span class="text-[10px] text-slate-400">Affiliate</span>
	</button>

	<button type="button" class="flex flex-col items-center gap-1 cursor-pointer text-slate-400 transition-colors duration-150 hover:text-orange-400">
		<Sparkles size={20} strokeWidth={1.8} class="w-5 h-5" />
		<span class="text-[10px] text-slate-400">Promos</span>
	</button>
</div>
