import Handlebars from 'handlebars';
import { default as AuthorizePageHbs } from './authorizePage.hbs?raw';

export const AuthorizePage = () => {
  return Handlebars.compile(AuthorizePageHbs)({});
};
