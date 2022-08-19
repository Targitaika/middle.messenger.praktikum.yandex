import ProfileApi from '@pages/profile/profile.api';
import { signInInterface } from '@pages/home/modules/signin/signin.api';

export interface ControllerSignInData extends signInInterface {
  confirm_password: string;
}

class ProfileController {
  private profileApi: ProfileApi;

  constructor() {
    this.profileApi = new ProfileApi();
  }

  async updateProfile(data: ControllerSignInData) {
    try {
      await this.profileApi.updateUserProfile(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updatePassword(data: any) {
    try {
      await this.profileApi.updatePassword(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async updateAvatar(data: any) {
    try {
      await this.profileApi.updateAvatar(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default new ProfileController();
