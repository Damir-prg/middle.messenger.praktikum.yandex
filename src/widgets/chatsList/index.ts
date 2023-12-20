import Handlebars from 'handlebars';
export { default as ChatsList } from './chatsList.hbs?raw';

const chats = new Array(20).fill({
  userName: 'Иван',
  lastMessage: 'Какое-то сообщение',
  time: '10:27',
  unreadedCount: 5,
});

Handlebars.registerHelper('chats', () => chats);
