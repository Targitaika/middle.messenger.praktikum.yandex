import tmpl from './userModal.hbs';
import './userModal.css';
import Block from '../../../services/Component';
import Button from '../../../components/button';

export class UserModal extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
