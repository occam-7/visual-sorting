<script lang="ts">
  import { onMount } from 'svelte';
  import { trackEvent } from '../umami';

  // Bump this key when shipping a new batch of features to surface the modal
  // again to returning visitors.
  const VERSION_KEY = 'whats-new-2026-05';

  let ref: HTMLDialogElement;

  onMount(() => {
    if (localStorage.getItem(VERSION_KEY)) return;
    // Small delay so the rest of the UI is rendered first.
    setTimeout(() => {
      ref?.showModal();
      trackEvent('modal-shown', { modal: 'whats-new', version: VERSION_KEY });
    }, 800);
  });

  const dismiss = (action: 'gotIt' | 'backdrop') => {
    localStorage.setItem(VERSION_KEY, '1');
    trackEvent('modal-action-whats-new', { action });
    ref?.close();
  };
</script>

<dialog
  bind:this={ref}
  class="modal modal-bottom sm:modal-middle"
  on:close={() => localStorage.setItem(VERSION_KEY, '1')}
>
  <div class="modal-box max-w-lg">
    <h3 class="text-lg font-bold mb-1">✨ 新功能</h3>
    <p class="text-sm opacity-70 mb-4">
      一批新功能上线了，重点如下：
    </p>
    <ul class="space-y-3">
      <li>
        <div class="font-semibold">对比两种算法</div>
        <div class="text-sm opacity-70">
          点开顶栏的对比按钮，让两种算法在同一份数组上比赛，可左右并排或上下堆叠。
        </div>
      </li>
      <li>
        <div class="font-semibold">实时指标</div>
        <div class="text-sm opacity-70">
          顶栏实时显示比较、交换与数组访问次数——还能看出非比较类排序的
          <kbd class="kbd kbd-xs">比较</kbd> 一直是 0。
        </div>
      </li>
      <li>
        <div class="font-semibold">键盘快捷键</div>
        <div class="text-sm opacity-70">
          <kbd class="kbd kbd-xs">空格</kbd> 开始/停止，
          <kbd class="kbd kbd-xs">→</kbd> 单步，
          <kbd class="kbd kbd-xs">R</kbd> 打乱，还能调速度、切换算法。
          按 <kbd class="kbd kbd-xs">?</kbd> 查看完整列表。
        </div>
      </li>
      <li>
        <div class="font-semibold">新的数组模式</div>
        <div class="text-sm opacity-70">
          <strong>波浪</strong>、<strong>接近有序</strong>和
          <strong>管风琴</strong>三种新模式，加到了「打乱」旁边的模式选择里。
        </div>
      </li>
      <li>
        <div class="font-semibold">偏好会被记住</div>
        <div class="text-sm opacity-70">
          数组大小、延迟、声音与所选模式，下次打开还在。
        </div>
      </li>
    </ul>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn btn-primary" on:click={() => dismiss('gotIt')}
          >知道了</button
        >
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button on:click={() => dismiss('backdrop')}>关闭</button>
  </form>
</dialog>
