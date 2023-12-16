import { TErrorStatusList } from './types';

export const errorStatuses: TErrorStatusList = {
  pageNotFounded: {
    status: 404,
    message: 'Кажется такой страницы нет',
    backButtonLabel: 'Вернуться на главную страницу',
  },
  serverError: {
    status: 500,
    message: 'Не беспокойтесь, мы уже чиним :)',
    backButtonLabel: 'Вернуться на главную страницу',
  },
};
