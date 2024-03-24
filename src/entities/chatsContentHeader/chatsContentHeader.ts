import Modal from 'entities/modal';
import AddUserModal from 'features/addUserModal';
import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { IChat } from 'shared/types/api';

export interface TChatsContentHeaderProps {
  chatConfig?: IChat.GETChatsResponse;
  onChangeChat?: () => void;
  events?: Partial<TEvents>;
  onDeleteChatEvents?: Partial<TEvents>;
  onAddUserEvents?: Partial<TEvents>;
  closeModal?: () => void;
}

type Ref = {
  input: HTMLInputElement;
  addUserModal?: Modal;
  addUserModalContent?: AddUserModal;
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
      onDeleteChatEvents: {
        click: () => {
          const chatId = this.props.chatConfig?.id;
          if (chatId) {
            api.deleteChat({ chatId }).then(() => {
              window.updateChatList();
              window.onChangeChat({ isChatOpen: false });
            });
          }
        },
      },
      onAddUserEvents: {
        click: () => {
          this.refs.addUserModal?.open();
        },
      },
      closeModal: () => {
        this.refs.addUserModal?.close();
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
            <div class="chats-content-header__options">
              {{{ ActionButton type="add" events=onAddUserEvents}}}
              {{{ ActionButton type="del" }}}
              {{{ ActionButton type="del" title="Удалить чат" events=onDeleteChatEvents}}}
            </div>
            {{#Modal ref="addUserModal"}}
              {{#BlockContainer classes="modal__content" }}
                  {{{AddUserModal ref="addUserModalContent" closeModal=closeModal chatId=${chatConfig?.id} }}}
              {{/BlockContainer}}
            {{/Modal}}
        </article>   
        `;
  }
}
