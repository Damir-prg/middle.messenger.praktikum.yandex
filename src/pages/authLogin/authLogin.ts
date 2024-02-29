import Block from 'shared/core/Block';
import AuthLoginForm from 'widgets/authLoginForm';

type Ref = {
  authLoginForm: AuthLoginForm;
};

export default class AuthLogin extends Block<object, Ref> {
  protected render(): string {
    return `
            {{#CenterLayout}}
                {{#BlockContainer classes="auth-form"}}
                    {{{ AuthLoginForm ref="authLoginForm" }}}
                {{/BlockContainer}}
            {{/CenterLayout}}
        `;
  }
}
