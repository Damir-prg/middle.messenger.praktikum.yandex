import './index.scss';
import { initialComponents } from 'shared/lib';
import {
  ChatsPage,
  AuthorizePage,
  LoginPage,
  PageNotFounded,
  PageServerError,
  ProfileEditPage,
  ProfilePage,
  ProfilePasswordsPage,
} from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ProfilePage();
