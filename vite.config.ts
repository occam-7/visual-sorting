import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import * as child_process from 'node:child_process';

if (process.env.VITE_GIT_COMMIT_REF === undefined) {
  process.env.VITE_GIT_COMMIT_REF = child_process
    .execSync('git rev-parse --short HEAD')
    .toString();
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      manifest: {
        name: '排序可视化 · 看得见也听得见的排序算法',
        short_name: '排序可视化',
        description:
          '把各种排序算法的执行过程画成柱状图，并配上声音，边看边听。',
        lang: 'zh-CN',
        icons: [
          {
            src: '/visual-sorting/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/visual-sorting/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#000000',
      },
    }),
  ],
});
