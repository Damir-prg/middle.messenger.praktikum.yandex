import './index.scss';
import { initialComponents } from 'shared/lib';
import { ProfilePage } from './pages';
console.log('first');

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ProfilePage();
