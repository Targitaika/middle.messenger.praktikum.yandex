import * as Handlebars from "handlebars";
// @ts-ignore
import tmpl from "./profile.hbs";
import "./profile.css";
import { Button } from "../../components/button";
import { list as list } from "./mock";
import buttonInterface from "../../interfaces/buttonInterface";
import fieldInterface from "../../interfaces/fieldInterface";
import { Field } from "../../components/field";

const changeDataClick = (x: string): void => {
  console.log("Change data", x);
};

const changePasswordClick = (x: string): void => {
  console.log("Change password", x);
};

// const saveClick = (x: string): void => {
//   console.log("save", x);
// };

const logoutClick = (x: string): void => {
  console.log("logout", x);
};

Handlebars.registerHelper(
  "fieldListHelper",
  function (arr: Array<fieldInterface>) {
    return arr.map((item) => Field(item)).reduce((prev, item) => prev + item);
  }
);

const buttonsListChange = [
  { text: "Изменить данные", className: "btn_text", onclick: changeDataClick },
  {
    text: "Изменить пароль",
    className: "btn_text",
    onclick: changePasswordClick,
  },
  { text: "Выйти", className: "btn_text btn_red", onclick: logoutClick },
];

// const buttonsListSave = [{ text: "Сохранить", onclick: saveClick }];

Handlebars.registerHelper("btnsHelper", function (arr: Array<buttonInterface>) {
  const safeString = (x: string) =>
    new Handlebars.SafeString("<div class='profile-page__btn'>" + x + "</div>");

  return arr
    .map((item) => safeString(Button(item)).toString())
    .reduce((prev: string, item: string) => {
      return prev + item;
    });
});

const info = (): string => {
  return tmpl({
    img: "http://sun9-44.userapi.com/impf/4E3j4SGPX2aFmmus-akOKZhswIbMDiI05Jyv6Q/DaZxg4wnOrw.jpg?size=604x604&quality=96&sign=87f803e3ec2b022b16518b613af7bd99&type=album",
    buttons: buttonsListChange,
    fieldList: list,
  });
};

export const Profile = () => {
  const template = Handlebars.compile(info());

  return template({});
};
