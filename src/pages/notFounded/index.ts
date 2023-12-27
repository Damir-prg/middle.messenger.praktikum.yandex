import Handlebars from 'handlebars';
import { errorStatuses } from 'shared/constants';
import { ErrorPageLayout } from 'features/index';

const { status, message } = errorStatuses.pageNotFounded;

export const PageNotFounded = () => {
  return Handlebars.compile(ErrorPageLayout)({ status, message });
};
