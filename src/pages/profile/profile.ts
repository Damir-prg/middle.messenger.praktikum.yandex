import { IProfileListItemProps } from 'entities/profileListItem';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { navigate } from 'shared/utilities/navigate';

interface IProfileProps {
  profileListItems: IProfileListItemProps[];
  exitEvents?: Partial<TEvents>;
}

export default class Profile extends Block<IProfileProps> {
  constructor() {
    super({
      profileListItems: [
        { title: 'Почта', value: 'pochta@yandex.ru' },
        { title: 'Логин', value: 'ivanivanov' },
        { title: 'Имя', value: 'Иван' },
        { title: 'Фамилия', value: 'Иванов' },
        { title: 'Имя в чате', value: 'Иван' },
        { title: 'Телефон', value: '+7 (909) 967 30 30' },
      ],
      exitEvents: {
        click: () => navigate('authLogin'),
      },
    });
  }

  protected render(): string {
    return `
        {{#RowLayout}}
          {{{ ProfileSidebar }}}
          {{#ProfileContent}}
            {{{ ProfileImage isEdit=true }}}
            {{{ ProfileEditInfo }}}
            {{#ProfileList}}
              {{#ProfileListItem}}
                {{{Link label="Изменить данные" linkType="primary" }}}
              {{/ProfileListItem}}
              {{#ProfileListItem}}
                {{{Link label="Изменить пароль" linkType="primary" }}}
              {{/ProfileListItem}}
              {{#ProfileListItem}}
                {{{Link label="Выйти" linkType="danger" events=exitEvents }}}
              {{/ProfileListItem}}
            {{/ProfileList}}
          {{/ProfileContent}}
        {{/RowLayout}}
    `;
  }
}
