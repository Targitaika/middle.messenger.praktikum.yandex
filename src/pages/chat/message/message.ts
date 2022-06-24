import tmpl from './message.hbs';
import './message.css';
import Block from '../../../services/Component';

interface messageInterface {
  text: string;
  time: string;
  className: string;
}

export class Message extends Block {
  constructor(props: messageInterface) {
    super(props);
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
    });
  }
}
