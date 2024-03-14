import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface IChatsListItemProps {
  events?: Partial<TEvents>;
  imageUrl?: string;
  name?: string;
  lastMessage?: string;
  time?: string;
  count?: number;
  isActive?: boolean;
  userId?: string | number;
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
    const { imageUrl, name, lastMessage, time, count, userId, isActive } = this.props;

    return `
      <li class="chats-aside__list-item ${isActive ? 'chats-aside__list-item_active' : ''}" ref="item">
        <img src="${imageUrl}" alt="${name} ${userId} avatar" class="chats-aside__list-item__image" ref="image"/>
        <div class="chats-aside__list-item__info">
            <h4 class="chats-aside__list-item__name" ref="name">${name} ${userId}</h4>
            <p class="chats-aside__list-item__last-message" ref="lastMessage">${lastMessage}</p>
        </div>
        <div class="chats-aside__list-item__description">
            <span class="chats-aside__list-item__time" ref="time">${time}</span>
            ${count ? `<div class="chats-aside__list-item__messages-count" ref="count">${count}</div>` : ''}
        </div>
      </li>
      `;
  }
}
