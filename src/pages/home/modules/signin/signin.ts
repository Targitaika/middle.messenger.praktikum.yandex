import './signin.css';
import Field from '@components/field';
import Button from '@components/button';
import { router } from 'Main';
import AuthController from '@components/controllers/AuthController';
import Block from '@services/Component';
import { validateForm, isValidToSend } from '@services/validation';
import * as tmpl from './signin.hbs';
import { signInInterface } from './signin.api';
import { fieldList } from './mock';

interface SigninProps {
  h1?: string;
  noAccountText?: string;
}

export const id = 0;

export class Signin extends Block {
  constructor(props: SigninProps) {
    super(props);
    this.props.form = {};
  }

  async onSignIn(data: any) {
    try {
      await AuthController.singin(data);
    } catch (e) {
      console.error(e);
    }
  }

  handleBtn(form: signInInterface) {
    if (isValidToSend(form, 0)) {
      this.onSignIn(form);
    }
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      h1: 'Регистрация',
      label: 'Логин',
      linkText: 'Войти',
    });
  }

  protected initChildren() {
    this.children.registerButton = new Button({
      className: 'regular',
      text: 'Зарегистрироваться',
      events: {
        click: () => this.handleBtn(this.props.form),
      },
    });

    this.children.loginButton = new Button({
      className: 'btn_text',
      text: 'Войти',
      events: {
        click: () => router.go('/'),
      },
    });

    fieldList.forEach((_, index) => {
      this.children[`field-${index}`] = new Field({
        label: fieldList[index].label,
        name: fieldList[index].name,
        placeholder: fieldList[index].placeholder,
        type: fieldList[index].type,
        events: {
          change: (x) => {
            x
              && Object.assign(this.props.form, {
                [x.target.name]: x.target.value,
              });
          },
          blur: (x) => validateForm(x),
        },
      });
    });
  }
}
