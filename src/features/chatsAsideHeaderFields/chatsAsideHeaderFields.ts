import Block from 'shared/core/Block';
import ChatsAsideHeaderLink from 'entities/chatsAsideHeaderLink';
import Search from 'shared/ui/search';
import ChatsAsideHeader from 'entities/chatsAsideHeader';

export interface IChatsAsideHeaderFieldsProps {
  onSearch?: (e: Event) => void;
}

type Ref = {
  headerWrapper?: ChatsAsideHeader;
  headerLink?: ChatsAsideHeaderLink;
  searchInput?: Search;
};

export default class ChatsAsideHeaderFields extends Block<IChatsAsideHeaderFieldsProps, Ref> {
  constructor(props: IChatsAsideHeaderFieldsProps) {
    super(props);
  }

  protected render(): string {
    return `
        {{#ChatsAsideHeader ref="headerWrapper" }}
            {{{ ChatsAsideHeaderLink ref="headerLink" }}}
            {{{ Button
                label="Новый чат"
                type="button"
                buttonType="primary"
            }}}
            {{{ Search ref="searchInput" }}}
        {{/ChatsAsideHeader}}       
      `;
  }
}
