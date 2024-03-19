import { routes } from 'app/withRoutes';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Router from 'shared/router/Router';

type TWelcomeListProps = Partial<Record<keyof typeof routes, Partial<TEvents>>>;

export default class WelcomeList extends Block<TWelcomeListProps> {
  constructor() {
    super({
      login: { click: () => Router.go(routes.login.route) },
      signUp: { click: () => Router.go(routes.signUp.route) },
      messenger: { click: () => Router.go(routes.messenger.route) },
      notFound: { click: () => Router.go(routes.notFound.route) },
      serverError: { click: () => Router.go(routes.serverError.route) },
      profile: { click: () => Router.go(routes.profile.route) },
    });
  }

  protected render(): string {
    return `
        <ul class="welcome__list">
            <li class="welcome__item">
                <h2>Реализованные страницы</h2>
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница авторизации" linkType="primary" events=login }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница регистрации" linkType="primary" events=signUp }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница профиля" linkType="primary" events=profile }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница чатов" linkType="primary" events=messenger }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница ошибки 404" linkType="primary" events=notFound }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница ошибки 500" linkType="primary" events=serverError }}}
            </li>
        </ul>
        `;
  }
}
