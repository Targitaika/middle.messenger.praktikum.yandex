import Block from "../../services/Component";
import tmpl from "./button.hbs";
import "./button.css";

interface ButtonProps {
  text: string;
  className?: string;
  events?: {
    click?: () => void;
  };
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, { ...this.props });
  }
}
