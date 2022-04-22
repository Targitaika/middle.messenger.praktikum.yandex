import * as Handlebars from "handlebars";
import tmpl from "./home.hbs";
import "./home.css";

export function Home(data) {
  const template = Handlebars.compile(tmpl());
  return template({ data });
}
