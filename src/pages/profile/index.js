import Handlebars from "handlebars";
import tmpl from './profile.hbs';
import './profile.css';
import {Button} from "../../components/button";
import {Field} from "../../components/field";

const list = [{
    label: "Почта",
    name: "email",
    text: "pochta@yandex.ru",
    type: "input_profile",
}, {
    label: "Логин",
    name: "login",
    text: "ivanivanov",
    type: "input_profile",
}, {
    label: "Имя",
    name: "first_name",
    text: "Иван",
    type: "input_profile",
}, {
    label: "Фамилия",
    name: "second_name",
    text: "Иванов",
    type: "input_profile",
}, {
    label: "Имя в чате",
    name: "display_name",
    text: "Иван",
    type: "input_profile",
}, {
    label: "Телефон",
    name: "phone",
    text: "+7 (909) 967 30 30",
    type: "input_profile",
},];

Handlebars.registerHelper("listHelper", function (arr) {
    return arr.reduce((prev, item) => {
        if (typeof prev === 'object') {
            prev = Field(prev) + Field(item);
        } else {
            prev = prev + Field(item);
        }
        return prev
    })
});

const info = (data) => {
    return tmpl({
        img: "http://sun9-44.userapi.com/impf/4E3j4SGPX2aFmmus-akOKZhswIbMDiI05Jyv6Q/DaZxg4wnOrw.jpg?size=604x604&quality=96&sign=87f803e3ec2b022b16518b613af7bd99&type=album",
        changeData: Button({text: "Изменить данные", className: "btn_text"}),
        changePassword: Button({text: "Изменить пароль", className: "btn_text"}),
        logout: Button({text: "Выйти", className: "btn_text btn_red"}),
        save: Button({text: "Сохранить"}),
        fieldList: list,
    })
}

export const Profile = (data) => {
    const template = Handlebars.compile(info(data));
    return template({data})
}