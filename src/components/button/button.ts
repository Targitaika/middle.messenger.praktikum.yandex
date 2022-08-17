import Block from '../../services/Component';
import * as tmpl from './button.hbs';
import './button.css';

interface ButtonProps {
  text: string | any;
  type?: string;
  className?: 'regular' | 'btn_text' | 'btn_red' | string;
  events?: {
    click?: (arg0?: any) => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
    if (!this.props.className) {
      this.setProps({ className: 'regular' });
    }
    if (!this.props.type) {
      this.setProps({ type: 'button' });
    }
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
