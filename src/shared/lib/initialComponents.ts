import Handlebars from 'handlebars';
import * as Entities from 'entities/index';
import * as Features from 'features/index';
import * as Widgets from 'widgets/index';

export const initialComponents = () => {
  Object.entries(Entities).forEach(([name, entity]) => {
    Handlebars.registerPartial(name, entity);
  });

  Object.entries(Features).forEach(([name, feature]) => {
    Handlebars.registerPartial(name, feature);
  });

  Object.entries(Widgets).forEach(([name, widget]) => {
    Handlebars.registerPartial(name, widget);
  });
};
