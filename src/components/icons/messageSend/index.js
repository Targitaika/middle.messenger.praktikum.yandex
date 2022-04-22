import * as Handlebars from "handlebars";
import tmpl from "./index.hbs";

export const MessageSendIcon = (data) => {
  const template = Handlebars.compile(tmpl(data));

  return template({ data });
};
