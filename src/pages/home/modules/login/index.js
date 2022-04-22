import Handlebars from "handlebars";
import tmpl from './login.hbs';
import * as styles from './login.css';
import {Button} from "../../../../components/button";
import {Field} from "../../../../components/field";

const login = tmpl({
    h1: 'Вход',
    name: Field({name: 'name', label: 'Логин', placeholder: 'Ваш логин'}),
    password: Field({name: 'password', label: 'Ваш пароль', placeholder: '******', type: 'password'}),
    noAccountText: 'Нет аккаунта?',
    btn: Button({className: 'regular', text: 'Авторизация'}),
})
export const Login = (data) => {
    const template = Handlebars.compile(login);
    return template({data})
}