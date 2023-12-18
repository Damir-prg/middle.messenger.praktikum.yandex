import './index.scss';
import { initialComponents } from 'shared/lib';
import { PageServerError, LoginPage, AuthorizePage, ProfileEditPage } from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ProfileEditPage();
