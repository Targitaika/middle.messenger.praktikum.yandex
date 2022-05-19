import Block from "../../../../services/Component";
import tmpl from "./signin.hbs";
import "./signin.css";
import Field from "../../../../components/field";
import Button from "../../../../components/button";
import { fieldList } from "./mock";

interface SigninProps {
  h1?: string;
  noAccountText?: string;
}

export class Signin extends Block {
  constructor(props: SigninProps) {
    super(props);
    this.props.form = {};
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      h1: "Регистрация",
      label: "Логин",
      linkText: "Войти",
    });
  }

  protected initChildren() {
    this.children.btn = new Button({
      className: "regular",
      text: "Зарегистрироваться",
      events: {
        click: () => console.log(this.props.form),
      },
    });
    for (let i = 0; i < fieldList.length; i++) {
      this.children[`field-${i}`] = new Field({
        label: fieldList[i].label,
        name: fieldList[i].name,
        placeholder: fieldList[i].placeholder,
        type: fieldList[i].type,
        events: {
          keydown: (x) => {
            Object.assign(this.props.form, { [x.target.name]: x.target.value });
          },
        },
      });
    }
  }
}
