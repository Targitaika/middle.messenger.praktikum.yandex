type Handler = (...args: unknown[]) => void;

export default class EventBus {
  protected listeners: Record<string, Handler[]> = {};

  constructor() {
    this.listeners = {};
  }

  public on(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Handler): void {
    if (!this.listeners[event]) {
      // throw new Error(`Нет события: ${event}`);
      console.log(`Нет события: ${event}`);
      return;
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }

  public emit(event: string, ...args: unknown[]): void {
    if (!this.listeners[event]) {
      // throw new Error(`Нет события: ${event}`);
      console.log(`Нет события: ${event}`);
      this.listeners[event] = [];
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
