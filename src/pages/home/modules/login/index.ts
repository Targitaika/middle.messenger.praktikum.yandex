import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./login.hbs";
import "./login.css";
import { Button } from "../../../../components/button";
import { Field } from "../../../../components/field";

const login = tmpl({
  h1: "Вход",
  name: Field({ name: "login", label: "Логин", placeholder: "Ваш логин" }),
  password: Field({
    name: "password",
    label: "Ваш пароль",
    placeholder: "******",
    type: "password",
  }),
  noAccountText: "Нет аккаунта?",
  btn: Button({ className: "regular", text: "Вход" }),
});
export const Login = () => {
  const template = Handlebars.compile(login);

  return template({});
};
