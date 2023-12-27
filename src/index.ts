import './index.scss';
import { navigate } from 'shared/lib';

document.addEventListener('DOMContentLoaded', () => navigate('welcome'));

document.addEventListener('click', (event) => {
  const target = event.target as HTMLButtonElement;

  const page = target?.getAttribute('data-navigate');

  if (page) {
    navigate(page);

    event.preventDefault();
    event.stopImmediatePropagation();
  }
});
