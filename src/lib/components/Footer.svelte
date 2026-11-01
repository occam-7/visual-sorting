<script lang="ts">
  import { trackEvent } from '../umami';

  const handleGitHubClick = () => {
    trackEvent('external-link', { destination: 'github-profile' });
  };
</script>

<footer class="footer items-center p-4 bg-base-200">
  <aside class="items-center grid-flow-col">
    <p class="text-xs lg:text-sm">
      由 <a
        class="link"
        href="https://github.com/mszula"
        target="_blank"
        on:click={handleGitHubClick}>mszula</a
      >
      用 ☕️ 与 ❤️ 打造（Svelte）。中文版 · <a class="link" href="https://mszula.github.io/visual-sorting/" target="_blank" rel="noopener">英文原版</a>
      <span class="text-xs opacity-30"
        >版本：{import.meta.env.VITE_GIT_COMMIT_REF}</span
      >
    </p>
  </aside>
</footer>
