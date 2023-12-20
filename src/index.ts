import './index.scss';
import { initialComponents } from 'shared/lib';
import { ProfileEditPage } from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ProfileEditPage();
