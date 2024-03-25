import Block from 'shared/core/Block';
import ChatsAsideHeaderLink from 'entities/chatsAsideHeaderLink';
import Search from 'shared/ui/search';
import ChatsAsideHeader from 'entities/chatsAsideHeader';
import { TEvents } from 'shared/core/types';
import Modal from 'entities/modal';
import AuthForm from 'entities/authForm';
import { api } from 'shared/api';
import Input from 'shared/ui/input';

export interface IChatsAsideHeaderFieldsProps {
  updateList?: () => void;
  onSearch?: (e: Event) => void;
  createChatButtonEvents?: Partial<TEvents>;
  onChatCreatedEvents?: Partial<TEvents>;
}

type Ref = {
  headerWrapper: ChatsAsideHeader;
  headerLink: ChatsAsideHeaderLink;
  searchInput: Search;
  modal: Modal;
  createChatForm: AuthForm;
  titleInput: Input;
};

export default class ChatsAsideHeaderFields extends Block<IChatsAsideHeaderFieldsProps, Ref> {
  constructor(props: IChatsAsideHeaderFieldsProps) {
    super({
      ...props,
      createChatButtonEvents: { click: () => this.refs?.modal?.open() },
      onChatCreatedEvents: {
        submit: (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
          const input = this.refs.titleInput;
          const value = input.value();

          if (!value) {
            input.setError('Пустое поле!');
            return;
          }

          console.log({ title: value });
          api
            .createChat({ title: value })
            .then(async () => {
              await props.updateList?.();
              this.refs.modal.close();
            })
            .catch((error) => {
              console.error(error);
              input.setError(error.message);
            });
        },
      },
    });
  }

  protected render(): string {
    return `
        {{#ChatsAsideHeader ref="headerWrapper" }}
            {{{ ChatsAsideHeaderLink ref="headerLink" }}}
            {{{ Button
                label="Новый чат"
                type="button"
                buttonType="primary"
                events=createChatButtonEvents
            }}}
            {{#Modal ref="modal" }}
              {{#BlockContainer classes="modal__content" }}
                {{#AuthForm 
                  events=onChatCreatedEvents 
                  ref="createChatForm"
                }}
                  <h3>Создать чат</h3>
                  {{{ Input 
                      name="title"
                      type="text"
                      placeholder="Название"
                      ref="titleInput"
                  }}}
                  {{{ Button
                      label="Создать"
                      type="submit"
                      buttonType="primary"
                      ref="primaryButton"
                  }}}
                {{/AuthForm}}
              {{/BlockContainer}} 
            {{/Modal}}
            {{{ Search ref="searchInput" }}}
        {{/ChatsAsideHeader}}       
      `;
  }
}
