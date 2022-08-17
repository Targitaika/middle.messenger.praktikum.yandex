import * as Handlebars from 'handlebars';

import * as tmpl from './index.hbs';

export const MessageSendIcon = () => {
  const template = Handlebars.compile(tmpl());

  return template({});
};
