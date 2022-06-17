import tmpl from './chatItem.hbs';
import './chatItem.css';
import { chatItemInterface } from '../../../interfaces/chatInterfaces';
import Block from '../../../services/Component';

export class ChatItem extends Block {
  constructor(props: chatItemInterface) {
    super(props);
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
    });
  }
}
