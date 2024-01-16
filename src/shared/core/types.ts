export type TEvents = {
  [eventName in keyof HTMLElementEventMap]: EventListenerObject;
};

export type TEventListener<E extends keyof HTMLElementTagNameMap> = HTMLElementTagNameMap[E]['addEventListener'];
