import tmpl from './error.hbs';
import './error.css';
import errorInterface from '../../interfaces/errorInterface';
import Block from '../../services/Component';

export default class ErrorLayout extends Block {
  constructor(props: errorInterface) {
    super(props);
  }

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
}
