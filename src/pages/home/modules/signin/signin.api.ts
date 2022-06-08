import HTTPTransport from '../../../../services/HTTPTransport';
import BaseAPI from '../../../../services/BaseAPI';

const profileApiInstance = new HTTPTransport('/auth/');

export default class SigninApi extends BaseAPI {
  create(data: { any: any }) {
    const jsonD = JSON.stringify(data);
    return profileApiInstance.post('signup', {
      headers: {
        'content-type': 'application/json', // Данные отправляем в формате JSON
      },
      data: jsonD,
    });
  }

  request() {
    return profileApiInstance.get('user');
  }
}
