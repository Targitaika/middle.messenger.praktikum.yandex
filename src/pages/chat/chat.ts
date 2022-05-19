import Block from "../../services/Component";
import tpl from "./chat.hbs";
import Field from "../../components/field";
import { SearchIcon } from "../../components/icons/search";
import "./chat.css";
import { MessagePinIcon } from "../../components/icons/messagePin";
import { MessageSendIcon } from "../../components/icons/messageSend";
import { MessageTikIcon } from "../../components/icons/messageTik";
import ChatItem from "./chatItem";
import { chatList } from "./mock";

export class ChatPage extends Block {
  constructor(props: any) {
    super(props);
  }

  render(): DocumentFragment {
    const arr = chatList
      .map((prop) => new ChatItem(prop).getContent()?.outerHTML)
      .join("");
    return this.compile(tpl, {
      ...this.props,
      pinIcon: MessagePinIcon,
      chatList: arr,
      sendIcon: MessageSendIcon,
      tikIcon: MessageTikIcon,
    });
  }

  //
  // componentDidUpdate(oldProps: any, newProps: any): boolean {
  //   if (oldProps.buttonText !== newProps.buttonText) {
  //     this.children.button.setProps({
  //       text: newProps.buttonText,
  //     });
  //   }
  //   return super.componentDidUpdate(oldProps, newProps);
  // }

  protected initChildren() {
    this.children.searchInput = new Field({
      name: "search",
      label: "",
      placeholder: "Поиск",
      type: "search",
      icon: SearchIcon,
    });

    this.children.messageInput = new Field({
      name: "message",
      label: "",
      placeholder: "Отправить",
      type: "send-message",
    });
  }
}
