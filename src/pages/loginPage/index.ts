import Handlebars from 'handlebars';
import { default as LoginPageHbs } from './loginPage.hbs?raw';

export const LoginPage = () => {
  console.log(LoginPageHbs);
  return Handlebars.compile(LoginPageHbs)({});
};
