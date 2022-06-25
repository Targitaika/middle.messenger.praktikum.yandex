export default class BaseAPI {
  // На случай, если забуду переопределить метод и использую его, — выстрелит ошибка
  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  protected create(arg0?: any): any {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this,no-unused-vars
  protected request(arg0?: any) {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  protected update() {
    throw new Error('Not implemented');
  }

  // eslint-disable-next-line class-methods-use-this
  protected delete() {
    throw new Error('Not implemented');
  }
}
