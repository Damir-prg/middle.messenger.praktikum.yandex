import Handlebars from 'handlebars';
import { errorStatuses } from 'shared/constants';
import * as Entities from './entities';
import { PageNotFounded } from 'pages/index';
import './index.scss';

Object.entries(Entities).forEach(([name, entity]) => {
  Handlebars.registerPartial(name, entity);
});

const renderedButton = Handlebars.compile(Entities.ErrorPageLayout)({ ...errorStatuses.pageNotFounded });

document.querySelector<HTMLDivElement>('#app')!.innerHTML = PageNotFounded();
