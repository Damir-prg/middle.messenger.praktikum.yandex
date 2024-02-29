import { IProfileListItemProps } from 'entities/profileListItem';
import Block from 'shared/core/Block';

interface IProfileProps {
  profileListItems: IProfileListItemProps[];
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
    });
  }

  protected render(): string {
    return `
        {{#RowLayout}}
          {{{ ProfileSidebar }}}
          {{#ProfileContent}}
            {{{ ProfileImage }}}
            {{{ ProfileInfoList }}}
            {{#ProfileList}}
              {{#ProfileListItem}}
                {{{Link label="Изменить данные" linkType="primary" }}}
              {{/ProfileListItem}}
              {{#ProfileListItem}}
                {{{Link label="Изменить пароль" linkType="primary" }}}
              {{/ProfileListItem}}
              {{#ProfileListItem}}
                {{{Link label="Выйти" linkType="danger" }}}
              {{/ProfileListItem}}
            {{/ProfileList}}
          {{/ProfileContent}}
        {{/RowLayout}}
    `;
  }
}
