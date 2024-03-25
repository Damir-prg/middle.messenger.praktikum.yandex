import AuthForm from 'entities/authForm';
import SignUpFormFields from 'features/signUpFields';
import AuthSubmit from 'features/authSubmit';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Router from 'shared/router/Router';
import { routes } from 'app/withRoutes';
import { IUser } from 'shared/types/api';
import { api } from 'shared/api';

export interface ISignUpFormProps {
  events?: Partial<TEvents>;
  onLinkEvents?: Partial<TEvents>;
}

type Ref = {
  form: AuthForm;
  registerFields: SignUpFormFields;
  authSubmits: AuthSubmit;
};

export default class SignUpForm extends Block<ISignUpFormProps, Ref> {
  constructor() {
    super({
      events: {
        submit: (e) => this.handlerSubmit(e),
      },
      onLinkEvents: {
        click: () => Router.go(routes.login.route),
      },
    });
  }

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.refs.registerFields.validateAll();
    if (validateResult) {
      const data = this.refs.form.getFormData();
      const dataRequest: Record<string, string> = {};
      for (const [name, value] of data) {
        if (typeof value === 'string') {
          dataRequest[name] = value;
        }
      }
      console.log(dataRequest);
      api
        .signUp(dataRequest as unknown as IUser.SignUpRequest)
        .then(() => {
          Router.go(routes.messenger.route);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.error('validate error');
    }
  }

  protected render(): string {
    return `
        {{#AuthForm events=events ref="form"}}
            <h3 class="auth-form__title">Регистрация</h3>
            {{{ SignUpFields ref="registerFields"}}}
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
