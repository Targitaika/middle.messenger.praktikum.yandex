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

const passwordList = [{
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
},]


const changeDataClick = (x) => {
    console.log('Change data', x);
}

const changePasswordClick = (x) => {
    console.log('Change password', x);
}

const saveClick = (x) => {
    console.log('save', x);
}

const logoutClick = (x) => {
    console.log('logout', x);
}

const buttonsListChange = [
    {text: "Изменить данные", className: "btn_text", onclick: changeDataClick},
    {text: "Изменить пароль", className: "btn_text", onclick: changePasswordClick},
    {text: "Выйти", className: "btn_text btn_red", onclick: logoutClick},
]

const buttonsListSave = [
    {text: "Сохранить", onclick: saveClick}
]

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

Handlebars.registerHelper("btnsHelper", function (arr) {
    const safeString = (x) => new Handlebars.SafeString("<div class='profile-page__btn'>" + x + "</div>");
    return arr.reduce((prev, item) => {
        if (typeof prev === 'object') {
            prev = safeString(Button(prev)) + safeString(Button(item));
        } else {
            prev = prev + safeString(Button(item));
        }
        return prev
    })
});

const info = (data) => {
    return tmpl({
        img: "http://sun9-44.userapi.com/impf/4E3j4SGPX2aFmmus-akOKZhswIbMDiI05Jyv6Q/DaZxg4wnOrw.jpg?size=604x604&quality=96&sign=87f803e3ec2b022b16518b613af7bd99&type=album",
        buttons: buttonsListChange,
        fieldList: list,
    })
}

export const Profile = (data) => {
    const template = Handlebars.compile(info(data));
    return template({data})
}