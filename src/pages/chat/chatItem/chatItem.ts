import tmpl from './chatItem.hbs';
import './chatItem.css';
import { chatItemInterface } from '../../../interfaces/chatInterfaces';
import Block from '../../../services/Component';

export class ChatItem extends Block {
  constructor(props: chatItemInterface) {
    console.log(props);
    super(props);
  }

  handleChatItemClick(e) {
    console.log('clicked');
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      events: { click: (e) => this.handleChatItemClick(e) },
    });
  }
}
