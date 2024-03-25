import { registerComponent } from 'shared/core/registerComponents';
import Input from './input';
import Button from './button';
import ArrowButton from './arrowButton';
import Link from './link';
import CenterLayout from './centerLayout';
import BlockContainer from './blockContainer';
import RowLayout from './rowLayout';
import Aside from './aside';
import Search from './search';
import ActionButton from './actionButton';

export function registerUIs() {
  registerComponent('Input', Input);
  registerComponent('Button', Button);
  registerComponent('ArrowButton', ArrowButton);
  registerComponent('Link', Link);
  registerComponent('CenterLayout', CenterLayout);
  registerComponent('BlockContainer', BlockContainer);
  registerComponent('RowLayout', RowLayout);
  registerComponent('Aside', Aside);
  registerComponent('Search', Search);
  registerComponent('ActionButton', ActionButton);
}
