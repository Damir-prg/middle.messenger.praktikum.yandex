import AuthForm from 'entities/authForm';
import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import Button from 'shared/ui/button';
import Input from 'shared/ui/input';

export interface IAddUserModalProps {
  closeModal?: () => void;
  chatId?: number;
  events?: Partial<TEvents>;
}

type Ref = {
  createChatForm?: AuthForm;
  titleInput?: Input;
  primaryButton?: Button;
};

export default class AddUserModal extends Block<IAddUserModalProps, Ref> {
  constructor(props: IAddUserModalProps) {
    super({
      ...props,
      events: {
        submit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          const value = this.refs.titleInput?.value();

          api.searchUser({ login: value }).then((data) => {
            if (!data.length || !props.chatId) {
              this.refs.titleInput?.setError('Пользователь не найден');
            } else {
              api.addUserToChat({ chatId: props.chatId, users: [data[0].id] }).then(() => {
                props.closeModal?.();
              });
            }
          });
        },
      },
    });
  }

  protected render(): string {
    return `
        {{#AuthForm 
            events=onChatCreatedEvents 
            ref="createChatForm"
        }}
            <h3>Добавить пользователя</h3>
            {{{ Input 
                name="title"
                type="text"
                placeholder="Логин пользователя"
                ref="titleInput"
            }}}
            {{{ Button
                label="Добавить"
                type="submit"
                buttonType="primary"
                ref="primaryButton"
            }}}
      {{/AuthForm}}
        `;
  }
}
