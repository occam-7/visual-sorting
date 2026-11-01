<script lang="ts">
  import type { SortStats } from '../types';

  export let panels: { stats: SortStats; label?: string }[];

  const fmt = (n: number) => n.toLocaleString();
</script>

<div
  class="hidden md:flex items-stretch gap-3 lg:gap-4 text-xs font-mono px-2"
  aria-live="polite"
>
  {#each panels as p, i}
    {#if i > 0}<span class="self-stretch w-px bg-base-content/10" />{/if}
    <div class="flex flex-col items-end gap-0.5 leading-tight">
      {#if p.label}
        <span
          class="text-[0.6rem] uppercase tracking-wider opacity-60 truncate max-w-[7rem]"
          title={p.label}>{p.label}</span
        >
      {/if}
      <div class="flex items-center gap-2 lg:gap-3">
        <div
          class="tooltip tooltip-bottom flex flex-col items-end leading-tight"
          data-tip="比较 —— 元素之间发生的比较次数"
        >
          <span class="opacity-50 text-[0.55rem] uppercase tracking-wider"
            >比较</span
          >
          <span class="tabular-nums">{fmt(p.stats.comparisons)}</span>
        </div>
        <div
          class="tooltip tooltip-bottom flex flex-col items-end leading-tight"
          data-tip="交换 —— 完整发生的元素交换次数"
        >
          <span class="opacity-50 text-[0.55rem] uppercase tracking-wider"
            >交换</span
          >
          <span class="tabular-nums">{fmt(p.stats.swaps)}</span>
        </div>
        <div
          class="tooltip tooltip-bottom flex flex-col items-end leading-tight"
          data-tip="访问 —— 对数组的读写总次数"
        >
          <span class="opacity-50 text-[0.55rem] uppercase tracking-wider"
            >访问</span
          >
          <span class="tabular-nums">{fmt(p.stats.accesses)}</span>
        </div>
      </div>
    </div>
  {/each}
</div>
