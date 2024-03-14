import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IChatsContentProps {
  isChatOpen?: boolean;
  events?: Partial<TEvents>;
}

export default class ChatsContent extends Block<IChatsContentProps> {
  constructor(props: IChatsContentProps) {
    super(props);
  }

  protected render(): string {
    const { isChatOpen } = this.props;
    if (!isChatOpen) {
      return `
            <section class="chats-content chats-content__unselected">
                Выберите чат чтобы отправить сообщение
            </section>     
        `;
    }

    return `
      <section class="chats-content chats-content__selected"></section>
    `;
  }
}
