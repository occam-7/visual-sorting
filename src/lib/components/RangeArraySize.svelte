<script lang="ts">
  export let size: number;

  import { running } from '../../states';
</script>

<label class="form-control w-full mb-2">
  <div class="label">
    <span class="label-text">数组大小</span>
    <span class="label-text-alt">{size} 根柱子</span>
  </div>
  <input
    id="size"
    name="size"
    class="range range-sm range-primary"
    disabled={$running}
    max="1024"
    min="2"
    type="range"
    bind:value={size}
  />
</label>
