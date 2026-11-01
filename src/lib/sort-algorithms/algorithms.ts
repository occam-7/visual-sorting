import RangeArraySizePowerOfTwo from '../components/RangeArraySizePowerOfTwo.svelte';
import { bitonicSort } from './bitonic-sort';
import { bogoSort } from './bogo-sort';
import { bubbleSort } from './bubble-sort';
import { cocktailSort } from './cocktail-sort';
import { combSort } from './comb-sort';
import { countingSort } from './counting-sort';
import { cycleSort } from './cycle-sort';
import { exchangeSort } from './exchange-sort';
import { gnomeSort } from './gnome-sort';
import { heapSort } from './heap-sort';
import { insertionSort } from './insertion-sort';
import { introSort } from './intro-sort';
import { mergeSort } from './merge-sort';
import { oddEvenSort } from './odd-even-sort';
import { pancakeSort } from './pancake-sort';
import { quickSort } from './quick-sort';
import { radixSort } from './radix-sort';
import { radixSortMSD } from './radix-sort-msd';
import { selectionSort } from './selection-sort';
import { shellSort } from './shell-sort';
import { stoogeSort } from './stooge-sort';
import { timSort } from './tim-sort';
import type { AlgorithmDefinition } from './types';

export const algorithms: AlgorithmDefinition[][] = [
  [
    {
      name: '冒泡排序',
      function: bubbleSort,
    },
    {
      name: '快速排序',
      function: quickSort,
    },
    {
      name: '希尔排序',
      function: shellSort,
    },
    {
      name: '归并排序',
      function: mergeSort,
    },
    {
      name: '插入排序',
      function: insertionSort,
    },
    {
      name: '选择排序',
      function: selectionSort,
    },
    {
      name: '基数排序 LSD',
      function: radixSort,
    },
    {
      name: '基数排序 MSD',
      function: radixSortMSD,
    },
    {
      name: '堆排序',
      function: heapSort,
    },
    {
      name: '双调排序',
      function: bitonicSort,
      arraySizeComponent: RangeArraySizePowerOfTwo,
    },
    {
      name: 'Tim 排序',
      function: timSort,
    },
    {
      name: '地精排序',
      function: gnomeSort,
    },
    {
      name: '循环排序',
      function: cycleSort,
    },
    {
      name: '鸡尾酒排序',
      function: cocktailSort,
    },
    {
      name: '煎饼排序',
      function: pancakeSort,
    },
  ],
  [
    {
      name: 'Stooge 排序',
      function: stoogeSort,
    },
    {
      name: 'Bogo 排序',
      function: bogoSort,
    },
    {
      name: '交换排序',
      function: exchangeSort,
    },
    {
      name: '奇偶排序',
      function: oddEvenSort,
    },
    {
      name: '计数排序',
      function: countingSort,
      badge: '新',
    },
    {
      name: '梳排序',
      function: combSort,
      badge: '新',
    },
    {
      name: '内省排序',
      function: introSort,
      badge: '新',
    },
  ],
];
