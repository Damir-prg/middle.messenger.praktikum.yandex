function generateRange(start: number, end: number, step: number): Array<number> {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[++index] = start;
    start += step;
  }

  return result;
}

/**
 *  Генерация последовательности чисел
 * @param start Начальное значение массива чисел,
 * если не указан end, то равен 0
 * @param end Конечное значение массива чисел, по умолчанию равен start
 * @param step Шаг с которым
 * @description Функция, генерирующая последовательность чисел от start до
 *  end с шагом step
 * @returns [start, start+step, ... end]
 */
export function range(start: number, end?: number, step?: number, isReverse?: boolean) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === undefined) {
    step = start < end ? 1 : -1;
  }

  if (start === end) {
    return [];
  }

  const result = generateRange(start, end, step);
  return isReverse ? result.reverse() : result;
}
