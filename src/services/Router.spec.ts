import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { JSDOM } from 'jsdom';
import Router from './Router';

describe('Router', () => {
  let m1: any;
  let m2: any;
  let router: any;

  beforeEach(() => {
    const dom = new JSDOM(
      '<!DOCTYPE html><head><title>test</title></head><body><div id="root"></div></body>',
      {
        url: 'http://localhost:1234',
      },
    );
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;

    m1 = class MyBlock1 {
      getContent() {
        const div = document.createElement('div');
        div.id = 'test-div1';

        return div;
      }

      dispatchComponentDidMount() {}
    };

    m2 = class MyBlock2 {
      getContent() {
        const div = document.createElement('div');
        div.id = 'test-div2';

        return div;
      }

      dispatchComponentDidMount() {}
    };

    router = new Router('#root');
  });

  it('should be singleton', () => {
    expect(new Router('#root')).to.eq(router);
  });

  describe('.use', () => {
    it('should return Router instance ', () => {
      const result = router.use('/use', class {} as any);

      expect(result).to.eq(router);
    });
  });

  describe('.start', () => {
    it('should start router', () => {
      router.use('/', m2 as any).start();

      expect(document.getElementById('test-div2')).not.to.be.null;
    });
  });

  describe('.go', () => {
    beforeEach(() => {
      router.use('/page', m1 as any);

      router.go('/page');
    });

    it('should render new block', () => {
      expect(document.getElementById('test-div1')).not.to.be.null;
    });
  });

  describe('navigate', () => {
    beforeEach(() => {
      router
        .use('/new-back-page-1', m1 as any)
        .use('/new-back-page-2', m2 as any);

      router.go('/new-back-page-1');
      router.go('/new-back-page-2');

      router.back();
    });
    it('should go back', () => {
      expect(document.getElementById('test-div2')).not.to.be.null;
    });
    it('should go forward', () => {
      router.forward();

      expect(document.getElementById('test-div2')).not.to.be.null;
    });
  });

  describe('.getRoute', () => {
    it('should return Route', () => {
      router.use('/get-route-test', m1 as any);
      const getRoute = router.getRoute('/get-route-test');
      expect(getRoute).not.to.be.null;
    });
  });
});
