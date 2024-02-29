import Block from 'shared/core/Block';

export interface IErrorProps {
  title?: string;
  message?: string;
  onClick?: () => void;
}

export default class Error extends Block<IErrorProps> {
  constructor(props: IErrorProps) {
    super({ ...props, onClick: () => console.log('go to back') });
  }

  protected render(): string {
    const { title, message } = this.props;
    return `
      <div class="error__element">
        <h1 class="error__title">${title}</h1>
        <p class="error__message">${message}</p>
        {{{ Button
          label="Назад к чатам"
          type="button"
          buttonType="link"
          onClick=onClick
        }}}
      </div>
    `;
  }
}
