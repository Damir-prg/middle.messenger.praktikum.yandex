import './index.scss';
import { initialComponents } from 'shared/lib';
import { PageServerError } from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = PageServerError();
