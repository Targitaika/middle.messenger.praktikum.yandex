import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import Component from './Component';

describe.only('Component', () => {
  let childComponent: Component;
  let parentComponent: Component;

  class ChildClass extends Component {
    render() {
      return this.compile(() => '<div id="child-id">Child</div>', {});
    }
  }

  class ParentClass extends Component {
    render() {
      return this.compile(() => '<div id="parent-id">Parent</div>', {});
    }
  }

  beforeEach(() => {
    parentComponent = new ParentClass({
      prop1: 'asd',
      child1: ChildClass,
    });
    childComponent = new ChildClass();
  });

  describe('get element()', () => {
    it('should return null', () => {
      expect(parentComponent.element).not.to.be.null;
    });
  });

  describe('.getPropsAndChildren', () => {
    it('should return props and children', () => {
      expect(
        parentComponent.getPropsAndChildren({
          prop2: 2,
          child1: childComponent,
        }),
      ).is.deep.equal({
        props: { prop2: 2 },
        children: { child1: childComponent },
      });
    });
  });

  describe('.dispatchComponentDidMount', () => {});

  describe('.getContent', () => {
    it('should return content', () => {
      expect(parentComponent.getContent()?.innerHTML).is.equal('Parent');
    });
  });

  describe('.compile', () => {
    it('should return document.fragment', () => {
      const asd = new ParentClass().compile(
        () => '<div id="parent-id">Parent{{{prop1}}}</div>',
        {
          prop1: '123',
        },
      );

      expect(asd.textContent).is.equal('Parent{{{prop1}}}');
    });
  });

  describe('.render', () => {
    it('should return new document fragment', () => {
      const fragment2 = new ParentClass().render();

      expect(fragment2.children).is.not.null;
    });
  });
});
