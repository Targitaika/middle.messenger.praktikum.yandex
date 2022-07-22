import Block from '../../services/Component';
import tmpl from './profile.hbs';
import './profile.css';
import Field from '../../components/field';
import Button from '../../components/button';
import { list as fieldList } from './mock';
import { validateForm, isValidToSend } from '../../services/validation';
import AuthController from '../../components/controllers/AuthController';
import ProfileController from '../../components/controllers/ProfileController';
import getCookie from '../../services/getCookie';
import { InputFile } from '../../components/inputFile/inputFile';

interface ProfileProps {
  fields?: string;
  profileImg?: string;
  email?: string;
  first_name?: string;
  login?: string;
  phone?: string;
  second_name?: string;
  display_name?: string;
}

export default class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);

    this.setProps({
      isReadonly: {
        email: false,
        first_name: false,
        id: false,
        login: false,
        phone: false,
        second_name: false,
      },
    });

    this.props.passwordData = {
      oldPassword: getCookie('password'),
      newPassword: '',
    };

    this.props.form = {
      email: props.email,
      first_name: props.first_name,
      login: props.login,
      phone: props.phone,
      second_name: props.second_name,
      display_name: props.display_name,
    };
  }

  changeDataClick = (x: string): void => {
    console.log('Change data', x);
  };

  changePasswordClick = (x: string): void => {
    ProfileController.updatePassword(x);
  };

  handleFieldChange = (item: any) => {
    if (item.target.name === 'password') {
      Object.assign(this.props.passwordData, {
        newPassword: item.target.value,
      });
    } else {
      Object.assign(this.props.form, { [item.target.name]: item.target.value });
    }
  };

  saveClick = (form: any): void => {
    if (isValidToSend(form, 6)) {
      ProfileController.updateProfile(form);
    } else {
      console.log('No valid to send');
    }
  };

  logoutClick = (): void => {
    AuthController.logout();
  };

  updateAvatar(e: any) {
    ProfileController.updateAvatar(e.target);
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      name: this.props.display_name || 'Иван Гачимучин',
      profileImg:
        `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`
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
        // isReadonly: this.props.isReadonly[fieldList[i].name],
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

    this.children.sendFile = new InputFile({
      className: 'avatarSendImg',
      events: { change: (e: any) => this.updateAvatar(e) },
    });

    this.children.changeDataBtn = new Button({
      text: 'Изменить данные',
      className: 'btn_text',
      events: { click: () => this.changeDataClick(this.props.passwordData) },
    });

    this.children.changePasswordBtn = new Button({
      text: 'Изменить пароль',
      className: 'btn_text',
      events: {
        click: () => this.changePasswordClick(this.props.passwordData),
      },
    });

    this.children.logOutBtn = new Button({
      text: 'Выйти',
      className: 'btn_text btn_red',
      events: { click: () => this.logoutClick() },
    });
  }
}
