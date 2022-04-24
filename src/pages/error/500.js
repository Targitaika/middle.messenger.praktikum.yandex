import Handlebars from "handlebars";
import { ErrorLayout } from "../../layout/error";

const error500 = {
  title: "500",
  text: "Мы уже фиксим",
  linkText: "Назад к чатам",
};

export const Error500 = (data) => {
  const template = Handlebars.compile(ErrorLayout(error500));

  return template({ data });
};
