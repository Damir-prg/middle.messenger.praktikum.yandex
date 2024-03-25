import { routes } from 'app/withRoutes';
import ProfileEditForm from 'entities/profileEditForm';
import ProfileEditInfoFields from 'features/profileEditInfoFields';
import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Router from 'shared/router/Router';
import { IUser } from 'shared/types/api';
import Button from 'shared/ui/button';

export interface IProfileEditInfoFormProps {
  formEvents?: Partial<TEvents>;
  submitSideEvent?: () => void;
}

type Ref = {
  profileEditForm?: ProfileEditForm;
  profileEditButton?: Button;
  profileEditFields?: ProfileEditInfoFields;
};

export default class ProfileEditInfoForm extends Block<IProfileEditInfoFormProps, Ref> {
  constructor(props: IProfileEditInfoFormProps) {
    super({
      ...props,
      formEvents: {
        submit: (e) => this.handlerSubmit(e),
      },
    });

    api
      .userInfo()
      .then((data) => {
        this.refs?.profileEditFields?.setProps({
          ...data,
        });
      })
      .catch((error) => {
        console.error(error);
        Router.go(routes.login.route);
      });
  }

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.refs?.profileEditFields?.validateAll();
    const data = this.refs?.profileEditForm?.getFormData();
    const dataRequest: Record<string, string> = {};
    if (validateResult && data) {
      for (const [name, value] of data) {
        if (typeof value === 'string') {
          dataRequest[name] = value;
        }
      }
      console.log(dataRequest);
      api
        .changeInfo(dataRequest as unknown as IUser.InfoResponse)
        .then(() => {
          this.props?.submitSideEvent?.();
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
            {{#ProfileEditForm ref="profileEditForm" events=formEvents}}
              {{{ ProfileEditInfoFields ref="profileEditFields"}}}
              
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
