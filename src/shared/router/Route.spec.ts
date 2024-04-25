import { expect } from 'chai';
import sinon from 'sinon';
import Route from './Route';
import Block from '../core/Block';

const PAGES = {
  login: '/',
  profile: '/profile',
};

describe('Route', () => {
  let route: Route;

  let PageClass: typeof Block<object>;

  beforeEach(() => {
    class Page extends Block<object> {
      constructor(props: object) {
        super({
          ...props,
        });
      }

      protected render(): string {
        return '<div id="test-div"></div>';
      }
    }

    PageClass = Page;
    route = new Route(PAGES.login, PageClass, { rootQuery: '#app' });
  });

  it('Роут совпадает с переданным', () => {
    expect(route.match(PAGES.login)).to.be.true;
  });

  it('Компонент удаляется из дом при смене роута', () => {
    route.navigate(PAGES.profile);
    route.leave();

    const app = document.querySelector('#app');
    const myComponent = app?.querySelector('#test-div');

    expect(myComponent).to.be.null;
  });

  it('Компонент роута рендерится', () => {
    const renderSpy = sinon.spy(route, 'render');

    route.render();

    expect(renderSpy.calledOnce).to.be.true;
  });
});
