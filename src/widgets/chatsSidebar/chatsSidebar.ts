import ChatsAsideHeaderFields from 'features/chatsAsideHeaderFields';
import ChatsAsideList from 'features/chatsAsideList';
import Block from 'shared/core/Block';
import Aside from 'shared/ui/aside';

export interface IChatsSidebarProps {
  updateChatList?: () => void;
}

type Ref = {
  sidebarWrapper?: Aside;
  header: ChatsAsideHeaderFields;
  list: ChatsAsideList;
};

export default class ChatsSidebar extends Block<IChatsSidebarProps, Ref> {
  constructor(props: IChatsSidebarProps) {
    super({
      ...props,
      updateChatList: () => this.updateChatList(),
    });
  }

  public updateChatList() {
    this.refs.list.updateList();
  }
  protected render(): string {
    return `
            {{#Aside type="top"}}
                {{{ ChatsAsideHeaderFields updateList=this.updateChatList ref="header" }}}
                {{{ ChatsAsideList ref="list" }}}
            {{/Aside}}
        `;
  }
}
