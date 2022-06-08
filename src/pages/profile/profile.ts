import Block from '../../services/Component';
import tmpl from './profile.hbs';
import './profile.css';
import Field from '../../components/field';
import Button from '../../components/button';
import { fieldList } from '../home/modules/signin/mock';
import { validateForm } from '../../services/validation';

interface ProfileProps {
  fields?: string;
  profileImg?: string;
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);
    this.props.form = {};
  }

  changeDataClick = (x: string): void => {
    console.log('Change data', x);
  };

  changePasswordClick = (x: string): void => {
    console.log('Change password', x);
  };

  saveClick = (): void => {
    console.log('save');
  };

  logoutClick = (): void => {
    console.log('logoutClick');
    // profileApi.logout();
  };

  render() {
    return this.compile(tmpl, {
      ...this.props,
      profileImg:
        this.props.profileImg
        || 'http://sun9-44.userapi.com/impf/4E3j4SGPX2aFmmus-akOKZhswIbMDiI05Jyv6Q/DaZxg4wnOrw.jpg?size=604x604&quality=96&sign=87f803e3ec2b022b16518b613af7bd99&type=album',
    });
  }

  protected initChildren() {
    for (let i = 0; i < fieldList.length; i++) {
      this.children[`field-${i}`] = new Field({
        label: fieldList[i].label,
        name: fieldList[i].name,
        placeholder: fieldList[i].placeholder,
        type: fieldList[i].type,
        events: {
          change: (x) => {
            Object.assign(this.props.form, { [x.target.name]: x.target.value });
          },
          blur: (x) => validateForm(x),
        },
      });
    }

    this.children.saveBtn = new Button({
      text: 'Сохранить',
      events: { click: () => this.saveClick() },
    });

    this.children.changeDataBtn = new Button({
      text: 'Изменить данные',
      className: 'btn_text',
      events: { click: () => this.changeDataClick },
    });

    this.children.changePasswordBtn = new Button({
      text: 'Изменить пароль',
      className: 'btn_text',
      events: { click: () => this.changePasswordClick },
    });

    this.children.logOutBtn = new Button({
      text: 'Выйти',
      className: 'btn_text btn_red',
      events: { click: () => this.logoutClick },
    });
  }
}
