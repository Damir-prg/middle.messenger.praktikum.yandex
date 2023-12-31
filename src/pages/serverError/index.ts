import Handlebars from 'handlebars';
import { errorStatuses } from 'shared/constants';
import { ErrorPageLayout } from 'features/index';

const { status, message } = errorStatuses.serverError;

export const PageServerError = () => {
  return Handlebars.compile(ErrorPageLayout)({ status, message });
};
