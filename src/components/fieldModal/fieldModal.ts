import Block from '@services/Component';
import * as tmpl from './fieldModal.hbs';
import './fieldModal.css';

export class FieldModal extends Block {
  constructor(props: any) {
    super(props);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
