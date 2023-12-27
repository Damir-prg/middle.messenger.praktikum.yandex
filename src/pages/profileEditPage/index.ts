import Handlebars from 'handlebars';
import { default as ProfileEditPageHbs } from './profileEditPage.hbs?raw';

export const ProfileEditPage = () => {
  return Handlebars.compile(ProfileEditPageHbs)({});
};
