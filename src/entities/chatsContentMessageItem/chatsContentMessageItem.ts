import Block from 'shared/core/Block';
import { IChat } from 'shared/types/api';
import { convertIsoToHHMM } from 'shared/utilities';

export interface IChatsContentMessageItemProps extends Partial<IChat.WSMessage> {
  userId?: number;
}

export default class ChatsContentMessageItem extends Block<IChatsContentMessageItemProps> {
  constructor(props: IChatsContentMessageItemProps) {
    super(props);
  }

  protected render(): string {
    const { time, content, user_id, userId, type, file } = this.props;

    return `
      <li class="chats-content-messages__message chats-content-messages__message_${
        userId === user_id ? 'outgoing' : 'incoming'
      }">
        ${
          type === 'image'
            ? `
            <div class="chats-content-messages__image chats-content-messages__image_${
              userId === user_id ? 'outgoing' : 'incoming'
            }">
                <img src="${file}" alt="image ${userId === user_id ? 'outgoing' : 'incoming'} at ${convertIsoToHHMM(
                  time,
                )}" />
                <span class="chats-content-messages__image-time">${time}</span>
            </div>
            `
            : `
            <div class="chats-content-messages__text chats-content-messages__text_${
              userId === user_id ? 'outgoing' : 'incoming'
            }">
                <p class="chats-content-messages__text-message">${content}</p>
                <span class="chats-content-messages__text_${
                  userId === user_id ? 'outgoing' : 'incoming'
                }-time">${convertIsoToHHMM(time)}</span>
            </div>    
            `
        }
      </li>
    `;
  }
}
