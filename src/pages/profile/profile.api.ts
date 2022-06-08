import HTTPTransport from '../../services/HTTPTransport';
import BaseAPI from '../../services/BaseAPI';

const profileApiInstance = new HTTPTransport('/auth/');

export default class ProfileApi extends BaseAPI {
  logout() {
    return profileApiInstance.post('logout');
  }

  request() {
    return profileApiInstance.get('user');
  }
}
