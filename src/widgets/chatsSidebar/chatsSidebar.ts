import ChatsAsideHeaderFields from 'features/chatsAsideHeaderFields';
import ChatsAsideList from 'features/chatsAsideList';
import Block from 'shared/core/Block';
import Aside from 'shared/ui/aside';
import { IChatsMainProps } from 'widgets/chatsMain';

export interface IChatsSidebarProps {
  updateChatList?: () => void;
  onChangeChat?: (data: IChatsMainProps) => void;
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
                {{{ ChatsAsideList onChangeChat=onChangeChat ref="list" }}}
            {{/Aside}}
        `;
  }
}
