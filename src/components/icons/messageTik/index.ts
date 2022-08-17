import * as Handlebars from 'handlebars';

import * as tmpl from './index.hbs';

export const MessageTikIcon = () => {
  const template = Handlebars.compile(tmpl());

  return template({});
};
