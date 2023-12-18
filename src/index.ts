import './index.scss';
import { initialComponents } from 'shared/lib';
import { PageServerError, LoginPage } from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = LoginPage();
