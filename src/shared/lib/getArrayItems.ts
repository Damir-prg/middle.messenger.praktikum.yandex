/**
 *  Получение первого элемента массива
 * @param arr Массив элементов
 * @returns Первый элемент массива или undefined
 */
export function first<T extends unknown>(arr: Array<T>): T | undefined {
  return arr?.at(0);
}

/**
 *  Получение последнего элемента массива
 * @param arr Массив элементов
 * @returns Последний элемент массива или undefined
 */
export function last<T extends unknown>(arr: Array<T>): T | undefined {
  return arr?.at(-1);
}
