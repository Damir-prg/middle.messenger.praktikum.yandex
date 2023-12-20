import './index.scss';
import { initialComponents } from 'shared/lib';
import { ChatsPage } from './pages';

initialComponents();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ChatsPage();
