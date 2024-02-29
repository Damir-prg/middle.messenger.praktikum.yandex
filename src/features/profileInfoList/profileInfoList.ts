import { IProfileListItemProps } from 'entities/profileListItem';
import Block from 'shared/core/Block';

export interface IProfileInfoListProps {
  profileListItems: IProfileListItemProps[];
}

export default class ProfileInfoList extends Block<IProfileInfoListProps> {
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
