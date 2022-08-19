import HTTPTransport from '@services/HTTPTransport';

export interface signInInterface {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

const authApiInstance = new HTTPTransport('/auth/');

export default class SigninAPI {
  create(data: signInInterface) {
    return authApiInstance.post('signup', { data });
  }

  request() {
    return authApiInstance.get('user');
  }
}
