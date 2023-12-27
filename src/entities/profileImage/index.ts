import Handlebars from 'handlebars';

export { default as ProfileImage } from './profileImage.hbs?raw';

Handlebars.registerHelper('profile', () => ({ username: 'Иван' }));
