import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface TChatsContentMessagesProps {
  events?: Partial<TEvents>;
}

export default class ChatsContentMessages extends Block<TChatsContentMessagesProps> {
  constructor(props: TChatsContentMessagesProps) {
    super({ ...props });
  }

  render() {
    return `
      <ul class="chats-content-messages"></ul>
    `;
  }
}
