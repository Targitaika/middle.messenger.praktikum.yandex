import Block from '@services/Component';
import * as tmpl from './chatItem.hbs';
import './chatItem.css';

export class ChatItem extends Block {
  render() {
    return this.compile(tmpl, {
      ...this.props,
    });
  }
}
