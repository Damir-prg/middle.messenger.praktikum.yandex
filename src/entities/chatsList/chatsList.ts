import Block from 'shared/core/Block';

export default class ChatsList extends Block<object> {
  protected render(): string {
    return `
        <ul class="chats-aside__list"></ul>
    `;
  }
}
