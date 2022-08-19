import Block from '@services/Component';
import * as tmpl from './chatItem.hbs';
import './chatItem.css';
import { chatItemInterface } from '../../../interfaces/chatInterfaces';

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
