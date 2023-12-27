import { TErrorStatusList } from './types';

export const errorStatuses: TErrorStatusList = {
  pageNotFounded: {
    status: 404,
    message: 'Не туда попали',
  },
  serverError: {
    status: 500,
    message: 'Мы уже фиксим',
  },
};
