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
    super({
      onChangeChat: (data: IChatsMainProps) => {
        this.refs.main.setProps({ ...data });
      },
    });
  }
  // Я понимаю, что ещё не реализовал переписку, вывод чатов, добавления чата,
  // удаления чата, добавление пользователя в чат и удаление пользователя из чата
  // просто хотел узнать удовлетворительно ли сделано всё остальное.
  // К сожалению, из-за работы и из-за собственной лени ничего не успеваю, поэтому
  // хотел бы узнать это.
  // А уже сегодня ближе к ночи (23.03.2024 - 24.03.2024) Отправлю на проверку вместе со страницей чаттов.

  protected render(): string {
    return `
        {{#RowLayout}}
          {{{ ChatsSidebar ref="sidebar" onChangeChat=onChangeChat }}}
          {{{ ChatsMain ref="main" }}}
        {{/RowLayout}}
        `;
  }
}
