import ChatsContent from 'entities/chatsContent';
import ChatsContentFooter from 'entities/chatsContentFooter';
import ChatsContentHeader from 'entities/chatsContentHeader';
import { IChatsContentMessageItemProps } from 'entities/chatsContentMessageItem';
import ChatsMessages from 'features/chatsMessages';
import Block from 'shared/core/Block';

export interface IChatsMainProps {
  userId?: string | number;
  isChatOpen?: boolean;
  messages?: Array<IChatsContentMessageItemProps>;
}

type Ref = {
  chatsWrapper?: ChatsContent;
  chatsHeader?: ChatsContentHeader;
  chatsMessages?: ChatsMessages;
  chatsFooter?: ChatsContentFooter;
};

export default class ChatsMain extends Block<IChatsMainProps, Ref> {
  constructor(props: IChatsMainProps) {
    super(props);
  }
  protected render(): string {
    const { isChatOpen } = this.props;
    return `
            {{#ChatsContent ref="chatsWrapper" isChatOpen=isChatOpen}}
                ${
                  isChatOpen
                    ? `
                    {{{ ChatsContentHeader userId=userId ref="chatsHeader" }}}
                    {{{ ChatsMessages ref="chatsMessages" messages=messages }}}
                    {{{ ChatsContentFooter ref="chatsFooter" }}}
                `
                    : ''
                }
            {{/ChatsContent}}
        `;
  }
}
