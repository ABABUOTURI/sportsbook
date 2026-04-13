<script lang="ts">
	import { goto } from '$app/navigation';
	import { ClipboardList, MessageCircle, Sparkles, UserCircle, UserPlus } from '$lib/icons';
	import { showToast } from '$lib/stores/feedback';

	function open(label: string) {
		if (label === 'My Bets') return goto('/my-bets');
		if (label === 'Profile') return goto('/profile');
		if (label === 'Promos') return goto('/promos');
		showToast(`${label} coming soon`);
	}
</script>

<div class="flex items-center justify-around px-2 py-3 border-b border-slate-700/50">
	<button type="button" onclick={() => open('My Bets')} class="group flex flex-col items-center gap-1 cursor-pointer transition-colors duration-150">
		<ClipboardList size={20} strokeWidth={1.8} class="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-150" />
		<span class="text-[10px] text-slate-400 group-hover:text-orange-400 transition-colors duration-150">My Bets</span>
	</button>

	<button type="button" onclick={() => open('Profile')} class="group flex flex-col items-center gap-1 cursor-pointer transition-colors duration-150">
		<UserCircle size={20} strokeWidth={1.8} class="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-150" />
		<span class="text-[10px] text-slate-400 group-hover:text-orange-400 transition-colors duration-150">Profile</span>
	</button>

	<div class="w-px h-8 bg-slate-600"></div>

	<button type="button" onclick={() => open('Chat us')} class="group flex flex-col items-center gap-1 cursor-pointer transition-colors duration-150">
		<MessageCircle size={20} strokeWidth={1.8} class="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-150" />
		<span class="text-[10px] text-slate-400 group-hover:text-orange-400 transition-colors duration-150">Chat us</span>
	</button>

	<button type="button" onclick={() => open('Affiliate')} class="group flex flex-col items-center gap-1 cursor-pointer transition-colors duration-150">
		<UserPlus size={20} strokeWidth={1.8} class="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-150" />
		<span class="text-[10px] text-slate-400 group-hover:text-orange-400 transition-colors duration-150">Affiliate</span>
	</button>

	<button type="button" onclick={() => open('Promos')} class="group flex flex-col items-center gap-1 cursor-pointer transition-colors duration-150">
		<Sparkles size={20} strokeWidth={1.8} class="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-150" />
		<span class="text-[10px] text-slate-400 group-hover:text-orange-400 transition-colors duration-150">Promos</span>
	</button>
</div>
