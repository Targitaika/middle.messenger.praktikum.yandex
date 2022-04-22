import SigninAPI, {
  signInInterface,
} from '../../pages/home/modules/signin/signin.api';
import LoginApi, {
  loginInterface,
} from '../../pages/home/modules/login/login.api';

import store from '../../services/Store';
import { router } from '../../../main';

export interface ControllerSignInData extends signInInterface {
  confirm_password: string;
}

class AuthController {
  private loginApi: LoginApi;

  private signinApi: SigninAPI;

  constructor() {
    this.loginApi = new LoginApi();
    this.signinApi = new SigninAPI();
  }

  async singin(data: ControllerSignInData) {
    // console.log(data.confirm_password, data.password);
    if (data.confirm_password !== data.password) {
      throw new Error('Need same password');
    }
    // eslint-disable-next-line camelcase Asdasd123
    const { confirm_password, ...signInData } = data;
    const response: any = await this.signinApi.create(signInData);
    if (response.reason) {
      console.log(response.reason);
    } else {
      throw new Error(response.message);
    }
    await this.fetchUser();
    // this.password = data.password;
    // store.set('currentPassword', data.password);
    document.cookie = `password=${data.password}`;

    router.go('/messenger');
  }

  async login(data: loginInterface) {
    const response: any = await this.loginApi.login(data);

    if (response.reason && response.reason !== 'User already in system') {
      throw new Error(response.message);
    }
    try {
      await this.fetchUser();
    } catch (e) {
      throw new Error(`Fetch user problem${e}`);
    }
    // this.password = data.password;

    document.cookie = `password=${data.password}`;
    router.go('/messenger');
  }

  async logout() {
    await this.loginApi.logout();

    router.go('/');
  }

  async fetchUser() {
    const user: any = await this.signinApi.request();

    if (user.status === 200) {
      store.set('currentUser', user.response);
    } else {
      throw new Error('Fetch user error');
    }
  }
}

export default new AuthController();
