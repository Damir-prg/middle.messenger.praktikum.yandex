import ProfileEditForm from 'entities/profileEditForm';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Button from 'shared/ui/button';
import Input from 'shared/ui/input';
import { REGEX } from 'shared/utilities';

export interface IProfileEditPasswordProps {
  formEvents?: Partial<TEvents>;
  oldPasswordEvents?: Partial<TEvents>;
  newPasswordEvents?: Partial<TEvents>;
  newPasswordRepeatEvents?: Partial<TEvents>;
}

type Ref = {
  profileEditPasswordForm?: ProfileEditForm;
  profileEditButton?: Button;
  oldPassword?: Input;
  newPassword?: Input;
  newPasswordRepeat?: Input;
};

export default class ProfileEditPassword extends Block<IProfileEditPasswordProps, Ref> {
  constructor() {
    super({
      formEvents: {
        submit: (e) => this.handlerSubmit(e),
      },
      newPasswordEvents: {
        focusout: () => this.validateField('newPassword', 'checkPassword'),
      },
      newPasswordRepeatEvents: {
        focusout: () => this.validateRepeatPassword(),
      },
    });
  }

  protected validateField(
    field: keyof Omit<Ref, 'profileEditPasswordForm' | 'profileEditButton'>,
    regexKey: keyof typeof REGEX,
  ) {
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

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.validateAll();
    const data = this.refs?.profileEditPasswordForm?.getFormData();
    if (validateResult && data) {
      for (const [name, value] of data) {
        console.log(name, ':', value);
      }
    } else {
      console.error('validate error');
    }
  }

  protected render(): string {
    return `
        {{#ProfileEditForm ref="profileEditPasswordForm" events=formEvents}} 
            {{#ProfileList}}
                {{#ProfileListItem}}
                    <span class="profile-content-list__item__title">Старый пароль</span>
                    {{{ Input
                        placeholder="Старый пароль"
                        name="oldPassword"
                        type="password"
                        ref="oldPassword"
                        classes="input__profile"
                        defaultValue="Qwerty123"
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
            
            {{{ Button
                label="Сохранить"
                type="submit"
                buttonType="primary"
                ref="profileEditButton"
                events=onSubmitEvents
            }}}
        {{/ProfileEditForm}}

        `;
  }
}
