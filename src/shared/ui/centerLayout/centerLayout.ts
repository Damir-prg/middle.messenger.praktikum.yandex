import Block from 'shared/core/Block';

export interface ICenterLayoutProps {
  type?: 'screen' | 'width"';
}

type Ref = {
  centerLayout: HTMLDivElement;
};

export default class CenterLayout extends Block<ICenterLayoutProps, Ref> {
  constructor(props: ICenterLayoutProps) {
    super(props);
  }

  protected render(): string {
    const { type } = this.props;
    return `
        <main class="center-layout center-layout_full-${type || 'screen'}"></main>
        `;
  }
}
