import {
  AuthorizePage,
  UnselectedChatsPage,
  LoginPage,
  SelectedChatPage,
  PageNotFounded,
  PageServerError,
  ProfileEditPage,
  ProfilePage,
  ProfilePasswordsPage,
} from 'pages/index';
import { initialComponents } from 'shared/lib';

initialComponents();

export const Routes = {
  auth: AuthorizePage(),
  unselectedChat: UnselectedChatsPage(),
  selectedChat: SelectedChatPage(),
  login: LoginPage(),
  notFounded: PageNotFounded(),
  serverError: PageServerError(),
  profileDataEdit: ProfileEditPage(),
  profilePasswordsEdit: ProfilePasswordsPage(),
  profile: ProfilePage(),
};
