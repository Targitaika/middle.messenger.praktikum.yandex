import * as Handlebars from "handlebars";
import tmpl from "./index.hbs";

export const MessagePinIcon = (data) => {
  const template = Handlebars.compile(tmpl(data));

  return template({ data });
};
