import { JSDOM } from 'jsdom';
import { initialComponents } from './src/app/initialComponents';
import { initialRoutes } from './src/app/withRoutes';

initialComponents();

initialRoutes();

const jsdom = new JSDOM('<main id="app"></main>', { url: 'http://localhost:3000' });

global.window = jsdom.window;
global.document = jsdom.window.document;
global.Node = jsdom.window.Node;
global.MouseEvent = jsdom.window.MouseEvent;
