import Block from 'shared/core/Block';

export interface ILinkProps {
  label?: string;
  linkType?: 'primary' | 'danger';
  classes?: string;
}

type Ref = {
  link: HTMLElement;
};

export default class Link extends Block<ILinkProps, Ref> {
  constructor(props: ILinkProps) {
    super(props);
  }

  protected render(): string {
    const { classes, label, linkType } = this.props;
    return `
      <a class="link link_${linkType || 'primary'} ${classes || ''}" ref="link">${label}</a>
    `;
  }
}
