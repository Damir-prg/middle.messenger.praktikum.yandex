import ProfileEditForm from 'entities/profileEditForm';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Button from 'shared/ui/button';
import Input from 'shared/ui/input';
import { REGEX } from 'shared/utilities';

export interface IProfileEditInfoProps {
  formEvents?: Partial<TEvents>;
  emailEvents?: Partial<TEvents>;
  loginEvents?: Partial<TEvents>;
  firstNameEvents?: Partial<TEvents>;
  secondNameEvents?: Partial<TEvents>;
  displayNameEvents?: Partial<TEvents>;
  phoneEvents?: Partial<TEvents>;
}

type Ref = {
  profileEditForm?: ProfileEditForm;
  profileEditButton?: Button;
  email?: Input;
  login?: Input;
  firstName?: Input;
  secondName?: Input;
  displayName?: Input;
  phone?: Input;
};

export default class ProfileEditInfo extends Block<IProfileEditInfoProps, Ref> {
  constructor() {
    super({
      emailEvents: {
        focusout: () => this.validateField('email', 'checkEmail'),
      },
      loginEvents: {
        focusout: () => this.validateField('login', 'checkLogin'),
      },
      firstNameEvents: {
        focusout: () => this.validateField('firstName', 'checkName'),
      },
      secondNameEvents: {
        focusout: () => this.validateField('secondName', 'checkName'),
      },
      displayNameEvents: {
        focusout: () => this.validateField('displayName', 'checkName'),
      },
      phoneEvents: {
        focusout: () => this.validateField('phone', 'checkPhone'),
      },
      formEvents: {
        submit: (e) => this.handlerSubmit(e),
      },
    });
  }

  protected validateField(
    field: keyof Omit<Ref, 'profileEditForm' | 'profileEditButton'>,
    regexKey: keyof typeof REGEX,
  ) {
    const input = this.refs[`${field}`];
    if (input) {
      return input.validate(REGEX[regexKey]);
    }
    return false;
  }

  public validateAll() {
    return (
      this.validateField('email', 'checkEmail') &&
      this.validateField('login', 'checkLogin') &&
      this.validateField('firstName', 'checkName') &&
      this.validateField('secondName', 'checkName') &&
      this.validateField('displayName', 'checkName') &&
      this.validateField('phone', 'checkPhone')
    );
  }

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.validateAll();
    const data = this.refs?.profileEditForm?.getFormData();
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
            {{#ProfileEditForm ref="profileEditForm" events=formEvents}}
              {{#ProfileList}}
                {{#ProfileListItem}}
                  <span class="profile-content-list__item__title">Почта</span>
                  {{{ Input
                      placeholder="Почта"
                      name="email"
                      type="text"
                      ref="email"
                      classes="input__profile"
                      defaultValue="example@yandex.ru"
                      events=emailEvents
                  }}}
                {{/ProfileListItem}}
                {{#ProfileListItem}}
                  <span class="profile-content-list__item__title">Логин</span>
                  {{{ Input
                      placeholder="Логин"
                      name="login"
                      type="text"
                      ref="login"
                      classes="input__profile"
                      defaultValue="ivanivanov"
                      events=loginEvents
                  }}}
                {{/ProfileListItem}}
                {{#ProfileListItem}}
                  <span class="profile-content-list__item__title">Имя</span>
                  {{{ Input
                      placeholder="Имя"
                      name="first_name"
                      type="text"
                      ref="firstName"
                      classes="input__profile"
                      defaultValue="Иван"
                      events=firstNameEvents
                  }}}
                {{/ProfileListItem}}
                {{#ProfileListItem}}
                  <span class="profile-content-list__item__title">Фамилия</span>
                  {{{ Input
                      placeholder="Фамилия"
                      name="second_name"
                      type="text"
                      ref="secondName"
                      classes="input__profile"
                      defaultValue="Иванов"
                      events=secondNameEvents
                  }}}
                {{/ProfileListItem}}
                {{#ProfileListItem}}
                  <span class="profile-content-list__item__title">Имя в чате</span>
                  {{{ Input
                      placeholder="Имя в чате"
                      name="display_name"
                      type="text"
                      ref="displayName"
                      defaultValue="Иван"
                      classes="input__profile"
                      events=displayNameEvents
                  }}}
                {{/ProfileListItem}}
                {{#ProfileListItem}}
                  <span class="profile-content-list__item__title">Имя в чате</span>
                  {{{ Input
                      placeholder="Телефон"
                      name="phone"
                      type="text"
                      ref="phone"
                      defaultValue="+7 (909) 967 30 30"
                      classes="input__profile"
                      events=phoneEvents
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
