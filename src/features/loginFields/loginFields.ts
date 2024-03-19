import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Input from 'shared/ui/input';

interface ILoginFieldsProps {
  loginEvents?: Partial<TEvents>;
  passwordEvents?: Partial<TEvents>;
}

type Ref = {
  loginFields: HTMLDivElement;
  loginInput: Input;
  passwordInput: Input;
};

export default class AuthLoginFields extends Block<ILoginFieldsProps, Ref> {
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
