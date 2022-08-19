import renderDOM from './renderDOM';

export default class Route {
  _pathname: string;

  _blockClass: any;

  _block: null | {} | any;

  _props: {
    rootQuery: string;
  };

  constructor(
    pathname: string,
    view: {},
    props: {
      rootQuery: string;
    },
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      console.log('navigate2', pathname);
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  public match(pathname: string) {
    return pathname === this._pathname;
  }

  public render() {
    console.log('render');

    if (!this._block) {
      console.log('render2');

      this._block = new this._blockClass();
    }
    renderDOM(this._props.rootQuery, this._block);

    // this._block.show();
  }
}
