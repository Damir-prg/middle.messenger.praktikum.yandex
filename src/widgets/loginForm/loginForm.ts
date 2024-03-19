import AuthForm from 'entities/authForm';
import AuthLoginFields from 'features/loginFields';
import AuthSubmit from 'features/authSubmit';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Router from 'shared/router/Router';
import { routes } from 'app/withRoutes';

export interface ILoginFormProps {
  events?: Partial<TEvents>;
  onSubmitEvents?: Partial<TEvents>;
  onLinkEvents?: Partial<TEvents>;
}

type Ref = {
  form: AuthForm;
  loginFields: AuthLoginFields;
  authSubmits: AuthSubmit;
};

export default class LoginForm extends Block<ILoginFormProps, Ref> {
  constructor() {
    super({
      events: {
        submit: (e) => this.handleSubmit(e),
      },
      onSubmitEvents: {},
      onLinkEvents: {
        click: () => Router.go(routes.signUp.route),
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
    Router.go(routes.messenger.route);
  }

  protected render(): string {
    return `
        {{#AuthForm 
            events=events 
            ref="form"
        }}
            <h3 class="auth-form__title">Вход</h3>
            {{{ LoginFields 
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
