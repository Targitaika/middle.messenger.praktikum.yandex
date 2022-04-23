import Handlebars from "handlebars";
import tmpl from './profileListItem.hbs';
import './profileListItem.css';


const info = (data) => {
    return tmpl({
        name: data.name,
        text: data.text,
    })
}

export const ProfileListItem = (data) => {
    const template = Handlebars.compile(info(data));
    return template({data})
}