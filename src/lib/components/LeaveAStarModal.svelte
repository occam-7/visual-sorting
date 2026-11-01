<script lang="ts">
  import { onMount } from 'svelte';
  import { running } from '../../states';
  import { trackEvent } from '../umami';

  let ref: HTMLDialogElement;
  let timedOut = false;
  let showed = false;

  onMount(() => {
    if (localStorage.getItem('leaved-a-star')) {
      return;
    }

    setTimeout(() => {
      timedOut = true;
    }, 60 * 1000);
  });

  $: if (!$running && timedOut && !showed) {
    ref.showModal();
    showed = true;
    trackEvent('modal-shown', { modal: 'github-star' });
  }

  const click = () => {
    localStorage.setItem('leaved-a-star', 'yup');
    ref.close();
    trackEvent('modal-action-github', { action: 'star-clicked' });
  };

  const dismiss = () => {
    trackEvent('modal-action-github', { action: 'maybe-later' });
  };
</script>

<dialog
  id="leave_a_star"
  class="modal modal-bottom sm:modal-middle"
  {...$$restProps}
  bind:this={ref}
>
  <div class="modal-box">
    <h3 class="text-lg font-bold">
      ⭐️ 点个 Star，支持这个项目！
    </h3>
    <p class="py-4">
      如果这个项目对你有帮助或让你觉得有意思，不妨去 GitHub 点一个 Star。
      你的反馈是我们继续改进的动力！
    </p>
    <div class="modal-action">
      <a
        href="https://github.com/mszula/visual-sorting"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-primary"
        on:click={click}
      >
        ⭐️ 去 GitHub 点 Star
      </a>
      <form method="dialog">
        <button class="btn" on:click={dismiss}>以后再说</button>
      </form>
    </div>
  </div>
</dialog>
