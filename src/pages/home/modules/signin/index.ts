export { Signin as default } from "./signin";

// import * as Handlebars from "handlebars";
//
// import tmpl from "./signin.hbs";
// import "./signin.css";
// import { Button } from "../../../../components/button";
// import { Field } from "../../../../components/field";
// import fieldInterface from "../../../../interfaces/fieldInterface";
// import { fieldList } from "./mock";
//
// Handlebars.registerHelper(
//   "fieldListHelper",
//   function (arr: Array<fieldInterface>) {
//     return arr.map((item) => Field(item)).reduce((prev, item) => prev + item);
//   }
// );
//
// const signin: string = tmpl({
//   h1: "Регистрация",
//   label: "Логин",
//   fields: fieldList,
//   linkText: "Войти",
//   btn: Button({ className: "regular", text: "Зарегистрироваться" }),
// });
// export const Signin = (): string => {
//   const template = Handlebars.compile(signin);
//
//   return template({});
// };
