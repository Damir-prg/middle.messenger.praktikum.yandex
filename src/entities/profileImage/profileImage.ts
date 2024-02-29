import { IChatsListItemProps } from 'entities/chatsListItem/chatsListItem';
import Block from 'shared/core/Block';
import { CONSTANTS } from 'shared/utilities';

export interface IProfileImageProps {
  user?: IChatsListItemProps;
}

export default class ProfileImage extends Block<IProfileImageProps> {
  constructor() {
    super({
      user: CONSTANTS.users[0],
    });
  }

  protected render(): string {
    const { user } = this.props;

    return `
        <article class="profile-content-image">
            <img src="${user?.imageUrl}" alt="${user?.name} avatar" class="profile-content-image__image">
            <h1 class="profile-content-image__name">${user?.name}</h1>
        </article>
      `;
  }
}
