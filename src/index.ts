import Handlebars from 'handlebars';
import * as Entities from './entities';
import { PageServerError } from 'pages/index';
import './index.scss';

Object.entries(Entities).forEach(([name, entity]) => {
  Handlebars.registerPartial(name, entity);
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = PageServerError();
