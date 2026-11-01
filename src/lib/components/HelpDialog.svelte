<script lang="ts">
  let ref: HTMLDialogElement;

  export const open = () => ref?.showModal();
  export const close = () => ref?.close();

  const shortcuts: { keys: string[]; label: string }[] = [
    { keys: ['Space'], label: '开始 / 停止' },
    { keys: ['→'], label: '单步执行' },
    { keys: ['R'], label: '重新打乱' },
    { keys: ['↑', '↓'], label: '加快 / 减慢' },
    { keys: ['[', ']'], label: '上一个 / 下一个算法' },
    { keys: ['M'], label: '静音 / 取消静音' },
    { keys: ['?'], label: '显示本帮助' },
  ];
</script>

<dialog bind:this={ref} class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold mb-4">键盘快捷键</h3>
    <table class="table table-sm">
      <tbody>
        {#each shortcuts as { keys, label }}
          <tr>
            <td class="whitespace-nowrap">
              {#each keys as k, i}
                {#if i > 0}<span class="opacity-50 mx-1">/</span>{/if}
                <kbd class="kbd kbd-sm">{k}</kbd>
              {/each}
            </td>
            <td>{label}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <p class="text-xs opacity-60 mt-3">
      在输入框里打字时，快捷键会自动失效。
    </p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">关闭</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>关闭</button>
  </form>
</dialog>
