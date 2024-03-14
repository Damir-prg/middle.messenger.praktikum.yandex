import Block from 'shared/core/Block';
import ChatsSidebar from 'widgets/chatsSidebar';
import ChatsMain, { IChatsMainProps } from 'widgets/chatsMain';

interface IChatsProps {
  onChangeChat?: (data: IChatsMainProps) => void;
}

type Ref = {
  sidebar: ChatsSidebar;
  main: ChatsMain;
};

export default class Chats extends Block<IChatsProps, Ref> {
  constructor() {
    super({
      onChangeChat: (data: IChatsMainProps) => {
        this.refs.main.setProps({ ...data });
      },
    });
  }

  protected render(): string {
    return `
        {{#RowLayout}}
          {{{ ChatsSidebar ref="sidebar" onChangeChat=onChangeChat }}}
          {{{ ChatsMain ref="main" }}}
        {{/RowLayout}}
        `;
  }
}
