import AuthForm from 'entities/authForm';
import AuthLoginFields from 'features/authLoginFields';
import AuthSubmit from 'features/authSubmit';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { navigate } from 'shared/utilities/navigate';

export interface IAuthLoginFormProps {
  events?: Partial<TEvents>;
  onSubmitEvents?: Partial<TEvents>;
  onLinkEvents?: Partial<TEvents>;
}

type Ref = {
  form: AuthForm;
  loginFields: AuthLoginFields;
  authSubmits: AuthSubmit;
};

export default class AuthLoginForm extends Block<IAuthLoginFormProps, Ref> {
  constructor() {
    super({
      events: {
        submit: (e) => this.handleSubmit(e),
      },
      onSubmitEvents: {},
      onLinkEvents: {
        click: () => navigate('authRegister'),
      },
    });
  }

  public handleSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const data = this.refs.form.getFormData();
    for (const [name, value] of data) {
      console.log(name, ':', value);
    }
  }

  protected render(): string {
    return `
        {{#AuthForm 
            events=events 
            ref="form"
        }}
            <h3 class="auth-form__title">Вход</h3>
            {{{ AuthLoginFields 
                ref="loginFields" 
            }}}
            {{{ AuthSubmit
                ref="authSubmits"
                primaryLabel="Войти"
                linkLabel="Зарегистрироваться"
                onSubmitEvents=onSubmitEvents
                onLinkEvents=onLinkEvents
            }}}
        {{/AuthForm}}             
        `;
  }
}
