import Block from 'shared/core/Block';
import { CONSTANTS } from 'shared/utilities';

export interface TChatsContentHeaderProps {
  userId?: number | string;
}

export default class ChatsContentHeader extends Block<TChatsContentHeaderProps> {
  constructor(props: TChatsContentHeaderProps) {
    super(props);
  }

  protected render(): string {
    const { userId } = this.props;
    const user = CONSTANTS.users[userId as number];
    return `
        <article class="chats-content-header">
            <div class="chats-content-header__profile">
                <img src="${user?.imageUrl}" alt="${user?.name} avatar" class="chats-content-header__profile__image">
                <h4 class="chats-content-header__profile__name">${user?.name} ${userId}</h4>
            </div>
            <button class="chats-content-header__options">
                <div class="chats-content-header__options__buttons">
                  {{{ ActionButton type="add" }}}
                  {{{ ActionButton type="del" }}}
                </div>
                
                <svg width="3" height="16" viewBox="0 0 3 16" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.5" cy="2" r="1.5"></circle>
                    <circle cx="1.5" cy="8" r="1.5"></circle>
                    <circle cx="1.5" cy="14" r="1.5"></circle>
                </svg>
            </button>
        </article>   
        `;
  }
}
