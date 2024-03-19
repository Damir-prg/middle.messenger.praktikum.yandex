import Block from 'shared/core/Block';
import AuthRegisterForm from 'widgets/signUpForm';

type Ref = {
  authRegisterForm: AuthRegisterForm;
};

export default class SignUp extends Block<object, Ref> {
  protected render(): string {
    return `
        {{#CenterLayout}}
            {{#BlockContainer classes="auth-form"}}
                {{{ SignUpForm ref="authRegisterForm" }}}
            {{/BlockContainer}}
        {{/CenterLayout}}
        `;
  }
}
