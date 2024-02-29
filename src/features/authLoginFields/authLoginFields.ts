import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

interface IAuthLoginProps {
  loginEvents?: Partial<TEvents>;
  passwordEvents?: Partial<TEvents>;
}

type Ref = {
  loginFields: HTMLDivElement;
  loginInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
};

export default class AuthLoginFields extends Block<IAuthLoginProps, Ref> {
  constructor() {
    super({});
  }

  protected render(): string {
    return `
        <div class="auth-form__fields" ref="loginFields">
          {{{ Input
              name="login"
              type="text"
              placeholder="Логин"
              ref="loginInput"
          }}}
          {{{ Input
              name="password"
              type="password"
              placeholder="Пароль"
              ref="passwordInput"
          }}}
        </div>
    `;
  }
}
