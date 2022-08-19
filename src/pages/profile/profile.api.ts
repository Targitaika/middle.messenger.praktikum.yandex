import HTTPTransport from '@services/HTTPTransport';
import { signInInterface } from '../home/modules/signin/signin.api';

const userApiInstance = new HTTPTransport('/user/');

export interface passwordUpdate {
  oldPassword: string;
  newPassword: string;
}

export default class ProfileApi {
  updateUserProfile(data: signInInterface) {
    return userApiInstance.put('profile', { data });
  }

  updatePassword(data: passwordUpdate) {
    return userApiInstance.put('password', { data });
  }

  updateAvatar(data: any) {
    // file
    return userApiInstance.put('profile/avatar', { data });
  }
}
