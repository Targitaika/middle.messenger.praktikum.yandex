import Block from "../../services/Component";
import tmpl from "./profile.hbs";
import "./profile.css";
import Field from "../../components/field";
import Button from "../../components/button";
import { fieldList } from "../home/modules/signin/mock";
import fieldInterface from "../../interfaces/fieldInterface";

interface ProfileProps {
  fields: string;
  profileImg: string;
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);
  }

  changeDataClick = (x: string): void => {
    console.log("Change data", x);
  };

  changePasswordClick = (x: string): void => {
    console.log("Change password", x);
  };

  saveClick = (x: string): void => {
    console.log("save", x);
  };

  logoutClick = (x: string): void => {
    console.log("logout", x);
  };

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
        console.log(field);
        return field.getContent()?.outerHTML;
      })
      .join("");

    return this.compile(tmpl, {
      ...this.props,
      profileImg:
        this.props.profileImg ||
        "http://sun9-44.userapi.com/impf/4E3j4SGPX2aFmmus-akOKZhswIbMDiI05Jyv6Q/DaZxg4wnOrw.jpg?size=604x604&quality=96&sign=87f803e3ec2b022b16518b613af7bd99&type=album",
      fields: fields,
    });
  }

  protected initChildren() {
    this.children.name = new Field({
      name: "profile",
      label: "Логин",
      placeholder: "Ваш логин",
    });

    this.children.saveBtn = new Button({
      text: "Сохранить",
      events: { click: () => this.saveClick("") },
    });

    this.children.changeDataBtn = new Button({
      text: "Изменить данные",
      className: "btn_text",
      events: { click: () => this.changeDataClick("") },
    });

    this.children.changePasswordBtn = new Button({
      text: "Изменить пароль",
      className: "btn_text",
      events: { click: () => this.changePasswordClick("") },
    });

    this.children.logOutBtn = new Button({
      text: "Выйти",
      className: "btn_text btn_red",
      events: { click: () => this.logoutClick("") },
    });
  }
}
