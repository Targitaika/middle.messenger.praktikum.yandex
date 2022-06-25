import Block from './Component';
import isEqual from './isEqual';
import store, { StoreEvents, storeDataInterface } from './Store';

// eslint-disable-next-line max-len,no-unused-vars
export const withStore = (mapStateToProps: (state: storeDataInterface) => Record<string, unknown>) => (Component: typeof Block) => {
  let state: any;

  return class extends Component {
    constructor(props: any) {
      state = mapStateToProps(store.getState());
      super({ ...props, ...state });

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        if (!isEqual(state, newState)) {
          this.setProps({
            ...newState,
          });
        }
      });
    }
  };
};

export const withUser = withStore((state) => state.currentUser);
export const withChats = withStore((state) => state.chats);
