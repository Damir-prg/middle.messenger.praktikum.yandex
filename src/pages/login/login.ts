import Block from 'shared/core/Block';
import AuthLoginForm from 'widgets/loginForm';

type Ref = {
  authLoginForm: AuthLoginForm;
};

export default class Login extends Block<object, Ref> {
  protected render(): string {
    return `
            {{#CenterLayout}}
                {{#BlockContainer classes="auth-form"}}
                    {{{ LoginForm ref="authLoginForm" }}}
                {{/BlockContainer}}
            {{/CenterLayout}}
        `;
  }
}
