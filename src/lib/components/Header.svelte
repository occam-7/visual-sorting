<script lang="ts">
  import HeaderSoundControl from './HeaderSoundControl.svelte';
  import { type OscillatorType } from '../sound';
  import HeaderThemeControl from './HeaderThemeControl.svelte';
  import { base } from '$app/paths';
  import HeaderGitHubButton from './HeaderGitHubButton.svelte';
  import HeaderCoffeeButton from './HeaderCoffeeButton.svelte';
  import HeaderHelpButton from './HeaderHelpButton.svelte';
  import HeaderCompareButton from './HeaderCompareButton.svelte';
  import HeaderStats from './HeaderStats.svelte';
  import MobileHeaderButtons from './mobile/MobileHeaderButtons.svelte';
  import type { SortStats } from '../types';

  export let selectedTheme: string;
  export let oscillatorType: OscillatorType;
  export let openHelp: () => void;
  export let panels: { stats: SortStats; label?: string }[];
  export let compareMode: boolean;
  export let toggleCompareMode: () => void;
</script>

<div class="navbar bg-base-100 relative">
  <div class="flex-1 min-w-0">
    <a class="btn btn-ghost px-2 md:px-4" href="{base}/">
      <span class="text-lg md:text-xl truncate">
        排序可视化
        <span class="hidden sm:inline text-sm">又名「排序之声」</span>
      </span>
    </a>
  </div>

  <HeaderStats {panels} />

  <div class="hidden md:flex flex-none items-center gap-1">
    <span class="w-px h-6 bg-base-content/10 mx-1" aria-hidden="true" />
    <div class="tooltip tooltip-bottom" data-tip="声音">
      <HeaderSoundControl bind:oscillatorType />
    </div>
    <div class="tooltip tooltip-bottom" data-tip="主题">
      <HeaderThemeControl bind:selectedTheme />
    </div>
    <span class="w-px h-6 bg-base-content/10 mx-1" aria-hidden="true" />
    <div
      class="tooltip tooltip-bottom"
      data-tip={compareMode ? '关闭对比' : '对比两种算法'}
    >
      <HeaderCompareButton {compareMode} {toggleCompareMode} />
    </div>
    <div class="tooltip tooltip-bottom" data-tip="键盘快捷键（?）">
      <HeaderHelpButton onClick={openHelp} />
    </div>
    <span class="w-px h-6 bg-base-content/10 mx-1" aria-hidden="true" />
    <div class="tooltip tooltip-bottom" data-tip="GitHub">
      <HeaderGitHubButton />
    </div>
    <div class="tooltip tooltip-bottom" data-tip="请作者喝杯咖啡">
      <HeaderCoffeeButton />
    </div>
  </div>

  <MobileHeaderButtons
    bind:oscillatorType
    bind:selectedTheme
    {openHelp}
    {compareMode}
    {toggleCompareMode}
  />
</div>
