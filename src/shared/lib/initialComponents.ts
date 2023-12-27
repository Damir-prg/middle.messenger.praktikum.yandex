import Handlebars from 'handlebars';
import * as Entities from 'entities/index';
import * as Features from 'features/index';
import * as Widgets from 'widgets/index';

export const initialComponents = () => {
  for (const [name, entity] of Object.entries(Entities)) {
    Handlebars.registerPartial(name, entity);
  }

  for (const [name, feature] of Object.entries(Features)) {
    Handlebars.registerPartial(name, feature);
  }

  for (const [name, widget] of Object.entries(Widgets)) {
    Handlebars.registerPartial(name, widget);
  }
};
