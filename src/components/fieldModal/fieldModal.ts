import * as tmpl from './fieldModal.hbs';
import './fieldModal.css';
import Block from '../../services/Component';

export class FieldModal extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
