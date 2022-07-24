import tmpl from './field.hbs';
import Block from '../../services/Component';
import './field.css';
import fieldInterface from '../../interfaces/fieldInterface';

export class Field extends Block {
  constructor(props: fieldInterface) {
    super(props);
    if (!this.props.customStyles) {
      this.setProps({ customStyles: '' });
    }
    if (!this.props.placeholder) {
      this.setProps({ placeholder: '' });
    }
    if (!this.props.isReadonly) {
      this.setProps({ isReadonly: false });
    }
    if (!this.props.label) {
      if (!this.props.name) {
        this.setProps({ name: 'Name' });
      }
      this.setProps({ label: this.props.name });
    }
    switch (this.props.type) {
      case 'search':
        this.setProps({ type: 'text' });
        this.setProps({ label: '' });
        this.setProps({ customStyles: 'search-input' });
        break;
      case 'send-message':
        this.setProps({ type: 'text' });
        this.setProps({ label: '' });
        this.setProps({ customStyles: 'search-input' });
        break;
      case 'input_profile':
        this.setProps({ type: 'text' });
        this.setProps({ customStyles: 'search-input' });
        break;
      default:
        this.setProps({ type: 'text' });
        this.setProps({ label: 'Нужен тип филда' });
        this.setProps({ customStyles: 'search-input' });
        break;
    }
  }

  render() {
    console.log('tmpl', tmpl);

    return this.compile(tmpl, { ...this.props });
  }
}
