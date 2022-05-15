import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./chatItem.hbs";
import "./chatItem.css";
import { chatItemInterface } from "../../../interfaces/chatInterfaces";

const info = (
  name: string,
  text: string,
  date: string,
  unread: number,
  src: string
) => {
  return tmpl({
    name,
    text,
    date,
    unread,
    src,
  });
};

export const ChatItem = (data: chatItemInterface): string => {
  console.log(data);
  const template = Handlebars.compile(
    info(data.name, data.text, data.date, data.unread, data.src)
  );

  return template({ data });
};
