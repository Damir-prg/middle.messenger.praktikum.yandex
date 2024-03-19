import Block from 'shared/core/Block';

export default class ServerError extends Block<object> {
  protected render(): string {
    return `
            {{#CenterLayout}}
                {{#BlockContainer classes="error"}}
                    {{{Error
                        title="500"
                        message="Мы уже фиксим"
                    }}}
                {{/BlockContainer}}
            {{/CenterLayout}}
        `;
  }
}
