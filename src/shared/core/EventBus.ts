export type Listener<T extends unknown[] = unknown[]> = (...args: T) => void;

/**
 * Класс для работы с событиями и обработчиками событий.
 * @template E - тип события
 * @template M - тип для хранения аргументов каждого события
 */
export default class EventBus<E extends string = string, M extends { [K in E]: unknown[] } = Record<E, any[]>> {
  private listeners: { [key in E]?: Listener<M[E]>[] } = {};

  /**
   * Обрабатывает событие, добавляя обратный вызов слушателя в массив слушателей события.
   *
   * @param {E} eventName - имя события
   * @param {Listener<M[E]>} listenerCallback - функция обратного вызова для добавления в качестве слушателя
   * @return {void}
   */
  on(eventName: E, listenerCallback: Listener<M[E]>) {
    if (this.listeners[eventName] === undefined) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName]!.push(listenerCallback);
  }

  /**
   * Выключает указанный обработчик события.
   *
   * @param {E} eventName - имя события, которое нужно отключить
   * @param {Listener<M[E]>} listenerCallback - функция обратного вызова,
   * которая должна быть удалена из обработчика события
   * @return {void}
   */
  off(eventName: E, listenerCallback: Listener<M[E]>) {
    if (!this.listeners[eventName]) {
      throw new Error(`Нет события: ${eventName}`);
    }

    this.listeners[eventName] = this.listeners[eventName]!.filter((listener) => listener !== listenerCallback);
  }

  /**
   * Отправляет указанное событие с предоставленными аргументами всем зарегистрированным слушателям.
   * И вызывает каждый слушатель с переданными аргументами.
   *
   * @param {E} event - событие для отправки
   * @param {M[E]} args - аргументы для события
   */
  emit(event: E, ...args: M[E]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((listener) => listener(...args));
  }
}
