import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IProfileEditFormProps {
  events?: Partial<TEvents>;
}

type Ref = {
  form: HTMLFormElement;
};

export default class ProfileEditForm extends Block<IProfileEditFormProps, Ref> {
  constructor(props: IProfileEditFormProps) {
    super(props);
  }

  public getFormData() {
    return new FormData(this.refs.form);
  }

  protected render(): string {
    return `
      <form class="profile-edit-form" ref="form"></form>
    `;
  }
}
