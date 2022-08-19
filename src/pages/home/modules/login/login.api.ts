import HTTPTransport from '@services/HTTPTransport';

export interface loginInterface {
  login: string;
  password: string;
}

const authApiInstance = new HTTPTransport('/auth/');

export default class LoginApi {
  login(data: loginInterface) {
    return authApiInstance.post('signin', { data });
  }

  logout() {
    return authApiInstance.post('logout');
  }
}
