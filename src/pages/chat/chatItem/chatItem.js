import Handlebars from "handlebars";
import tmpl from './chatItem.hbs';
import './chatItem.css';

const info = (name, text, date, unread, src) => {
    return tmpl({
        name: name,
        text: text,
        date: date,
        unread: unread,
        src: src,
    })
}

export const ChatItem = (data) => {
    const template = Handlebars.compile(info(data.name, data.text, data.date, data.unread, data.src));
    return template({data})
}