import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IButtonProps {
  label?: string;
  type?: 'button' | 'submit';
  buttonType?: 'primary' | 'danger' | 'link';
  classes?: string;
  events?: Partial<TEvents>;
}

type Ref = {
  button: HTMLButtonElement;
};

export default class Button extends Block<IButtonProps, Ref> {
  constructor(props: IButtonProps) {
    super(props);
  }

  protected render(): string {
    const { classes, label, type, buttonType } = this.props;
    return `
        <button
            class="button button_${buttonType || 'primary'} ${classes || ''}"
            type="${type || 'button'}"
            ref="button"
        >
            ${label}
        </button>
    `;
  }
}
