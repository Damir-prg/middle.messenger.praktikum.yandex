import { routes } from 'app/withRoutes';

export const navigate = (pageName: keyof typeof routes) => {
  const root = document.getElementById('app');
  const Page = routes[pageName];
  root!.innerHTML = '';
  root?.append(new Page().getContent()!);
};
