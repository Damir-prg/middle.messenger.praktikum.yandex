import { IProfileListItemProps } from 'entities/profileListItem';
import { api } from 'shared/api';
import Block from 'shared/core/Block';

export interface IProfileInfoProps {
  profileListItems: IProfileListItemProps[];
}

export default class ProfileInfo extends Block<IProfileInfoProps> {
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

    api.userInfo().then((data) => {
      this.setProps({
        profileListItems: [
          { title: 'Почта', value: data.email },
          { title: 'Логин', value: data.login },
          { title: 'Имя', value: data.first_name },
          { title: 'Фамилия', value: data.second_name },
          { title: 'Имя в чате', value: data.display_name },
          { title: 'Телефон', value: data.phone },
        ],
      });
    });
  }

  protected render(): string {
    return `
            {{#ProfileList}}
              {{#each profileListItems}}
                {{{ ProfileListItem 
                      title=this.title 
                      value=this.value 
                }}}
              {{/each}}
            {{/ProfileList}}
      `;
  }
}
