import AuthForm from 'entities/authForm';
import AuthRegisterFields from 'features/authRegisterFields';
import AuthSubmit from 'features/authSubmit';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { navigate } from 'shared/utilities/navigate';

export interface IAuthRegisterFormProps {
  events?: Partial<TEvents>;
  onLinkEvents?: Partial<TEvents>;
}

type Ref = {
  form: AuthForm;
  registerFields: AuthRegisterFields;
  authSubmits: AuthSubmit;
};

export default class AuthRegisterForm extends Block<IAuthRegisterFormProps, Ref> {
  constructor() {
    super({
      events: {
        submit: (e) => this.handlerSubmit(e),
      },
      onLinkEvents: {
        click: () => navigate('authLogin'),
      },
    });
  }

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.refs.registerFields.validateAll();
    if (validateResult) {
      const data = this.refs.form.getFormData();
      for (const [name, value] of data) {
        console.log(name, ':', value);
      }
    } else {
      console.error('validate error');
    }
  }

  protected render(): string {
    return `
        {{#AuthForm events=events ref="form"}}
            <h3 class="auth-form__title">Регистрация</h3>
            {{{ AuthRegisterFields ref="registerFields"}}}
            {{{ AuthSubmit
                ref="authSubmits"
                primaryLabel="Зарегестрироваться"
                linkLabel="Войти"
                onSubmitEvents=onSubmitEvents
                onLinkEvents=onLinkEvents
            }}}
        {{/AuthForm}}             
      `;
  }
}
