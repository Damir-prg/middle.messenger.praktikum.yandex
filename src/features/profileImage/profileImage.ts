import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { IUser } from 'shared/types/api';
import { CONSTANTS } from 'shared/utilities';

export interface IProfileImageProps {
  isEdit?: boolean;
  user?: IUser.InfoResponse;
  events?: Partial<TEvents>;
}

type Ref = {
  input?: HTMLInputElement;
};

export default class ProfileImage extends Block<IProfileImageProps, Ref> {
  constructor(props: IProfileImageProps) {
    super({
      ...props,
      events: {
        change: () => {
          const input = this.refs?.input;
          if (input?.files?.[0]) {
            const formData = new FormData();
            formData.append('avatar', input.files[0]);
            api.changeAvatar(formData).then((data) => {
              this.setProps({
                user: data,
              });
            });
          }
        },
      },
    });

    api.userInfo().then((data) => {
      this.setProps({
        user: data,
      });
    });
  }

  protected render(): string {
    const { user, isEdit } = this.props;

    return `
        <article class="profile-content-image">
            <div class="profile-content-image__image ${isEdit ? 'profile-content-image__image_pointer' : ''}">
                <img src="${
                  user?.avatar
                    ? `https://ya-praktikum.tech/api/v2/resources${user?.avatar}`
                    : `${CONSTANTS.mockUserAvatar}`
                }" alt="${user?.first_name} avatar" >
                <form class="profile-content-image__image_pointer__hover">
                  <label for="avatar" class="profile-content-image__image_pointer__hover__label">Изменить</label>
                  <input
                    ref="input"
                    id="avatar" 
                    type="file" 
                    class="profile-content-image__image_pointer__hover__input" 
                    accept="image/png, image/jpeg"
                    >
                </form>
            </div>
            <h1 class="profile-content-image__name">${user?.display_name ?? user?.first_name}</h1>
        </article>
      `;
  }
}
