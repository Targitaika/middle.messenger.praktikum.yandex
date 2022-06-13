import Route from './Route';

export default class Router {
  routes: [];

  history: {};

  _currentRoute: null | any;

  _rootQuery: any;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  public use(pathname: string, block: any): any {
    const route: {} = new Route(pathname, block, {
      rootQuery: this._rootQuery,
    });

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public getRoute(pathname: string) {
    return this.routes.find((route: any) => route.match(pathname));
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    // if (this._currentRoute && this._currentRoute !== route) {
    //   this._currentRoute.leave();
    // }

    this._currentRoute = route;
    route.render(route, pathname);
  }
}
