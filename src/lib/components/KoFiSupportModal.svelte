<script lang="ts">
  import { onMount } from 'svelte';
  import { running } from '../../states';
  import { trackEvent } from '../umami';

  let ref: HTMLDialogElement;
  let timedOut = false;
  let showed = false;

  onMount(() => {
    if (localStorage.getItem('kofi-support-shown')) {
      return;
    }

    setTimeout(() => {
      timedOut = true;
    }, 5 * 60 * 1000);
  });

  $: if (!$running && timedOut && !showed) {
    ref.showModal();
    showed = true;
    trackEvent('modal-shown', { modal: 'kofi-support' });
  }

  const handleClick = () => {
    localStorage.setItem('kofi-support-shown', 'true');
    ref.close();
    trackEvent('modal-action-kofi', { action: 'kofi-clicked' });
  };

  const handleDismiss = () => {
    localStorage.setItem('kofi-support-shown', 'true');
    ref.close();
    trackEvent('modal-action-kofi', { action: 'maybe-later' });
  };
</script>

<dialog
  id="kofi_support"
  class="modal modal-bottom sm:modal-middle"
  {...$$restProps}
  bind:this={ref}
>
  <div class="modal-box">
    <h3 class="text-lg font-bold">
      ☕ 谢谢你来！
    </h3>
    <p class="py-4">
      你好，我是 Mateusz。我喜欢做那种既能学到东西、看着又赏心悦目的交互项目。
      如果「排序可视化」让你感到愉快，也希望看到更多类似的作品，欢迎在 Ko-Fi 上支持我。
    </p>
    <p class="text-sm opacity-70 pb-2">
      你的支持让我能投入更多时间做这类工具、分享给社区。每一杯咖啡都实实在在有用！🚀
    </p>
    <div class="modal-action">
      <a
        href="https://ko-fi.com/mszula"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary"
        on:click={handleClick}
      >
        ☕ 请我喝杯咖啡
      </a>
      <form method="dialog">
        <button class="btn" on:click={handleDismiss}>以后再说</button>
      </form>
    </div>
  </div>
</dialog>
