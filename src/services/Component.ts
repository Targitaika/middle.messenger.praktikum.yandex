import { v4 as makeUUID } from 'uuid';
import EventBus from './EventBus';
import isEqual from './isEqual';

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _meta: { props?: any };

  public id = makeUUID();

  protected props?: any;

  protected children: Record<string, Block>;

  private eventBus: () => EventBus;

  constructor(propsAndChildren: any = {}) {
    const eventBus: any = new EventBus();
    const { props, children } = this.getPropsAndChildren(propsAndChildren);

    this.children = children;

    this._meta = {
      props,
    };

    this.props = this._makePropsProxy(props);
    this.initChildren();

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _element: HTMLElement | null = null;

  get element(): HTMLElement | null {
    return this._element;
  }

  public getPropsAndChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).map(([key, value]) => {
      // console.log(key, value);
      if (value instanceof Block) {
        children[key] = value;
      } else if (
        Array.isArray(value)
        && value.every((v) => v instanceof Block)
      ) {
        // console.log('THIS', value);
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { props, children };
  }

  _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  public init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  public componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  public componentDidUpdate(oldProps: any, newProps: any) {
    if (isEqual(oldProps, newProps)) {
      // console.log('CDU false');
      return false;
    }
    // console.log('CDU true', oldProps);
    return true;
  }

  public setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public getContent(): HTMLElement | null {
    return this.element;
  }

  public compile(template: (context: any) => string, context: any) {
    const fragment = this._createDocumentElement(
      'template',
    ) as HTMLTemplateElement;

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        const x = child.map((ch) => `<div data-id="id-${ch.id}"></div>`);
        context[key] = x.join('');
      } else {
        context[key] = `<div data-id="id-${child.id}"></div>`;
      }
    });

    const htmlString = template(context);

    fragment.innerHTML = htmlString;

    Object.entries(this.children).forEach(([, child]) => {
      if (Array.isArray(child)) {
        for (let i = 0; i < child.length; i++) {
          const stub = fragment.content.querySelector(
            `[data-id="id-${child[i].id}"]`,
          );
          if (!stub) {
            return;
          }
          stub.replaceWith(child[i].getContent()!);
        }
      } else {
        const stub = fragment.content.querySelector(
          `[data-id="id-${child.id}"]`,
        );
        if (!stub) {
          return;
        }
        stub.replaceWith(child.getContent()!);
      }
    });
    return fragment.content;
  }

  protected initChildren() {}

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  private _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
    this._element = newElement;

    this._addEvents();
  }

  private _makePropsProxy(props: any) {
    const self = this;
    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        const oldProps = { ...target };

        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _removeEvents() {
    const { events } = this.props as any;

    if (!events || !this._element) {
      return;
    }
    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  private _addEvents() {
    const { events } = this.props as any;
    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      if (event === 'blur' || event === 'focus') {
        this._element!.addEventListener(event, listener, true);
      } else {
        this._element!.addEventListener(event, listener);
      }
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
}
