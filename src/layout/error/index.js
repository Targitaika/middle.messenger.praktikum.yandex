import Handlebars from "handlebars";
import tmpl from "./error.hbs";
import "./error.css";

let errorData = (title, text, link = "#", linkText = "Назад к чатам") => {
  return tmpl({
    title: title,
    text: text,
    link: link,
    linkText: linkText,
  });
};

export const ErrorLayout = (data) => {
  const template = Handlebars.compile(
    errorData(data.title, data.text, data.link, data.linkText)
  );
  return template({ data });
};
