import Handlebars from "handlebars";
import tmpl from './search.hbs';

export const SearchIcon = (data) => {
    const template = Handlebars.compile(tmpl(data));
    return template({data})
}