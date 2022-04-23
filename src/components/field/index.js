import Handlebars from "handlebars";
import tmpl from './field.hbs';
import './field.css';
import {ChatItem} from "../../pages/chat/chatItem/chatItem";

const field = (name, label, placeholder = "", type = 'text', icon = "") => {
    let customStyles = '';

    if (label === undefined) {
        if (name === undefined) {
            name = "Name"
        }
        label = name
    }
    if (name === undefined) {
        name = label
    }

    if (type === 'search') {
        type = 'text';
        label = '';
        customStyles = 'search-input';
    }
    if (type === 'send-message') {
        type = 'text';
        label = '';
        customStyles = 'send-message';
    }
    Handlebars.registerHelper("labelShow", function (name, label) {
        if (label.length) {
            return new Handlebars.SafeString("<label class='label' for='" + name + "'>" + label + "</label>");
        }
    });
    return tmpl({
        name: name,
        label: label,
        placeholder: placeholder,
        type: type,
        customStyles: customStyles,
        icon: icon
    })
}
export const Field = (data) => {
    const template = Handlebars.compile(field(data.name, data.label, data.placeholder, data.type, data.icon));
    return template({data})
}