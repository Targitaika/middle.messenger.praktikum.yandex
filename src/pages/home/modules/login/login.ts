import Block from '@services/Component';
import './login.css';
import Field from '@components/field';
import Button from '@components/button';
import { validateForm } from '@services/validation';
import AuthController from '@components/controllers/AuthController';

import { router } from 'Main';
import * as tmpl from './login.hbs';

export class Login extends Block {
  constructor(props: any) {
    super(props);
    this.props.form = {};
  }

  sendForm(data: any) {
    AuthController.login(data).then(() => router.go('/messenger'));
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
        click: () => this.sendForm(this.props.form),
      },
    });
  }
}
