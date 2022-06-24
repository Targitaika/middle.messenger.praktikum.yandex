import Route from './Route';

export default class Router {
  // eslint-disable-next-line no-use-before-define
  private static __instance: Router;

  routes: Route[];

  history: {};

  _currentRoute: null | Route;

  _rootQuery: any;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  public use(pathname: string, block: any): any {
    const route: any = new Route(pathname, block, {
      rootQuery: this._rootQuery,
    });

    // @ts-ignore
    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = (event) => {
      // @ts-ignore
      this._onRoute(event?.currentTarget?.location?.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string) {
    // @ts-ignore
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    // @ts-ignore
    this.history.back();
  }

  public forward() {
    // @ts-ignore
    this.history.forward();
  }

  public getRoute(pathname: string) {
    return this.routes.find((route: Route) => route.match(pathname));
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
    route.navigate(pathname);
  }
}
