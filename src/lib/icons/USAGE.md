# Icon Usage

## Pattern 1 — Direct import (preferred for single icons)
```svelte
<script lang="ts">
  import { Home } from '$lib/icons'
</script>

<Home size={18} strokeWidth={1.8} class="text-orange-400" />
```

## Pattern 2 — Icon wrapper component
```svelte
<script lang="ts">
  import Icon from '$lib/components/ui/Icon.svelte'
  import { Home } from '$lib/icons'
</script>

<Icon icon={Home} size={18} class="text-orange-400" />
```

## Pattern 3 — Dynamic icon from IconMap
```svelte
<script lang="ts">
  import { IconMap } from '$lib/icons'
  export let iconName: IconName
</script>

<svelte:component this={IconMap[iconName]} size={18} />
```

## Sizing Standards
- TopNav tab icons: `size={18}` `strokeWidth={1.8}`
- Sidebar action icons: `size={20}` `strokeWidth={1.8}`
- Match section icons: `size={16}` `strokeWidth={2}`
- Betslip icons: `size={16}` `strokeWidth={2}`
- Search icon: `size={16}` `strokeWidth={1.8}`
- Button icons: `size={14}` `strokeWidth={2}`

## Color Standards (Tailwind classes)
- Active / highlighted: `class="text-orange-400"`
- Interactive / hover: `class="text-blue-400"`
- Default / inactive: `class="text-slate-400"`
- White on dark bg: `class="text-white"`
- Muted / disabled: `class="text-slate-600"`
- Danger / remove: `class="text-red-400"`
