import Handlebars from 'handlebars';
import { default as SelectedChatPageHbs } from './selectedChatPage.hbs?raw';
import { navigate } from 'shared/lib';

export const SelectedChatPage = () => {
  const KEY_ESC = 'Escape';
  document.onkeydown = (event: KeyboardEvent) => {
    if (document.getElementById('selectedChat') && event.key === KEY_ESC) {
      navigate('unselectedChat');
    }
  };
  return Handlebars.compile(SelectedChatPageHbs)({ userName: 'Вадим', messages: [{ message: '1' }, { message: '2' }] });
};
