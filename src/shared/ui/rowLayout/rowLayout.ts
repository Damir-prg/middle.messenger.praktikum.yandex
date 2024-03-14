import Block from 'shared/core/Block';

export default class RowLayout extends Block<object> {
  protected render(): string {
    return `
        <main class="row-layout"></main>
    `;
  }
}
