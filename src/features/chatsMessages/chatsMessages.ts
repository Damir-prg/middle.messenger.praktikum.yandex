import ChatsContentMessages from 'entities/chatsContentMessages';
import { api } from 'shared/api';
import WebSocketTransport from 'shared/api/ws';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { IChat } from 'shared/types/api';

export interface IChatsMessagesProps {
  chatConfig?: IChat.GETChatsResponse;
  events?: Partial<TEvents>;
  messages?: Array<IChat.WSMessage>;
}

type Ref = {
  messagesWrapper?: ChatsContentMessages;
};

export default class ChatsMessages extends Block<IChatsMessagesProps, Ref> {
  constructor(props: IChatsMessagesProps) {
    super(props);

    const chatId = props.chatConfig?.id;
    if (chatId) {
      api
        .getToken({ chatId: chatId })
        .then(async (data) => {
          const userInfo = await api.userInfo();
          WebSocketTransport.createConnection(userInfo.id, chatId, data.token, (messages) =>
            this.setProps({ messages }),
          );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  protected render(): string {
    return `
        {{#ChatsContentMessages ref="messagesWrapper"}}
            {{#each messages}}
                {{{ ChatsContentMessageItem
                    userId=${this.props.chatConfig?.created_by}
                    time=this.time
                    content=this.content
                    user_id=this.user_id
                    type=this.type
                    file=this.file
                }}}
            {{/each}}
        {{/ChatsContentMessages}}           
      `;
  }
}
