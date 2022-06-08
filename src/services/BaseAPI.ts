export default class BaseAPI {
  // На случай, если забуду переопределить метод и использую его, — выстрелит ошибка
  protected create(x: any): any {
    throw new Error('Not implemented');
  }

  protected request() {
    throw new Error('Not implemented');
  }

  protected update() {
    throw new Error('Not implemented');
  }

  protected delete() {
    throw new Error('Not implemented');
  }
}
