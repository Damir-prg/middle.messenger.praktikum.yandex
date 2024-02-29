import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Input from 'shared/ui/input';
import { REGEX } from 'shared/utilities';

export interface IAuthRegisterProps {
  emailEvents?: Partial<TEvents>;
  loginEvents?: Partial<TEvents>;
  firstNameEvents?: Partial<TEvents>;
  secondNameEvents?: Partial<TEvents>;
  phoneEvents?: Partial<TEvents>;
  passwordEvents?: Partial<TEvents>;
  repeatPasswordEvents?: Partial<TEvents>;
}

type Ref = {
  emailInput?: Input;
  loginInput?: Input;
  firstNameInput?: Input;
  secondNameInput?: Input;
  phoneInput?: Input;
  passwordInput?: Input;
  repeatPasswordInput?: Input;
};

export default class AuthRegisterFields extends Block<IAuthRegisterProps, Ref> {
  constructor() {
    super({
      emailEvents: {
        focusout: () => this.validateField('emailInput', 'checkEmail'),
      },
      loginEvents: {
        focusout: () => this.validateField('loginInput', 'checkLogin'),
      },
      firstNameEvents: {
        focusout: () => this.validateField('firstNameInput', 'checkName'),
      },
      secondNameEvents: {
        focusout: () => this.validateField('secondNameInput', 'checkName'),
      },
      phoneEvents: {
        focusout: () => this.validateField('phoneInput', 'checkPhone'),
      },
      passwordEvents: {
        focusout: () => this.validateField('passwordInput', 'checkPassword'),
      },
      repeatPasswordEvents: {
        focusout: () => this.validateRepeatPassword(),
      },
    });
  }

  protected validateField(field: keyof Ref, regexKey: keyof typeof REGEX) {
    const input = this.refs[`${field}`];
    if (input) {
      return input.validate(REGEX[regexKey]);
    }
    return false;
  }

  protected validateRepeatPassword() {
    const password = this.refs.passwordInput?.value();
    const repeatPassword = this.refs.repeatPasswordInput?.value();
    if (repeatPassword && password !== repeatPassword) {
      this.refs.repeatPasswordInput?.setError('Пароли не совпадают');
      return false;
    }
    this.refs.repeatPasswordInput?.setError('');
    return true;
  }

  public validateAll() {
    return (
      this.validateField('emailInput', 'checkEmail') &&
      this.validateField('firstNameInput', 'checkName') &&
      this.validateField('secondNameInput', 'checkName') &&
      this.validateField('loginInput', 'checkLogin') &&
      this.validateField('passwordInput', 'checkPassword') &&
      this.validateField('phoneInput', 'checkPhone') &&
      this.validateRepeatPassword()
    );
  }

  protected render(): string {
    return `
        <div class="auth-form__fields">
          {{{ Input
              name="email"
              type="email"
              placeholder="Почта"
              ref="emailInput"
              events=emailEvents
          }}}
          {{{ Input
              name="login"
              type="text"
              placeholder="Логин"
              ref="loginInput"
              events=loginEvents
          }}}
          {{{ Input
              name="first_name"
              type="text"
              placeholder="Имя"
              ref="firstNameInput"
              events=firstNameEvents
          }}}
          {{{ Input
              name="second_name"
              type="text"
              placeholder="Фамилия"
              ref="secondNameInput"
              events=secondNameEvents
          }}}
          {{{ Input
              name="phone"
              type="tel"
              placeholder="Телефон"
              ref="phoneInput"
              events=phoneEvents
          }}}
          {{{ Input
              name="password"
              type="password"
              placeholder="Пароль"
              ref="passwordInput"
              events=passwordEvents
          }}}
          {{{ Input
              name="repeat_password"
              type="password"
              placeholder="Повторите пароль"
              ref="repeatPasswordInput"
              events=repeatPasswordEvents
          }}}
        </div>    
        `;
  }
}
