import Handlebars from "handlebars";
import tmpl from './field.hbs';
import './field.css';

const field = (name, label, placeholder = "", type = 'text', icon = "", value = "", readonly = false) => {
    let customStyles = '';
    readonly ? readonly === "readonly" : "";
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
    if (type === 'input_profile') {
        type = 'text';
        customStyles = 'input_profile';
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
        icon: icon,
        value: value,
        readonly: readonly,
    })
}
export const Field = (data) => {
    const template = Handlebars.compile(field(data.name, data.label, data.placeholder, data.type, data.icon, data.text, data.readonly));
    return template({data})
}