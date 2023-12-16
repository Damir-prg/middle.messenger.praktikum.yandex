import Handlebars from 'handlebars';
import * as Entities from './entities';
import './index.scss';

const renderedButton = Handlebars.compile(Entities.Button)({ label: 'Зарегистрироваться', type: 'primary' });

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderedButton;
