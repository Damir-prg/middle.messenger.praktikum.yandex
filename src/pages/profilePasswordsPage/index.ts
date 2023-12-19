import Handlebars from 'handlebars';
import { default as ProfilePasswordsPageHbs } from './profilePasswordsPage.hbs?raw';

export const ProfilePasswordsPage = () => {
  return Handlebars.compile(ProfilePasswordsPageHbs)({});
};
