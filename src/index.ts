import './index.scss';
import { navigate } from 'app/routes';

document.addEventListener('DOMContentLoaded', () => navigate('selectedChat'));

document.addEventListener('click', (event) => {
  const target = event.target as HTMLButtonElement;

  const page = target?.getAttribute('data-navigate');

  if (page) {
    navigate(page);

    event.preventDefault();
    event.stopImmediatePropagation();
  }
});
