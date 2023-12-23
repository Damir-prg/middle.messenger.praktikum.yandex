import './index.scss';
import { routeHandler } from 'app/routes';

function navigate(page: string) {
  console.log('heelooo');
  const container = document.getElementById('app')!;
  container.innerHTML = routeHandler(page);
}

document.addEventListener('DOMContentLoaded', () => navigate('profile'));

document.addEventListener('click', (event) => {
  const target = event.target as HTMLButtonElement;

  const page = target?.getAttribute('data-navigate');

  if (page) {
    navigate(page);

    event.preventDefault();
    event.stopImmediatePropagation();
  }
});
