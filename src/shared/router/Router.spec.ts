import { expect } from 'chai';
import sinon from 'sinon';
import Block from '../core/Block';
import Route from './Route';
import { Router } from './Router';

describe('Router', () => {
  let router: Router;

  beforeEach(() => {
    router = new Router('#app');
  });

  it('Добавление роута', () => {
    router.use('/test', Block);
    const route = router.getRoute('/test');
    expect(route).to.be.instanceOf(Route);
  });

  it('Инициализация роутера', () => {
    const spyRouter = sinon.spy(router, 'start');
    router.start();
    expect(spyRouter.called).to.be.true;
  });

  it('Перейти по роутеру', () => {
    const spyRouter = sinon.spy(router, 'go');
    router.go('/new-test');
    expect(spyRouter.calledWithMatch('/new-test')).to.be.true;
  });

  it('Вернуться на предыдущий роут', () => {
    const spyRouter = sinon.spy(router, 'back');
    router.back();
    expect(spyRouter.calledOnce).to.be.true;
  });
});
