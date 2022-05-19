import Block from "../../../../services/Component";
import tmpl from "./login.hbs";
import "./login.css";
import Field from "../../../../components/field";
import Button from "../../../../components/button";

interface LoginProps {
  h1?: string;
  noAccountText?: string;
}

export class Login extends Block {
  constructor(props: LoginProps) {
    super(props);
    this.props.form = {};
  }

  sendForm() {
    return console.log(this.props.form);
  }

  completeForm(x: any) {
    return Object.assign(this.props.form, { [x.target.name]: x.target.value });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      h1: "Вход",
      noAccountText: "Нет аккаунта?",
    });
  }

  protected initChildren() {
    this.children.password = new Field({
      name: "password",
      label: "Ваш пароль",
      placeholder: "******",
      type: "password",
      events: {
        keydown: (x) => this.completeForm(x),
      },
    });

    this.children.name = new Field({
      name: "login",
      label: "Логин",
      placeholder: "Ваш логин",
      events: {
        keydown: (x) => this.completeForm(x),
      },
    });

    this.children.btn = new Button({
      className: "regular",
      text: "Вход",
      events: {
        click: () => this.sendForm(),
      },
    });
  }
}
