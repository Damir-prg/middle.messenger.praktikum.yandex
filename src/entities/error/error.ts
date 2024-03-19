import { routes } from 'app/withRoutes';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Router from 'shared/router/Router';

export interface IErrorProps {
  title?: string;
  message?: string;
  events?: Partial<TEvents>;
}

export default class Error extends Block<IErrorProps> {
  constructor(props: IErrorProps) {
    super({ ...props, events: { click: () => Router.go(routes.messenger.route) } });
  }

  protected render(): string {
    const { title, message } = this.props;
    return `
      <div class="error__element">
        <h1 class="error__title">${title}</h1>
        <p class="error__message">${message}</p>
        {{{ Button
          label="Назад к чатам"
          type="button"
          buttonType="link"
          events=events
        }}}
      </div>
    `;
  }
}
