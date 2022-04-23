import Handlebars from "handlebars";
import tmpl from './profile.hbs';
import './profile.css';
import {Button} from "../../components/button";
import {ProfileListItem} from "./profileListItem";

const list = [{
    name: "Почта",
    text: "pochta@yandex.ru",
}, {
    name: "Логин",
    text: "ivanivanov",
}, {
    name: "Имя",
    text: "Иван",
}, {
    name: "Фамилия",
    text: "Иванов",
}, {
    name: "Имя в чате",
    text: "Иван",
}, {
    name: "Телефон",
    text: "+7 (909) 967 30 30",
},];

Handlebars.registerHelper("listHelper", function (arr) {
    return arr.reduce((prev, item) => {
        if (typeof prev === 'object') {
            prev = ProfileListItem(prev) + ProfileListItem(item);
        } else {
            prev = prev + ProfileListItem(item);
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