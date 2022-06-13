import HTTPTransport from '../../services/HTTPTransport';
import BaseAPI from '../../services/BaseAPI';

const authApiInstance = new HTTPTransport('/auth/');
const userApiInstance = new HTTPTransport('/user/');

// interface userItnerface {
//   id: number;
//   first_name: string;
//   second_name: string;
//   display_name: string;
//   login: string;
//   email: string;
//   phone: string;
//   avatar: string;
// }

export interface profileUpdate {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface passwordUpdate {
  oldPassword: string;
  newPassword: string;
}

export default class ProfileApi extends BaseAPI {
  updateUserProfile(data: profileUpdate) {
    return userApiInstance.put('profile', { data });
  }

  updatePassword(data: passwordUpdate) {
    const x = userApiInstance.put('password', { data });
    // console.log(x);
    return x;
  }

  updateAvatar(data) {
    // file
    return userApiInstance.put('profile/avatar');
  }
}
