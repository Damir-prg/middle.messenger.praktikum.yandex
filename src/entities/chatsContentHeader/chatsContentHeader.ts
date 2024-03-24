import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { IChat } from 'shared/types/api';

export interface TChatsContentHeaderProps {
  chatConfig?: IChat.GETChatsResponse;
  updateChatList?: () => void;
  events?: Partial<TEvents>;
}

type Ref = {
  input: HTMLInputElement;
};

export default class ChatsContentHeader extends Block<TChatsContentHeaderProps, Ref> {
  constructor(props: TChatsContentHeaderProps) {
    super({
      ...props,
      events: {
        change: (e) => {
          const chatId = this.props.chatConfig?.id;
          const input = e.target as HTMLInputElement;
          if (input?.files?.[0]) {
            const formData = new FormData();
            formData.append('avatar', input.files[0]);
            formData.append('chatId', String(chatId));
            api
              .changeChatAvatar(formData)
              .then((data) => {
                this.setProps({
                  chatConfig: data,
                });
              })
              .then(() => {
                window.updateChatList();
              });
          }
        },
      },
    });
  }

  protected render(): string {
    const { chatConfig } = this.props;
    return `
        <article class="chats-content-header">
            <div class="chats-content-header__profile">
                <label for="avatar" class="chats-content-header__profile__label">
                  <img src="${
                    chatConfig?.avatar
                      ? `https://ya-praktikum.tech/api/v2/resources${chatConfig?.avatar}`
                      : 'assets/avatar.jpg'
                  }" alt="${chatConfig?.title} avatar" class="chats-content-header__profile__image">
                  </label>
                  <h4 class="chats-content-header__profile__name">${chatConfig?.title}</h4>
                  <input id="avatar" type="file" ref="input" class="chats-content-header__profile__input">
            </div>
            <button class="chats-content-header__options">
                <div class="chats-content-header__options__buttons">
                  {{{ ActionButton type="add" }}}
                  {{{ ActionButton type="del" }}}
                  {{{ ActionButton type="del" title="Удалить чат" }}}
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
