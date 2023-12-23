import Handlebars from 'handlebars';
import * as Assets from './assets';

Object.entries(Assets).forEach(([name, asset]) => {
  Handlebars.registerPartial(name, asset);
});

export { default as AttachButton } from './attachButton.hbs?raw';
