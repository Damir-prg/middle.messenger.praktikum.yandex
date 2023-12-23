import Handlebars from 'handlebars';
import * as Assets from './assets';

Object.entries(Assets).forEach(([name, asset]) => {
  Handlebars.registerPartial(name, asset);
});

export { default as UserActionButton } from './userActionButton.hbs?raw';
