<script lang="ts">
  import { goto } from '$app/navigation'
  import {
    ClipboardList, UserCircle, MessageCircle,
    UserPlus, Sparkles
  } from '$lib/icons'
  import { mobileBetslipOpen } from '$lib/stores/ui'
  import { showToast } from '$lib/stores/feedback'

  const items = [
    { label: 'My Bets', icon: ClipboardList },
    { label: 'Profile', icon: UserCircle },
    { label: 'Chat us', icon: MessageCircle },
    { label: 'Affiliate', icon: UserPlus },
    { label: 'Promos', icon: Sparkles }
  ]

  function open(label: string) {
    if (label === 'My Bets') {
      $mobileBetslipOpen = true
      return
    }
    if (label === 'Profile') return goto('/profile')
    if (label === 'Promos') return goto('/promos')
    showToast(`${label} coming soon`)
  }
</script>

<nav class="fixed bottom-0 left-0 right-0 z-30 h-16 bg-[#1E293B] border-t border-slate-700/50 hidden max-[456px]:flex items-center justify-around px-2">
  {#each items as item}
    <button
      type="button"
      onclick={() => open(item.label)}
      class="flex flex-col items-center justify-center gap-0.5 flex-1 h-full cursor-pointer text-slate-400 hover:text-orange-400 transition-colors duration-150 group bg-transparent border-none"
    >
      <svelte:component
        this={item.icon}
        size={20}
        strokeWidth={1.8}
        class="group-hover:text-orange-400 transition-colors"
      />
      <span class="text-[9px] text-slate-500 group-hover:text-orange-400 transition-colors leading-none">
        {item.label}
      </span>
    </button>
  {/each}
</nav>
