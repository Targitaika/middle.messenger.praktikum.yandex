import Handlebars from "handlebars";
import tmpl from './chat.hbs';
import './chat.css';

export const Chat = (data) => {
    const template = Handlebars.compile(tmpl());
    return template({data})
}