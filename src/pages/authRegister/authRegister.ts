import Block from 'shared/core/Block';
import AuthRegisterForm from 'widgets/authRegisterForm';

type Ref = {
  authRegisterForm: AuthRegisterForm;
};

export default class AuthRegister extends Block<object, Ref> {
  protected render(): string {
    return `
        {{#CenterLayout}}
            {{#BlockContainer classes="auth-form"}}
                {{{ AuthRegisterForm ref="authRegisterForm" }}}
            {{/BlockContainer}}
        {{/CenterLayout}}
        `;
  }
}
