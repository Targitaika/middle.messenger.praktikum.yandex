import * as Handlebars from "handlebars";
import tmpl from "./chat.hbs";
import "./chat.css";
import { Field } from "../../components/field";
import { ChatItem } from "./chatItem/chatItem";
import { SearchIcon } from "../../components/icons/search";
import { MessageTikIcon } from "../../components/icons/messageTik";
import { MessageSendIcon } from "../../components/icons/messageSend";
import { MessagePinIcon } from "../../components/icons/messagePin";
import { tempData } from "./mock";

interface chatItemInterface {
  name: string;
  src: string;
  text: string;
  unread: number;
}

interface fieldInterface {
  name: string;
  label: string;
  placeholder: string;
  type: string | null;
  icon: () => string;
}

interface infoInterface {
  pinIcon: () => string;
  sendIcon: () => string;
  tikIcon: () => string;
  chatList: Array<chatItemInterface>;
  searchInput: (arg0: fieldInterface) => string;
  messageInput: (arg0: fieldInterface) => string;
}

Handlebars.registerHelper(
  "chatListHelper",
  function (arr: Array<chatItemInterface>) {
    return arr
      .map((item) => ChatItem(item))
      .reduce((prev: string, item: string) => prev + item);
  }
);

const info = (): (() => string) => {
  return tmpl({
    pinIcon: MessagePinIcon(),
    sendIcon: MessageSendIcon(),
    tikIcon: MessageTikIcon(),
    chatList: tempData.chatList,
    searchInput: Field({
      name: "search",
      label: "",
      placeholder: "Поиск",
      type: "search",
      icon: SearchIcon,
    }),
    messageInput: Field({
      name: "message",
      label: "",
      placeholder: "Отправить",
      type: "send-message",
    }),
  });
};
export const Chat = (data: any) => {
  const template = Handlebars.compile(info());
  return template({ data });
};
