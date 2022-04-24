import Handlebars from "handlebars";
import { ErrorLayout } from "../../layout/error";

const error404 = {
  title: "404",
  text: "Не туда попали",
  linkText: "Назад к чатам",
};

export const Error404 = (data) => {
  const template = Handlebars.compile(ErrorLayout(error404));

  return template({ data });
};
