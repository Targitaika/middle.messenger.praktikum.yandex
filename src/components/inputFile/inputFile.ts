import Block from '../../services/Component';
import tmpl from './inputFile.hbs';
import './inputFile.css';

export class InputFile extends Block {
  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
