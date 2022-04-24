import Handlebars from "handlebars";
import tmpl from "./signin.hbs";
import "./signin.css";
import { Button } from "../../../../components/button";
import { Field } from "../../../../components/field";

const fieldList = [
  {
    label: "Почта",
    name: "email",
    placeholder: "pochta@yandex.ru",
  },
  {
    label: "Логин",
    name: "login",
    placeholder: "ivanivanov",
  },
  {
    label: "Имя",
    name: "first_name",
    placeholder: "Иван",
  },
  {
    label: "Фамилия",
    name: "second_name",
    placeholder: "Иванов",
  },
  {
    label: "Телефон",
    name: "phone",
    placeholder: "+7 (909) 967 30 30",
  },
  {
    label: "Пароль",
    name: "password",
    placeholder: "******",
    type: "password",
  },
  {
    label: "Пароль (ещё раз)",
    name: "password-again",
    placeholder: "******",
    type: "password",
  },
];

Handlebars.registerHelper("fieldListHelper", function (arr) {
  return arr.reduce((prev, item) => {
    if (typeof prev !== "object") {
      prev = prev + Field(item);
    } else {
      prev = Field(item);
    }
    return prev;
  });
});

const signin = tmpl({
  h1: "Регистрация",
  label: "Логин",
  fields: fieldList,
  linkText: "Войти",
  btn: Button({ className: "regular", text: "Зарегистрироваться" }),
});
export const Signin = (data) => {
  const template = Handlebars.compile(signin);
  return template({ data });
};
