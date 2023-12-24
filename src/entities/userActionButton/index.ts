import Handlebars from 'handlebars';
import * as Assets from './assets';

for (const [name, asset] of Object.entries(Assets)) {
  Handlebars.registerPartial(name, asset);
}

export { default as UserActionButton } from './userActionButton.hbs?raw';
