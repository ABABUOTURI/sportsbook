<script lang="ts">
  import { mobileBetslipOpen, activeBetslipTab } from '$lib/stores/ui'
  import { betslipState } from '$lib/stores/betslip'
  import BetslipTab from '$lib/components/betslip/BetslipTab.svelte'
  import JengaBetsTab from '$lib/components/betslip/JengaBetsTab.svelte'
  import { X } from '$lib/icons'
</script>

<div
  class="fixed inset-0 bg-black/70 z-40 hidden max-[456px]:block transition-opacity duration-300"
  class:opacity-100={$mobileBetslipOpen}
  class:opacity-0={!$mobileBetslipOpen}
  class:pointer-events-auto={$mobileBetslipOpen}
  class:pointer-events-none={!$mobileBetslipOpen}
  on:click={() => $mobileBetslipOpen = false}
  role="button"
  tabindex="-1"
/>

<div
  class="fixed bottom-0 left-0 right-0 z-50 hidden max-[456px]:flex bg-[#1E293B] rounded-t-2xl flex-col transition-transform duration-300 ease-out"
  style="max-height: 85vh"
  class:translate-y-0={$mobileBetslipOpen}
  class:translate-y-full={!$mobileBetslipOpen}
>
  <div class="flex justify-center pt-3 pb-1 flex-shrink-0">
    <div class="w-10 h-1 rounded-full bg-slate-600" />
  </div>

  <div class="flex items-center justify-between px-4 pb-3 border-b border-slate-700 flex-shrink-0">
    <div class="flex items-center gap-2">
      <span class="text-white font-bold text-base">
        Betslip
      </span>
      {#if $betslipState.selections.length > 0}
        <span class="bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
          {$betslipState.selections.length}
        </span>
      {/if}
    </div>
    <button on:click={() => $mobileBetslipOpen = false}>
      <X size={20} class="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" />
    </button>
  </div>

  <div class="flex w-full border-b border-slate-700 flex-shrink-0">
    <button
      on:click={() => $activeBetslipTab = 'betslip'}
      class="flex-1 py-3 text-sm font-medium transition-all border-b-2 {$activeBetslipTab === 'betslip' ? 'bg-[#0F172A] text-white border-orange-500' : 'bg-[#1E293B] text-slate-400 border-transparent hover:text-white'}"
    >
      Betslip ({$betslipState.selections.length})
    </button>
    <button
      on:click={() => $activeBetslipTab = 'jenga'}
      class="flex-1 py-3 text-sm font-medium transition-all border-b-2 {$activeBetslipTab === 'jenga' ? 'bg-[#0F172A] text-white border-orange-500' : 'bg-[#1E293B] text-slate-400 border-transparent hover:text-white'}"
    >
      Jenga bets (0)
    </button>
  </div>

  <div class="flex-1 overflow-y-scroll no-scrollbar">
    {#if $activeBetslipTab === 'betslip'}
      <BetslipTab />
    {:else}
      <JengaBetsTab />
    {/if}
  </div>
</div>
