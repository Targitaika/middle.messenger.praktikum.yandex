import Block from '../../../../services/Component';
import tmpl from './login.hbs';
import './login.css';
import Field from '../../../../components/field';
import Button from '../../../../components/button';
import { validateForm } from '../../../../services/validation';
import { router } from '../../../../../main';
import LoginApi from './login.api';
import { response } from 'express';

interface LoginProps {
  h1?: string;
  noAccountText?: string;
}

const loginApi = new LoginApi();

export class Login extends Block {
  constructor(props: LoginProps) {
    super(props);
    this.props.form = {};
  }

  sendForm() {
    loginApi
      .login(this.props.form)
      .then((r: any) => {
        if (r.response === 'OK') {
          router.go('/messenger');
        } else {
          throw new Error('Wrong name or password. Can use Koka123456');
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  completeForm(x: any) {
    return Object.assign(this.props.form, { [x.target.name]: x.target.value });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      h1: 'Вход',
      noAccountText: 'Нет аккаунта?',
    });
  }

  protected initChildren() {
    this.children.password = new Field({
      name: 'password',
      label: 'Ваш пароль',
      placeholder: '******',
      type: 'password',
      events: {
        change: (x) => this.completeForm(x),
        blur: (x) => validateForm(x),
      },
    });

    this.children.name = new Field({
      name: 'login',
      label: 'Логин',
      placeholder: 'Ваш логин',
      events: {
        change: (x) => this.completeForm(x),
        blur: (x) => validateForm(x),
      },
    });

    this.children.btn_text = new Button({
      className: 'btn_text',
      text: 'Нет аккаунта?',
      events: {
        click: () => router.go('/sign-up'),
      },
    });

    this.children.btn = new Button({
      className: 'regular',
      text: 'Вход',
      events: {
        click: () => this.sendForm(),
      },
    });
  }
}
