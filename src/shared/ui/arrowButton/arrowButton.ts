import Block from 'shared/core/Block';

export interface IArrowButtonProps {
  orientation?: 'top' | 'right' | 'bottom' | 'left';
  onClick?: () => void;
  type?: 'button' | 'submit';
}

type Ref = {
  arrowButton: HTMLButtonElement;
};

export default class ArrowButton extends Block<IArrowButtonProps, Ref> {
  constructor(props: IArrowButtonProps) {
    super(props);

    this.props.events = {
      click: this.props.onClick,
    };
  }

  protected render(): string {
    const { orientation, type } = this.props;

    return `
    <button type="${type || 'button'}" class="arrow-button arrow-button_${orientation || 'top'}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16px" height="16px">
            <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
        </svg>
    </button>
    `;
  }
}
