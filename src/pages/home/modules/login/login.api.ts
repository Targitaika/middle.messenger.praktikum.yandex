import HTTPTransport from '../../../../services/HTTPTransport';
import BaseAPI from '../../../../services/BaseAPI';

export interface loginInterface {
  login: string;
  password: string;
}

const authApiInstance = new HTTPTransport('/auth/');

export default class LoginApi extends BaseAPI {
  login(data: loginInterface) {
    return authApiInstance.post('signin', { data });
  }

  logout() {
    return authApiInstance.post('logout');
  }
}
