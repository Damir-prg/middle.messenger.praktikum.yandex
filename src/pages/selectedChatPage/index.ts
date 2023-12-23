import Handlebars from 'handlebars';
import { default as SelectedChatPageHbs } from './selectedChatPage.hbs?raw';

export const SelectedChatPage = () => {
  return Handlebars.compile(SelectedChatPageHbs)({ userName: 'Вадим' });
};
