import Block from 'shared/core/Block';

export default class Welcome extends Block<object> {
  protected render(): string {
    return `
        {{#CenterLayout}}
            {{#BlockContainer classes="welcome"}}
                {{{ WelcomeList }}}
            {{/BlockContainer}}
        {{/CenterLayout}}
        `;
  }
}
