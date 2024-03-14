import Block from 'shared/core/Block';

export interface IAsideProps {
  type?: 'top' | 'center';
}

export default class Aside extends Block<IAsideProps> {
  constructor(props: IAsideProps) {
    super(props);
  }

  protected render(): string {
    const { type } = this.props;
    return `
        <aside class="aside aside_${type || 'top'}"></aside>
      `;
  }
}
