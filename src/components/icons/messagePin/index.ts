import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./index.hbs";

export const MessagePinIcon = () => {
  const template = Handlebars.compile(tmpl());

  return template({});
};
