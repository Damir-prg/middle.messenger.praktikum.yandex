import './index.scss';
import { initialComponents } from 'app/initialComponents';
import { initialRoutes, routes } from './app/withRoutes';
import { api } from 'shared/api';
import Router from 'shared/router/Router';
import { IChatsMainProps } from 'widgets/chatsMain';
import WebSocketTransport from 'shared/api/ws';

declare global {
  interface Window {
    updateChatList: () => void;

    onChangeChat: (data: IChatsMainProps) => void;
    messages?: any[];
    WebSocketTransport: WebSocketTransport;
  }
}

initialComponents();

initialRoutes();

document.addEventListener('DOMContentLoaded', async () => {
  window.WebSocketTransport = WebSocketTransport.getInstance();

  try {
    await api.userInfo();
  } catch (error) {
    Router.go(routes.login.route);
    return;
  }

  if (window.location.pathname === routes.login.route || window.location.pathname === routes.signUp.route) {
    Router.go(routes.messenger.route);
  }
});
