import ProfileEditForm from 'entities/profileEditForm';
import ProfileEditInfoFields from 'features/profileEditInfoFields';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
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
  }

  public handlerSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    const validateResult = this.refs?.profileEditFields?.validateAll();
    const data = this.refs?.profileEditForm?.getFormData();
    if (validateResult && data) {
      for (const [name, value] of data) {
        console.log(name, ':', value);
      }
      this?.props?.submitSideEvent?.();
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
