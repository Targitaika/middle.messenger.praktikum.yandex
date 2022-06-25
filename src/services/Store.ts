import set from './set';
import EventBus from './EventBus';

export interface currentUserInterface {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  password: string;
}

export interface storeDataInterface {
  currentUser?: currentUserInterface;
  chats?: any;
  currentPassword?: { password: string };
}

export const StoreEvents: Record<string, string> = {
  Updated: 'updated',
};

class Store extends EventBus {
  private state: storeDataInterface = {};

  public getState() {
    return this.state;
  }

  public set(path: keyof storeDataInterface | string, value: unknown) {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export default store;
