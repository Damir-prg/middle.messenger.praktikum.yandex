import ProfileEditForm from 'entities/profileEditForm';
import ProfileEditPasswordFields from 'features/profileEditPasswordFields';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Button from 'shared/ui/button';

export interface IProfileEditPasswordFormProps {
  formEvents?: Partial<TEvents>;
  submitSideEvent?: () => void;
}

type Ref = {
  profileEditPasswordForm?: ProfileEditForm;
  profileEditButton?: Button;
  profileEditPasswordFields?: ProfileEditPasswordFields;
};

export default class ProfileEditPasswordForm extends Block<IProfileEditPasswordFormProps, Ref> {
  constructor(props: IProfileEditPasswordFormProps) {
    super({
      ...props,
      formEvents: {
        submit: (e) => this.handlerSubmit(e),
      },
    });
  }

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.refs?.profileEditPasswordFields?.validateAll();
    const data = this.refs?.profileEditPasswordForm?.getFormData();
    if (validateResult && data) {
      for (const [name, value] of data) {
        console.log(name, ':', value);
      }
      this.props?.submitSideEvent?.();
    } else {
      console.error('validate error');
    }
  }

  protected render(): string {
    return `
        {{#ProfileEditForm ref="profileEditPasswordForm" events=formEvents}} 
            {{{ ProfileEditPasswordFields ref="profileEditPasswordFields" }}}
            
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
