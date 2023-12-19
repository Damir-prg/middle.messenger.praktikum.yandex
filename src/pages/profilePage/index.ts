import Handlebars from 'handlebars';
import { default as ProfilePageHbs } from './profilePage.hbs?raw';

export const ProfilePage = () => {
  return Handlebars.compile(ProfilePageHbs)({});
};
