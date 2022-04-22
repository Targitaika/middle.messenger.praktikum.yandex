import HTTPTransport from '../../services/HTTPTransport';
import BaseAPI from '../../services/BaseAPI';
import { signInInterface } from '../home/modules/signin/signin.api';

const authApiInstance = new HTTPTransport('/auth/');
const userApiInstance = new HTTPTransport('/user/');

export interface passwordUpdate {
  oldPassword: string;
  newPassword: string;
}

export default class ProfileApi extends BaseAPI {
  updateUserProfile(data: signInInterface) {
    return userApiInstance.put('profile', { data });
  }

  updatePassword(data: passwordUpdate) {
    return userApiInstance.put('password', { data }, false);
  }

  updateAvatar(data) {
    // file
    return userApiInstance.put('profile/avatar', { data }, true);
  }
}
