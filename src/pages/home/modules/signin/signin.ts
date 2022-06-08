import Block from '../../../../services/Component';
import tmpl from './signin.hbs';
import './signin.css';
import Field from '../../../../components/field';
import Button from '../../../../components/button';
import { fieldList } from './mock';
import { validateForm, validation } from '../../../../services/validation';
import SigninApi from './signin.api';
import { router } from '../../../../../main';

interface SigninProps {
  h1?: string;
  noAccountText?: string;
}

const signApi = new SigninApi();

export class Signin extends Block {
  constructor(props: SigninProps) {
    super(props);
    this.props.form = {};
  }

  handleBtn(form) {
    const isValidToSend = (formData: {}): boolean => {
      const entries = Object.entries(formData);
      if (entries.length < 7) {
        return false;
      }
      for (let i = 0; i < entries.length; i++) {
        if (!validation(entries[i][0], entries[i][1])) {
          return false;
        }
      }

      return true;
    };
    if (isValidToSend(form)) {
      signApi
        .create(form)
        .then((r: any) => {
          if (r.response === 'OK') {
            router.go('/messenger');
          } else {
            throw new Error('Wrong request');
          }
        })
        .catch((err) => {
          alert(err);
        });
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
    this.children.btn = new Button({
      className: 'regular',
      text: 'Зарегистрироваться',
      events: {
        click: () => this.handleBtn(this.props.form),
      },
    });

    this.children.btn2 = new Button({
      className: 'btn_text',
      text: 'Войти',
      events: {
        click: () => router.go('/'),
      },
    });

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
  }
}
