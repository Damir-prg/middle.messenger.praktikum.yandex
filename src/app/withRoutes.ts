import AuthLogin from 'pages/login';
import AuthRegister from 'pages/signUp';
import Chats from 'pages/messanger';
import Error404 from 'pages/notFound';
import Error500 from 'pages/serverError';
import Profile from 'pages/profile';
import Welcome from 'pages/welcome';

export const routes = {
  authLogin: AuthLogin,
  authRegister: AuthRegister,
  chats: Chats,
  error404: Error404,
  error500: Error500,
  profile: Profile,
  welcome: Welcome,
};
