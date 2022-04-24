import Handlebars from "handlebars";
import tmpl from "./chat.hbs";
import "./chat.css";
import {Field} from "../../components/field";
import {ChatItem} from "./chatItem/chatItem";
import {SearchIcon} from "../../components/icons/search";
import {MessageTikIcon} from "../../components/icons/messageTik";
import {MessageSendIcon} from "../../components/icons/messageSend";
import {MessagePinIcon} from "../../components/icons/messagePin";

const tempData = {
  chatList: [
    {
      name: "Андрей",
      text: "Изображение",
      date: "10:49",
      unread: "2",
      src: "https://i1.sndcdn.com/artworks-1W1ucUu0AroJKisi-8sy04w-t500x500.jpg",
    },
    {
      name: "Киноклуб",
      text: "Стикер",
      date: "12:00",
      unread: "",
      src: "https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg",
    },
  ],
};

Handlebars.registerHelper("listHelper", function (arr) {
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

  return template({data});
};
