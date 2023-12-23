import Handlebars from 'handlebars';
import { default as UnselectedChatsPageHbs } from './unselectedChatPage.hbs?raw';

export const UnselectedChatsPage = () => {
  return Handlebars.compile(UnselectedChatsPageHbs)({});
};
