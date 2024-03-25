import ChatsContent from 'entities/chatsContent';
import ChatsContentFooter from 'entities/chatsContentFooter';
import ChatsContentHeader from 'entities/chatsContentHeader';
import { IChatsContentMessageItemProps } from 'entities/chatsContentMessageItem';
import ChatsMessages from 'features/chatsMessages';
import Block from 'shared/core/Block';
import { IChat } from 'shared/types/api';

export interface IChatsMainProps {
  chatConfig?: IChat.GETChatsResponse;
  isChatOpen?: boolean;
  messages?: Array<IChatsContentMessageItemProps>;
  updateChatList?: () => void;
}

type Ref = {
  chatsWrapper?: ChatsContent;
  chatsHeader?: ChatsContentHeader;
  chatsMessages?: ChatsMessages;
  chatsFooter?: ChatsContentFooter;
};

export default class ChatsMain extends Block<IChatsMainProps, Ref> {
  constructor(props: IChatsMainProps) {
    super({ ...props });
  }

  public changeChatState() {}

  protected render(): string {
    const { isChatOpen } = this.props;
    return `
            {{#ChatsContent ref="chatsWrapper" isChatOpen=isChatOpen}}
                ${
                  isChatOpen
                    ? `
                    {{{ ChatsContentHeader 
                          chatConfig=chatConfig 
                          ref="chatsHeader" 
                        }}}
                    {{{ ChatsMessages 
                      ref="chatsMessages" 
                      messages=messages 
                      chatConfig=chatConfig }}}
                    {{{ ChatsContentFooter ref="chatsFooter" }}}
                `
                    : ''
                }
            {{/ChatsContent}}
        `;
  }
}
