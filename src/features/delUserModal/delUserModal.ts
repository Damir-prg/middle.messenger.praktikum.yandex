import AuthForm from 'entities/authForm';
import { api } from 'shared/api';
import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { IChat } from 'shared/types/api';
import Button from 'shared/ui/button';

export interface IDelUserModalProps {
  users?: Array<IChat.GetChatUsersResponse & { events?: Partial<TEvents> }>;
  chatId?: number;
  closeModal?: () => void;
  events?: Partial<TEvents>;
}

type Ref = {
  createChatForm?: AuthForm;
  primaryButton?: Button;
};

export default class DelUserModal extends Block<IDelUserModalProps, Ref> {
  constructor(props: IDelUserModalProps) {
    super({
      ...props,
      events: {
        submit: (e) => {
          e.preventDefault();
          e.stopPropagation();
          props?.closeModal?.();
        },
      },
    });
  }

  private loadUsers() {
    const chatId = this.props.chatId;
    if (chatId) {
      api.getChatUsers({ id: chatId }).then((data) => {
        this.setProps({
          users: data
            .map((user) => ({
              ...user,
              events: {
                click: () => {
                  api.deleteChatUsers({ users: [user.id], chatId }).then(() => {
                    this.setProps({
                      users: this.props.users?.filter((u) => u.id !== user.id),
                    });
                  });
                },
              },
            }))
            .filter((u) => u.role !== 'admin'),
        });
      });
    }
  }

  protected render(): string {
    this.loadUsers();
    return `
        {{#AuthForm 
            events=onChatCreatedEvents 
            ref="createChatForm"
        }}
            <h3>Удалить пользователя</h3>
            {{#each users}}
                {{{ ActionButton
                    type="del"
                    title=this.login
                    events=this.events
                }}}
            {{/each}}
            {{{ Button
                label="Закрыть окно"
                type="submit"
                buttonType="primary"
                ref="primaryButton"
            }}}
        {{/AuthForm}}
        `;
  }
}
