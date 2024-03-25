import { routes } from 'app/withRoutes';
import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Router from 'shared/router/Router';

interface IProfileProps {
  editInfoEvents?: Partial<TEvents>;
  editPasswordEvents?: Partial<TEvents>;
  exitEvents?: Partial<TEvents>;
  editInfoSideEvent?: () => void;
  editPasswordSideEvent?: () => void;
  isEditImage?: boolean;
  isNavigateVisible?: boolean;
  content?: 'info' | 'editInfo' | 'password';
}

export default class Profile extends Block<IProfileProps> {
  constructor() {
    super({
      isNavigateVisible: true,
      isEditImage: false,
      content: 'info',
      editInfoEvents: {
        click: () =>
          this.setProps({
            isNavigateVisible: false,
            isEditImage: true,
            content: 'editInfo',
          }),
      },
      editInfoSideEvent: () =>
        this.setProps({
          isNavigateVisible: true,
          isEditImage: false,
          content: 'info',
        }),
      editPasswordEvents: {
        click: () =>
          this.setProps({
            isNavigateVisible: false,
            content: 'password',
          }),
      },
      editPasswordSideEvent: () => {
        this.setProps({
          isNavigateVisible: true,
          content: 'info',
        });
      },
      exitEvents: {
        click: () => api.logout().finally(() => Router.go(routes.login.route)),
      },
    });
  }

  protected render(): string {
    const { isNavigateVisible, content } = this.props;
    return `
        {{#RowLayout}}
          {{{ ProfileSidebar }}}
          {{#ProfileContent}}
            {{{ ProfileImage isEdit=isEditImage }}}
            
            ${
              content === 'editInfo'
                ? `
                    {{{ ProfileEditInfoForm submitSideEvent=editInfoSideEvent }}}
                  `
                : content === 'password'
                  ? `
                    {{{ ProfileEditPasswordForm submitSideEvent=editPasswordSideEvent }}}
                  `
                  : '{{{ ProfileInfo }}}'
            }

            ${
              isNavigateVisible
                ? `
              {{#ProfileList}}
              {{#ProfileListItem}}
                {{{ Link 
                  label="Изменить данные" 
                  linkType="primary" 
                  events=editInfoEvents
                }}}
              {{/ProfileListItem}}
              {{#ProfileListItem}}
                {{{ Link 
                    label="Изменить пароль" 
                    linkType="primary" 
                    events=editPasswordEvents
                  }}}
              {{/ProfileListItem}}
              {{#ProfileListItem}}
                {{{ Link 
                    label="Выйти" 
                    linkType="danger" 
                    events=exitEvents 
                }}}
              {{/ProfileListItem}}
            {{/ProfileList}}
              `
                : ''
            }
          {{/ProfileContent}}
        {{/RowLayout}}
    `;
  }
}
