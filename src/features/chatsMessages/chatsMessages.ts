import { IChatsContentMessageItemProps } from 'entities/chatsContentMessageItem';
import ChatsContentMessages from 'entities/chatsContentMessages';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IChatsMessagesProps {
  events?: Partial<TEvents>;
  messages?: Array<IChatsContentMessageItemProps>;
}

type Ref = {
  messagesWrapper?: ChatsContentMessages;
};

export default class ChatsMessages extends Block<IChatsMessagesProps, Ref> {
  constructor(props: IChatsMessagesProps) {
    super(props);
  }

  protected render(): string {
    return `
        {{#ChatsContentMessages ref="messagesWrapper"}}
            {{#each messages}}
                {{{ ChatsContentMessageItem
                    messageType=this.messageType
                    type=this.type
                    imageUrl=this.imageUrl
                    time=this.time
                    message=this.message
                    date=this.date
                }}}
            {{/each}}
        {{/ChatsContentMessages}}           
      `;
  }
}
