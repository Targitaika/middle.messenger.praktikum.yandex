import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./chat.hbs";
import "./chat.css";
import { Field } from "../../components/field";
import { ChatItem } from "./chatItem/chatItem";
import { SearchIcon } from "../../components/icons/search";
import { MessageTikIcon } from "../../components/icons/messageTik";
import { MessageSendIcon } from "../../components/icons/messageSend";
import { MessagePinIcon } from "../../components/icons/messagePin";
import { chatList as chatList } from "./mock";
import {
  chatItemInterface,
  infoInterface,
} from "../../interfaces/chatInterfaces";

Handlebars.registerHelper(
  "chatListHelper",
  function (arr: Array<chatItemInterface>) {
    return arr
      .map((item) => ChatItem(item))
      .reduce((prev: string, item: string) => prev + item);
  }
);

const info = (): (() => infoInterface) => {
  return tmpl({
    pinIcon: MessagePinIcon,
    sendIcon: MessageSendIcon,
    tikIcon: MessageTikIcon,
    chatList: chatList,
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
export const Chat = (): string => {
  const template = Handlebars.compile(info());

  return template({});
};
