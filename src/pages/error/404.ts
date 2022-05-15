import * as Handlebars from "handlebars";
import { ErrorLayout } from "../../layout/error";
import errorInterface from "../../interfaces/errorInterface";

const error404 = {
  title: "404",
  text: "Не туда попали",
  linkText: "Назад к чатам",
};

export const Error404 = (data: errorInterface): string => {
  const template = Handlebars.compile(ErrorLayout(error404));

  return template({ data });
};
