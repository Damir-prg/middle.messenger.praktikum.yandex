import Block from 'shared/core/Block';

export interface IBlockContainerProps {
  classes?: string;
}

type Ref = {
  blockContainer: HTMLDivElement;
};

export default class BlockContainer extends Block<IBlockContainerProps, Ref> {
  constructor(props: IBlockContainerProps) {
    super(props);
  }

  protected render(): string {
    const { classes } = this.props;
    return `<div class="block-container ${classes || ''}" ref="blockContainer"></div>`;
  }
}
