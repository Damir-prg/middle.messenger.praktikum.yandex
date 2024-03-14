import { IChatsListItemProps } from 'entities/chatsListItem/chatsListItem';
import Block from 'shared/core/Block';
import { CONSTANTS } from 'shared/utilities';

export interface IProfileImageProps {
  isEdit?: boolean;
  user?: IChatsListItemProps;
}

export default class ProfileImage extends Block<IProfileImageProps> {
  constructor(props: IProfileImageProps) {
    super({
      ...props,
      user: CONSTANTS.users[0],
    });
  }

  protected render(): string {
    const { user, isEdit } = this.props;

    return `
        <article class="profile-content-image">
            <div class="profile-content-image__image ${isEdit ? 'profile-content-image__image_pointer' : ''}">
                <img src="${user?.imageUrl}" alt="${user?.name} avatar" >
                <div class="profile-content-image__image_pointer__hover">Поменять аватар</div>
            </div>
            <h1 class="profile-content-image__name">${user?.name}</h1>
        </article>
      `;
  }
}
