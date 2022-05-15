import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./index.hbs";

export const SearchIcon = () => {
  const template = Handlebars.compile(tmpl());

  return template({});
};
