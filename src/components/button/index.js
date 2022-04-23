import Handlebars from "handlebars";
import tmpl from './button.hbs';
import './button.css';

const button = (data) => {
    if (data.className === undefined) {
        data.className = 'regular'
    }
    return tmpl({
        className: data.className,
        text: data.text,
        onclick: data.onclick,
    })
}

export const Button = (data) => {
    const template = Handlebars.compile(button(data));
    return template({data})
}