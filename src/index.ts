import './index.scss';
import { initialComponents } from 'app/initialComponents';
import { initialRoutes, routes } from './app/withRoutes';
import { api } from 'shared/api';
import Router from 'shared/router/Router';

initialComponents();

initialRoutes();

document.addEventListener('DOMContentLoaded', async () => {
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
