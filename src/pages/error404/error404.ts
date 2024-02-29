import Block from 'shared/core/Block';

export default class Error404 extends Block<object> {
  protected render(): string {
    return `
            {{#CenterLayout}}
                {{#BlockContainer classes="error"}}
                    {{{Error
                        title="404"
                        message="Страница не найдена"
                    }}}
                {{/BlockContainer}}
            {{/CenterLayout}}
        `;
  }
}
