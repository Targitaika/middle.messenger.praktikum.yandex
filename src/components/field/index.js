import Handlebars from "handlebars";
import tmpl from './field.hbs';
import './field.css';

const field = (name, label, placeholder = "", type = "text") => {
    if (label === undefined) {
        console.log('labelundefined');
        label = name
    }
    if (name === undefined) {
        console.log('nameundefined');
        name = label
    }
    return tmpl({
        name: name,
        label: label,
        placeholder: placeholder,
        type: type,
    })
}
export const Field = (data) => {
    const template = Handlebars.compile(field(data.name, data.label, data.placeholder, data.type));
    return template({data})
}