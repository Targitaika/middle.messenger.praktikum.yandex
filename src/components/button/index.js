import Handlebars from "handlebars";
import tmpl from './button.hbs';
import * as styles from './button.css';

const button = (data) => tmpl({
    className: data.className,
    text: data.text,
})

export const Button = (data) => {
    const template = Handlebars.compile(button(data));
    return template({data})
}