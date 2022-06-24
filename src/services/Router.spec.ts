import { expect } from 'chai';
import { describe, beforeEach, it } from 'mocha';
import { JSDOM } from 'jsdom';
import Router from './Router';

describe('Router', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      '<!DOCTYPE html><head><title>test</title></head><body><div id="root"></div></body>',
      {
        url: 'http://localhost:1234',
      },
    );
    (global as any).document = dom.window.document;
    (global as any).window = dom.window;
  });

  it('should be singleton', () => {
    const router = new Router('#root');

    expect(new Router('#root')).to.eq(router);
  });

  describe('.use', () => {
    it('should return Router instance ', () => {
      const router = new Router('#root');

      const result = router.use('/use', class {} as any);

      expect(result).to.eq(router);
    });
  });

  describe('.start', () => {
    it('should start router', () => {
      class MyBlock2 {
        getContent() {
          const div = document.createElement('div');
          div.id = 'test-div';

          return div;
        }

        dispatchComponentDidMount() {}
      }

      const router = new Router('#root');
      router.use('/', MyBlock2 as any).start();

      expect(document.getElementById('test-div')).not.to.be.null;
    });
  });

  describe('.go', () => {
    beforeEach(() => {
      class MyBlock {
        getContent() {
          const div = document.createElement('div');
          div.id = 'test-div';

          return div;
        }

        dispatchComponentDidMount() {}
      }

      const router = new Router('#root');
      router.use('/page', MyBlock as any);

      router.go('/page');
    });

    it('should render new block', () => {
      expect(document.getElementById('test-div')).not.to.be.null;
    });

    // it('should change location', () => {
    //   expect(window.location.pathname).to.eq('/page');
    // });
  });

  describe('.back', () => {
    it('should go back', () => {
      class MyBlock1 {
        getContent() {
          const div = document.createElement('div');
          div.id = 'test-div1';

          return div;
        }

        dispatchComponentDidMount() {}
      }

      class MyBlock2 {
        getContent() {
          const div = document.createElement('div');
          div.id = 'test-div2';

          return div;
        }

        dispatchComponentDidMount() {}
      }

      const router = new Router('#root');
      router
        .use('/new-back-page-1', MyBlock1 as any)
        .use('/new-back-page-2', MyBlock2 as any);

      router.go('/new-back-page-1');
      router.go('/new-back-page-2');
      // router.back();
      // console.log(new MyBlock1().getContent(), router.);
      expect(document.getElementById('test-div1')).to.be.equal;
    });
  });

  describe('.forward', () => {});
});
