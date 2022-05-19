import * as Handlebars from "handlebars";

import tmpl from "./error.hbs";
import "./error.css";
import errorInterface from "../../interfaces/errorInterface";

let errorData = (
  title: string,
  text: string,
  link: string = "#",
  linkText: string = "Назад к чатам"
) => {
  return tmpl({
    title: title,
    text: text,
    link: link,
    linkText: linkText,
  });
};

export const ErrorLayout = (data: errorInterface) => {
  const template = Handlebars.compile(
    errorData(data.title, data.text, data.link, data.linkText)
  );

  return template({ data });
};
