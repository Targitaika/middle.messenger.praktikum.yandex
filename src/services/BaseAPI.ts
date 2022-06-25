export default class BaseAPI {
  // На случай, если забуду переопределить метод и использую его, — выстрелит ошибка
  protected create(data?: any): any {
    // @ts-ignore
    throw new Error('Not implemented', data);
  }

  protected request(data?: any) {
    // @ts-ignore
    throw new Error('Not implemented', data);
  }

  protected update() {
    throw new Error('Not implemented');
  }

  protected delete() {
    throw new Error('Not implemented');
  }
}
