import ChatsList from 'entities/chatsList';
import ChatsListItem, { IChatsListItemProps } from 'entities/chatsListItem';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { CONSTANTS } from 'shared/utilities';
import { IChatsMainProps } from 'widgets/chatsMain';

export interface IChatsAsideListProps {
  users?: Array<IChatsListItemProps>;
  events?: Partial<TEvents>;
  onChangeChat?: (data: IChatsMainProps) => void;
}

type Ref = {
  listWrapper?: ChatsList;
} & { [item: string]: ChatsListItem };

export default class ChatsAsideList extends Block<IChatsAsideListProps, Ref> {
  constructor(props: IChatsAsideListProps) {
    super({
      users: CONSTANTS.users.map((user, index) => ({
        ...user,
        events: {
          click: () =>
            props.onChangeChat &&
            props.onChangeChat({ userId: index, isChatOpen: true, messages: CONSTANTS.messagesMock }),
        },
        userId: index,
      })),
    });
  }

  public onChatListItemClick(id: number | string) {
    console.log('click', id);
  }

  protected render(): string {
    return `
        {{#ChatsList ref="listWrapper"}}
            {{#each users}}
                {{{ ChatsListItem
                    ref=this.userId
                    name=this.name
                    lastMessage=this.lastMessage
                    time=this.time
                    imageUrl=this.imageUrl
                    count=this.count
                    events=this.events
                    userId=this.userId
                }}}
            {{/each}}
        {{/ChatsList}}       
      `;
  }
}
