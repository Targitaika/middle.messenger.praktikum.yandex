import ProfileApi from '../../pages/profile/profile.api';
import { signInInterface } from '../../pages/home/modules/signin/signin.api';

export interface ControllerSignInData extends signInInterface {
  confirm_password: string;
}

class ProfileController {
  private profileApi: ProfileApi;

  constructor() {
    this.profileApi = new ProfileApi();
  }

  async updateProfile(data: ControllerSignInData) {
    const response: any = await this.profileApi.updateUserProfile(data);
    if (response.reason) {
      console.log(response.reason);
    } else {
      throw new Error(response.message);
    }
  }

  async updatePassword(data: {}) {
    const response: any = await this.profileApi.updatePassword(data);
    if (response.reason) {
      console.log(response.reason);
    } else {
      throw new Error(response.message);
    }
  }

  async updateAvatar(data: any) {
    const response: any = await this.profileApi.updateAvatar(data);
    if (response) {
      if (response.reason) {
        console.log(response.reason);
      } else {
        throw new Error(response.message);
      }
    }
  }
}

export default new ProfileController();
