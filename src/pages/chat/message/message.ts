import Block from '@services/Component';
import * as tmpl from './message.hbs';
import './message.css';

export class Message extends Block {
  render() {
    return this.compile(tmpl, {
      ...this.props,
    });
  }
}
