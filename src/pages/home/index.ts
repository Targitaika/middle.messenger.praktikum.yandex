import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./home.hbs";
import "./home.css";

export function Home(data: any): string {
  const template = Handlebars.compile(tmpl());

  return template({ data });
}
