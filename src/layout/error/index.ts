import Block from '@services/Component';
import { router } from 'Main';
import Button from '@components/button';
import * as tmpl from './error.hbs';
import './error.css';

export default class ErrorLayout extends Block {
  render() {
    if (!this.props.link) {
      this.setProps({ link: '#' });
    }
    if (!this.props.linkText) {
      this.setProps({ linkText: 'Назад к чатам' });
    }
    return this.compile(tmpl, {
      ...this.props,
    });
  }

  protected initChildren() {
    super.initChildren();

    this.children.btn = new Button({
      text: 'Назад к чатам',
      className: 'btn_text',
      events: {
        click: (e: Event) => this.handleLink(e),
      },
    });
  }

  private handleLink(e: any) {
    e.preventDefault();
    router.go('/messenger');
  }
}
