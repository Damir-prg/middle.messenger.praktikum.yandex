import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IModalProps {
  events?: Partial<TEvents>;
}

type Ref = {
  modal: HTMLDivElement;
};

export default class Modal extends Block<IModalProps, Ref> {
  constructor(props: IModalProps) {
    super({
      ...props,
      events: {
        click: (e) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains('modal')) {
            this.close();
          }
        },
      },
    });
  }

  public open() {
    this.refs.modal?.classList.add('modal_active');
  }

  public close() {
    this.refs.modal?.classList.remove('modal_active');
  }

  protected render(): string {
    return `
            <div class="modal" ref="modal"></div>
        `;
  }
}
