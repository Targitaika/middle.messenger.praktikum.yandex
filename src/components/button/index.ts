import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./button.hbs";
import "./button.css";
import buttonInterface from "../../interfaces/buttonInterface";

const button = (data: buttonInterface) => {
  if (data.className === undefined) {
    data.className = "regular";
  }
  return tmpl({
    className: data.className,
    text: data.text,
    onclick: data.onclick,
  });
};

export const Button = (data: buttonInterface) => {
  const template = Handlebars.compile(button(data));
  return template({ data });
};
