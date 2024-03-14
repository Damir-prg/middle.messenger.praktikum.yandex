import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IAuthFormProps {
  events?: Partial<TEvents>;
  ref?: string;
}

type Ref = {
  form: HTMLFormElement;
};

export default class AuthForm extends Block<IAuthFormProps, Ref> {
  constructor(props: IAuthFormProps) {
    super(props);
  }

  public getFormData() {
    return new FormData(this.refs.form);
  }

  protected render(): string {
    const { ref } = this.props;
    return `<form class="auth-form__wrapper" ref="${ref}"></form>`;
  }
}
