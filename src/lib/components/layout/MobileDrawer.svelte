<script lang="ts">
  import { drawerOpen, activePage } from '$lib/stores/ui'
  import { activeCompetition, availableLeagues } from '$lib/stores/matches'
  import {
    Home, Tv, PlaneTakeoff, Flame, Trophy, X
  } from '$lib/icons'

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'live', label: 'Live', icon: Tv },
    { id: 'aviator', label: 'Aviator', icon: PlaneTakeoff },
    { id: 'crash', label: 'Crash', icon: Flame },
    { id: 'league', label: 'League', icon: Trophy }
  ]

  function close() { $drawerOpen = false }
  function goTo(id: string) { $activePage = id as any; close() }
</script>

<div
  class="fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300"
  class:opacity-100={$drawerOpen}
  class:opacity-0={!$drawerOpen}
  class:pointer-events-auto={$drawerOpen}
  class:pointer-events-none={!$drawerOpen}
  on:click={close}
  role="button"
  tabindex="-1"
/>

<div
  class="fixed top-0 left-0 h-full w-72 z-50 bg-[#1E293B] lg:hidden flex flex-col overflow-y-scroll no-scrollbar border-r border-slate-700/50 transition-transform duration-300 ease-out"
  class:translate-x-0={$drawerOpen}
  class:-translate-x-full={!$drawerOpen}
>
  <div class="flex items-center justify-between px-4 py-3 flex-shrink-0 border-b border-slate-700/50">
    <span class="text-sm font-semibold text-white">Menu</span>
    <button on:click={close}>
      <X size={18} class="text-slate-400 hover:text-orange-400 cursor-pointer transition-colors" />
    </button>
  </div>

  <div class="px-3 py-3 border-b border-slate-700/50">
    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-1 mb-2">Navigation</p>
    {#each navItems as item}
      <button
        on:click={() => goTo(item.id)}
        class="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-all mb-1 text-left border-l-2 {$activePage === item.id ? 'bg-orange-500/15 text-orange-400 border-orange-500' : 'text-slate-300 border-transparent hover:bg-slate-700/40 hover:text-white'}"
      >
        <svelte:component
          this={item.icon}
          size={18}
          strokeWidth={1.8}
          class={$activePage === item.id ? 'text-orange-400' : 'text-slate-400'}
        />
        <span class="text-sm font-medium">{item.label}</span>
      </button>
    {/each}
  </div>

  <div class="px-3 py-3">
    <p class="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-1 mb-2">Top Leagues</p>
    {#each $availableLeagues as league}
      <button
        on:click={() => {
          $activeCompetition = $activeCompetition === league.competition_name ? null : league.competition_name
          close()
        }}
        class="flex items-center justify-between w-full px-2 py-2 rounded-lg cursor-pointer transition-all mb-1 border-l-2 {$activeCompetition === league.competition_name ? 'border-orange-500 bg-orange-500/10' : 'border-transparent hover:bg-slate-700/40'}"
      >
        <div class="flex items-center gap-2">
          <span style="font-size:14px">⚽</span>
          <div class="text-left">
            <p class="text-xs font-medium {$activeCompetition === league.competition_name ? 'text-orange-400' : 'text-slate-300'}">
              {league.competition_name}
            </p>
            <p class="text-[10px] text-slate-500">
              {league.country_name}
            </p>
          </div>
        </div>
        <span class="text-[10px] bg-slate-700 text-slate-300 rounded-full px-2 py-0.5">
          {league.match_count}
        </span>
      </button>
    {/each}
  </div>
</div>
