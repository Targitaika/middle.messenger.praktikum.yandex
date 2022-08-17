import * as tmpl from './userModal.hbs';
import './userModal.css';
import Block from '../../../services/Component';

// eslint-disable-next-line import/prefer-default-export
export class UserModal extends Block {
  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
