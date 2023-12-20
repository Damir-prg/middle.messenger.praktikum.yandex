import Handlebars from 'handlebars';
import { default as ChatsPageHbs } from './chatsPage.hbs?raw';

export const ChatsPage = () => {
  return Handlebars.compile(ChatsPageHbs)({});
};
