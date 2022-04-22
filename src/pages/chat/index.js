import Handlebars from "handlebars";
import tmpl from './chat.hbs';
import './chat.css';
import {Field} from "../../components/field";

const info = (data) => {
    return tmpl({
        searchInput: Field({name: 'search', label: '', placeholder: 'Поиск', type: 'search'}),
        messageInput: Field({name: 'dsa'}),
    })
}

export const Chat = (data) => {
    const template = Handlebars.compile(info(data));
    return template({data})
}