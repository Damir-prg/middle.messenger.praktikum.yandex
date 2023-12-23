import Handlebars from 'handlebars';
import { default as LoginPageHbs } from './loginPage.hbs?raw';

export const LoginPage = () => {
  return Handlebars.compile(LoginPageHbs)({});
};
