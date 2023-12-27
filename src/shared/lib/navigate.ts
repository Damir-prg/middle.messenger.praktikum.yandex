import { Routes } from 'app/routes';

const routeHandler = (page: string): string => {
  const choisedRoute = Routes[page as keyof typeof Routes];

  if (choisedRoute === undefined) {
    return Routes['notFounded'];
  }

  return choisedRoute;
};

export function navigate(page: string) {
  const container = document.getElementById('app')!;
  container.innerHTML = routeHandler(page);
}
