import Block from '../../services/Component';
import tmpl from './profile.hbs';
import './profile.css';
import Field from '../../components/field';
import Button from '../../components/button';
import { fieldList } from '../home/modules/signin/mock';
import { validateForm, isValidToSend } from '../../services/validation';

import AuthController from '../../components/controllers/AuthController';

interface ProfileProps {
  fields?: string;
  profileImg?: string;
}

export class Profile extends Block {
  constructor(props: ProfileProps) {
    console.log('props', props);
    super(props);
    this.props.form = {
      email: props.email,
      first_name: props.first_name,
      id: props.id,
      login: props.login,
      phone: props.phone,
      second_name: props.second_name,
    };
  }

  changeDataClick = (x: string): void => {
    console.log('Change data', x);
  };

  changePasswordClick = (x: string): void => {
    console.log('Change password', x);
  };

  handleFieldChange = (item) => {
    Object.assign(this.props.form, { [item.target.name]: item.target.value });
  };

  saveClick = (form): void => {
    if (isValidToSend(form)) {
      // profileApi.updateUserProfile(form);
    }
  };

  logoutClick = (): void => {
    console.log('click');
    AuthController.logout();
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
      const value = this.props[fieldList[i].name];
      this.children[`field-${i}`] = new Field({
        label: fieldList[i].label,
        name: fieldList[i].name,
        placeholder: fieldList[i].placeholder,
        type: fieldList[i].type,
        value,
        events: {
          change: (x) => this.handleFieldChange(x),
          blur: (x) => validateForm(x),
        },
      });
    }

    this.children.saveBtn = new Button({
      text: 'Сохранить',
      events: { click: () => this.saveClick(this.props.form) },
    });

    this.children.changeDataBtn = new Button({
      text: 'Изменить данные',
      className: 'btn_text',
      events: { click: this.changeDataClick },
    });

    this.children.changePasswordBtn = new Button({
      text: 'Изменить пароль',
      className: 'btn_text',
      events: { click: this.changePasswordClick },
    });

    this.children.logOutBtn = new Button({
      text: 'Выйти',
      className: 'btn_text btn_red',
      events: { click: () => this.logoutClick() },
    });
  }
}
