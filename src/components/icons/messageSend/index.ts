import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./index.hbs";

export const MessageSendIcon = (data) => {
  const template = Handlebars.compile(tmpl(data));

  return template({ data });
};
