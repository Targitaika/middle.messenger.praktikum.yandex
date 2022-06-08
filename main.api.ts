import HTTPTransport from './src/services/HTTPTransport';
import BaseAPI from './src/services/BaseAPI';

const profileApiInstance = new HTTPTransport('/auth/');

export default class MainApi extends BaseAPI {
  request() {
    return profileApiInstance.get('user');
  }
}
