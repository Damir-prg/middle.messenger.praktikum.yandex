import Block from 'shared/core/Block';
import ChatsAsideHeaderLink from 'entities/chatsAsideHeaderLink';
import Search from 'shared/ui/search';
import ChatsAsideHeader from 'entities/chatsAsideHeader';
import { TEvents } from 'shared/core/types';
import Modal from 'entities/modal';

export interface IChatsAsideHeaderFieldsProps {
  onSearch?: (e: Event) => void;
  createChatButtonEvents?: Partial<TEvents>;
}

type Ref = {
  headerWrapper?: ChatsAsideHeader;
  headerLink?: ChatsAsideHeaderLink;
  searchInput?: Search;
  modal?: Modal;
};

export default class ChatsAsideHeaderFields extends Block<IChatsAsideHeaderFieldsProps, Ref> {
  constructor(props: IChatsAsideHeaderFieldsProps) {
    super({ ...props, createChatButtonEvents: { click: () => this.refs?.modal?.open() } });
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
                  events=events 
                  ref="form"
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
