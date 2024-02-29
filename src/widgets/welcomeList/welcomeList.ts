import { routes } from 'app/withRoutes';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { navigate } from 'shared/utilities/navigate';

type TWelcomeListProps = Partial<Record<keyof typeof routes, Partial<TEvents>>>;

export default class WelcomeList extends Block<TWelcomeListProps> {
  constructor() {
    super({
      authLogin: { click: () => navigate('authLogin') },
      authRegister: { click: () => navigate('authRegister') },
      chats: { click: () => navigate('chats') },
      error404: { click: () => navigate('error404') },
      error500: { click: () => navigate('error500') },
      profile: { click: () => navigate('profile') },
    });
  }

  protected render(): string {
    return `
        <ul class="welcome__list">
            <li class="welcome__item">
                <h2>Реализованные страницы</h2>
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница авторизации" linkType="primary" events=authLogin }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница регистрации" linkType="primary" events=authRegister }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница профиля" linkType="primary" events=profile }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница чатов" linkType="primary" events=chats }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница ошибки 404" linkType="primary" events=error404 }}}
            </li>
            <li class="welcome__item">
                {{{ Link label="Страница ошибки 500" linkType="primary" events=error500 }}}
            </li>
        </ul>
        `;
  }
}
