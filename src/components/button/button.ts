import Block from '@services/Component';
import * as tmpl from './button.hbs';
import './button.css';

interface ButtonProps {
  text: string | any;
  type?: string;
  className?: 'regular' | 'btn_text' | 'btn_red' | string;
  events?: {
    click?: (e: Event) => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      type: 'button',
      className: 'regular',
      ...props,
    });
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
