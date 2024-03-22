import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Input from 'shared/ui/input';
import { REGEX } from 'shared/utilities';

export interface IProfileEditPasswordFieldsProps {
  oldPasswordEvents?: Partial<TEvents>;
  newPasswordEvents?: Partial<TEvents>;
  newPasswordRepeatEvents?: Partial<TEvents>;
}

type Ref = {
  oldPassword?: Input;
  newPassword?: Input;
  newPasswordRepeat?: Input;
};
export default class ProfileEditPasswordFields extends Block<IProfileEditPasswordFieldsProps, Ref> {
  constructor() {
    super({
      newPasswordEvents: {
        focusout: () => this.validateField('newPassword', 'checkPassword'),
      },
      newPasswordRepeatEvents: {
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
    const password = this.refs.newPassword?.value();
    const repeatPassword = this.refs.newPasswordRepeat?.value();
    if (repeatPassword && password !== repeatPassword) {
      this.refs.newPasswordRepeat?.setError('Пароли не совпадают');
      return false;
    }
    if (!repeatPassword) {
      this.refs.newPasswordRepeat?.setError('Пустое поле!');
      return false;
    }
    this.refs.newPasswordRepeat?.setError('');
    return true;
  }

  public validateAll() {
    return this.validateField('newPassword', 'checkPassword') && this.validateRepeatPassword();
  }

  protected render(): string {
    return `
    {{#ProfileList}}
        {{#ProfileListItem}}
            <span class="profile-content-list__item__title">Старый пароль</span>
            {{{ Input
                placeholder="Старый пароль"
                name="oldPassword"
                type="password"
                ref="oldPassword"
                classes="input__profile"
                events=oldPasswordEvents
            }}}
        {{/ProfileListItem}}
        {{#ProfileListItem}}
            <span class="profile-content-list__item__title">Новый пароль</span>
            {{{ Input
                placeholder="Новый пароль"
                name="newPassword"
                type="password"
                ref="newPassword"
                classes="input__profile"
                events=newPasswordEvents
            }}}
        {{/ProfileListItem}}
        {{#ProfileListItem}}
            <span class="profile-content-list__item__title">Повторите новый пароль</span>
            {{{ Input
                placeholder="Повторите новый пароль"
                name="newPasswordRepeat"
                type="password"
                ref="newPasswordRepeat"
                classes="input__profile"
                events=newPasswordRepeatEvents
            }}}
        {{/ProfileListItem}}
    {{/ProfileList}}
      `;
  }
}
