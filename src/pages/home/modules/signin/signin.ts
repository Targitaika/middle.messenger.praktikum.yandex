import Block from "../../../../services/Component";
import tmpl from "./signin.hbs";
import "./signin.css";
import Field from "../../../../components/field";
import Button from "../../../../components/button";
import { fieldList } from "./mock";
import fieldInterface from "../../../../interfaces/fieldInterface";

interface SigninProps {
  h1: string;
  noAccountText: string;
}

export class Signin extends Block {
  constructor(props: SigninProps) {
    super(props);
  }

  render() {
    const fields = fieldList
      .map((item: fieldInterface) => {
        if (!item.type) {
          item.type = "";
        }
        let field = new Field({
          label: item.label,
          name: item.name,
          placeholder: item.placeholder,
          type: item.type,
        });

        return field.getContent()?.outerHTML;
      })
      .join("");

    return this.compile(tmpl, {
      ...this.props,
      h1: "Регистрация",
      label: "Логин",
      linkText: "Войти",
      fields: fields,
    });
  }

  protected initChildren() {
    this.children.btn = new Button({
      className: "regular",
      text: "Зарегистрироваться",
    });
  }
}
