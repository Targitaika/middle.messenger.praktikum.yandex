import HTTPTransport from '../../../../services/HTTPTransport';
import BaseAPI from '../../../../services/BaseAPI';

export interface signInInterface {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

const authApiInstance = new HTTPTransport('/auth/');

export default class SigninAPI extends BaseAPI {
  create(data: signInInterface) {
    return authApiInstance.post('signup', { data });
  }

  request() {
    return authApiInstance.get('user');
  }
}
