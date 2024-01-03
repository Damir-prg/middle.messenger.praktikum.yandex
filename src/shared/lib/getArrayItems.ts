/**
 *  Получение первого элемента массива
 * @param arr Массив элементов
 * @returns Первый элемент массива или undefined
 */
export function first<T>(arr: Array<T>): T | undefined {
  return arr?.at(0);
}

/**
 *  Получение последнего элемента массива
 * @param arr Массив элементов
 * @returns Последний элемент массива или undefined
 */
export function last<T>(arr: Array<T>): T | undefined {
  return arr?.at(-1);
}
