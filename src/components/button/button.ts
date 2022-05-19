import Block from "../../services/Component";
import tmpl from "./button.hbs";
import "./button.css";

interface ButtonProps {
  text: string;
  className?: "regular" | "btn_text" | "btn_red" | string;
  events?: {
    click?: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
    if (!this.props.className) {
      this.setProps({ className: "regular" });
    }
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
