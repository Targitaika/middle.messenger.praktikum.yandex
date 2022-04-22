import set from './set';
import EventBus from './EventBus';
import Block from './Component';
import isEqual from './isEqual';

type Indexed<T = any> = {
  [key in string]: T;
};

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
  currentPassword?: { password: string };
}

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: storeDataInterface = {};

  public getState() {
    return this.state;
  }

  public set(path: keyof storeDataInterface | string, value: unknown) {
    set(this.state, path, value);
    console.log('Store', this.state, 'path', path, 'value', value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export default store;
