import { routes } from 'app/withRoutes';
import { IProfileListItemProps } from 'entities/profileListItem';
import { api } from 'shared/api';
import Block from 'shared/core/Block';
import Router from 'shared/router/Router';

export interface IProfileInfoProps {
  profileListItems: IProfileListItemProps[];
}

export default class ProfileInfo extends Block<IProfileInfoProps> {
  constructor() {
    super({
      profileListItems: [],
    });

    api
      .userInfo()
      .then((data) => {
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
      })
      .catch((error) => {
        console.error(error);
        Router.go(routes.login.route);
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
