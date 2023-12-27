import Handlebars from 'handlebars';
import * as Assets from './assets';

for (const [name, asset] of Object.entries(Assets)) {
  Handlebars.registerPartial(name, asset);
}

export { default as AttachButton } from './attachButton.hbs?raw';
