import Handlebars from 'handlebars';
import { default as WelcomePageHbs } from './welcomePage.hbs?raw';

export const WelcomePage = () => {
  return Handlebars.compile(WelcomePageHbs)({});
};
