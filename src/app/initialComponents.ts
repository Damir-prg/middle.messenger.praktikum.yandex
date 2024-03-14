import { registerEntities } from 'entities/registerEntities';
import { registerFeatures } from 'features/registerFeatures';
import { registerUIs } from 'shared/ui/registerUI';
import { registerWidgets } from 'widgets/registerWidgets';

export function initialComponents() {
  registerUIs();
  registerEntities();
  registerFeatures();
  registerWidgets();
}
