import {
  AuthorizePage,
  ChatsPage,
  LoginPage,
  PageNotFounded,
  PageServerError,
  ProfileEditPage,
  ProfilePage,
  ProfilePasswordsPage,
} from 'pages/index';
import { initialComponents } from 'shared/lib';

initialComponents();

const Routes = {
  auth: AuthorizePage(),
  chats: ChatsPage(),
  login: LoginPage(),
  notFounded: PageNotFounded(),
  serverError: PageServerError(),
  profileDataEdit: ProfileEditPage(),
  profilePasswordsEdit: ProfilePasswordsPage(),
  profile: ProfilePage(),
};

export const routeHandler = (page: string): string => {
  const choisedRoute = Routes[page as keyof typeof Routes];

  if (choisedRoute === undefined) {
    return Routes['notFounded'];
  }

  return choisedRoute;
};
