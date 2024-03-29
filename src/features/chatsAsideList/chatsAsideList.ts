import ChatsList from 'entities/chatsList';
import ChatsListItem from 'entities/chatsListItem';
import Block from 'shared/core/Block';
import { IChat } from 'shared/types/api';
import { TEvents } from 'shared/core/types';
import { api } from 'shared/api';

export interface IChatsAsideListProps {
  chats?: Array<IChat.GETChatsResponse & Partial<TEvents>>;
  events?: Partial<TEvents>;
}

type Ref = {
  listWrapper?: ChatsList;
} & { [item: string]: ChatsListItem };

export default class ChatsAsideList extends Block<IChatsAsideListProps, Ref> {
  constructor(props: IChatsAsideListProps) {
    super({
      ...props,
    });

    this.updateList();
    window.updateChatList = this.updateList.bind(this);
  }

  public updateList(data?: IChat.GETChatUsersRequest) {
    api
      .getChats(data)
      .then((data) => {
        this.setProps({
          chats: data.map((chat) => ({
            ...chat,
            events: {
              click: () => {
                window.onChangeChat({
                  chatConfig: chat,
                  isChatOpen: true,
                  updateChatList: this.updateList,
                });
              },
            },
          })),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  protected render(): string {
    return `
        {{#ChatsList ref="listWrapper"}}
            {{#each chats}}
                {{{ ChatsListItem
                    ref=this.userId
                    id=this.id
                    title=this.title
                    avatar=this.avatar
                    last_message=this.last_message
                    unread_count=this.unread_count
                    events=this.events
                }}}
            {{/each}}
        {{/ChatsList}}       
      `;
  }
}
