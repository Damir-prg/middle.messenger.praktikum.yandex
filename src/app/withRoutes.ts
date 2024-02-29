import AuthLogin from 'pages/authLogin';
import AuthRegister from 'pages/authRegister';
import Chats from 'pages/chats';
import Error404 from 'pages/error404';
import Error500 from 'pages/error500';
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
