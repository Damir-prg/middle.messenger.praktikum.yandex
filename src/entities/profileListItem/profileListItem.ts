import Block from 'shared/core/Block';

export interface IProfileListItemProps {
  title?: string;
  value?: string;
}

export default class ProfileListItem extends Block<IProfileListItemProps> {
  constructor(props: IProfileListItemProps) {
    super(props);
  }

  protected render(): string {
    const { title, value } = this.props;
    return `
      <li class="profile-content-list__item">
        ${
          title || value
            ? `
                <span class="profile-content-list__item__title">${title}</span>
                <span class="profile-content-list__item__value">${value ?? ''}</span>`
            : ''
        }
      </li>
      `;
  }
}
