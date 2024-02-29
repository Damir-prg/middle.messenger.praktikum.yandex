import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IAuthSubmitProps {
  primaryLabel?: string;
  linkLabel?: string;
  onSubmitEvents?: Partial<TEvents>;
  onLinkEvents?: Partial<TEvents>;
}

type Ref = {
  primaryButton?: HTMLButtonElement;
  linkButton?: HTMLButtonElement;
};

export default class AuthSubmit extends Block<IAuthSubmitProps, Ref> {
  constructor(props: IAuthSubmitProps) {
    super(props);
  }

  protected render(): string {
    return `
        <div class="auth-form__submit">
            {{{ Button
                label=primaryLabel
                type="submit"
                buttonType="primary"
                ref="primaryButton"
                events=onSubmitEvents
            }}}
            {{{ Link
                label=linkLabel
                ref="linkButton"
                events=onLinkEvents
            }}}
        </div>
    `;
  }
}
