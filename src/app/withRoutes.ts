import Login from 'pages/login';
import SignUp from 'pages/signUp';
import Messanger from 'pages/messanger';
import NotFound from 'pages/notFound';
import ServerError from 'pages/serverError';
import Profile from 'pages/profile';
import Welcome from 'pages/welcome';
import Router from 'shared/router/Router';

export const routes = {
  login: { content: Login, route: '/' },
  signUp: { content: SignUp, route: '/sign-up' },
  messenger: { content: Messanger, route: '/messenger' },
  notFound: { content: NotFound, route: '/not-found' },
  serverError: { content: ServerError, route: '/server-error' },
  profile: { content: Profile, route: '/profile' },
  welcome: { content: Welcome, route: '/welcome' },
};

export const initialRoutes = () => {
  Object.values(routes).forEach((value) => {
    const { route, content } = value;
    Router.use(route, content);
  });

  Router.start();
};
