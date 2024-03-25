import Block from 'shared/core/Block';
import ChatsSidebar from 'widgets/chatsSidebar';
import ChatsMain, { IChatsMainProps } from 'widgets/chatsMain';

interface IMessangerProps {
  onChangeChat?: (data: IChatsMainProps) => void;
}

type Ref = {
  sidebar: ChatsSidebar;
  main: ChatsMain;
};

export default class Messanger extends Block<IMessangerProps, Ref> {
  constructor() {
    super();

    window.onChangeChat = this.onChangeChat.bind(this);
  }

  private onChangeChat(data: IChatsMainProps) {
    this.refs.main.setProps({ ...data });
  }

  protected render(): string {
    return `
        {{#RowLayout}}
          {{{ ChatsSidebar ref="sidebar" }}}
          {{{ ChatsMain ref="main" }}}
        {{/RowLayout}}
        `;
  }
}
