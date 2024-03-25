import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { IChat } from 'shared/types/api';
import { convertIsoToHHMM } from 'shared/utilities';

export interface IChatsListItemProps extends Partial<IChat.GETChatsResponse> {
  events?: Partial<TEvents>;
}

type Ref = {
  item?: HTMLLIElement;
  image?: HTMLImageElement;
  name?: HTMLSpanElement;
  lastMessage?: HTMLSpanElement;
  time?: HTMLSpanElement;
  count?: HTMLSpanElement;
};

export default class ChatsListItem extends Block<IChatsListItemProps, Ref> {
  constructor(props: IChatsListItemProps) {
    super(props);
  }

  protected render(): string {
    const { avatar, id, last_message, title, unread_count } = this.props;

    return `
      <li class="chats-aside__list-item" ref="item">
        <img src="${
          avatar ? `https://ya-praktikum.tech/api/v2/resources${avatar}` : 'assets/avatar.jpg'
        }" alt="${title} ${id} avatar" class="chats-aside__list-item__image" ref="image"/>
        <div class="chats-aside__list-item__info">
            <h4 class="chats-aside__list-item__name" ref="name">${title}</h4>
            ${
              last_message
                ? `<p class="chats-aside__list-item__last-message" ref="lastMessage">${last_message}</p>`
                : ''
            }
        </div>
        <div class="chats-aside__list-item__description">
            ${
              last_message
                ? `<span class="chats-aside__list-item__time" ref="time">${convertIsoToHHMM(last_message?.time)}</span>`
                : ''
            }
            ${
              unread_count
                ? `<div class="chats-aside__list-item__messages-count" ref="count">${unread_count}</div>`
                : ''
            }
        </div>
      </li>
      `;
  }
}
