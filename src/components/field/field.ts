import Block from "../../services/Component";
import tmpl from "./field.hbs";
import "./field.css";
import fieldInterface from "../../interfaces/fieldInterface";

export class Field extends Block {
  constructor(props: fieldInterface) {
    super(props);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}

//<div class="item {{customStyles}}">
//     <div class="field-icon">
//         {{{icon}}}
//     </div>
//     {{labelShow name label}}
//     <input
//             class="input"
//             id="{{name}}"
//             name="{{name}}"
//             placeholder="{{placeholder}}"
//             type="{{type}}"
//         {{readonly}}
//             value="{{value}}">
// </div>
