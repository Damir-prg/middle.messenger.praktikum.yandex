import './index.scss';
import { initialComponents } from 'shared/lib';
import { PageServerError, LoginPage, AuthorizePage, ProfileEditPage, ProfilePasswordsPage, ProfilePage } from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ProfilePage();
