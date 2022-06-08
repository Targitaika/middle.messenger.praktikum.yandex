import HTTPTransport from '../../../../services/HTTPTransport';
import BaseAPI from '../../../../services/BaseAPI';

const profileApiInstance = new HTTPTransport('/auth/');

export default class LoginApi extends BaseAPI {
  login(data: { any: any }) {
    const jsonD = JSON.stringify(data);
    const x = profileApiInstance.post('signin', {
      headers: {
        'content-type': 'application/json', // Данные отправляем в формате JSON
      },
      data: jsonD,
    });
    console.log(x);
    return x;
  }
}
