import Handlebars from "handlebars";
import tmpl from "./chat.hbs";
import "./chat.css";
import { Field } from "../../components/field";
import { ChatItem } from "./chatItem/chatItem";
import { SearchIcon } from "../../components/icons/search";
import { MessageTikIcon } from "../../components/icons/messageTik";
import { MessageSendIcon } from "../../components/icons/messageSend";
import { MessagePinIcon } from "../../components/icons/messagePin";
import { tempData } from "./mock";

Handlebars.registerHelper("chatListHelper", function (arr) {
  return arr.reduce((prev, item) => {
    if (typeof prev === "object") {
      prev = ChatItem(prev) + ChatItem(item);
    } else {
      prev = prev + ChatItem(item);
    }

    return prev;
  });
});

const info = (data) => {
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

export const Chat = (data) => {
  const template = Handlebars.compile(info(data));

  return template({ data });
};
