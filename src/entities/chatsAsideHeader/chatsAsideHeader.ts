import Block from 'shared/core/Block';

export default class ChatsAsideHeader extends Block<object> {
  protected render(): string {
    return `
        <header class="chats-aside__header"></header>
        `;
  }
}
