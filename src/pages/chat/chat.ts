import Block from "../../services/Component";
import tpl from "./chat.hbs";
import Button from "../../components/button";

export class ChatPage extends Block {
  constructor(props: { buttonText: string }) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(tpl, {});
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps.buttonText !== newProps.buttonText) {
      this.children.button.setProps({
        text: newProps.buttonText,
      });
    }
    return super.componentDidUpdate(oldProps, newProps);
  }

  protected initChildren() {
    this.children.button = new Button({
      text: this.props.buttonText,
      // labelComponent: Label()
    });
  }
}
