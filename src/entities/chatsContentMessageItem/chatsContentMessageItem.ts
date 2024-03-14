import Block from 'shared/core/Block';

export interface IChatsContentMessageItemProps {
  messageType?: 'incoming' | 'outgoing' | 'date';
  type?: 'image' | 'text';
  imageUrl?: string;
  time?: string;
  message?: string;
  date?: string;
}

export default class ChatsContentMessageItem extends Block<IChatsContentMessageItemProps> {
  constructor(props: IChatsContentMessageItemProps) {
    super(props);
  }

  protected render(): string {
    const { messageType, type, imageUrl, time, message, date } = this.props;

    if (date && messageType === 'date') {
      return `
        <li class="chats-content-messages__message chats-content-messages__message_${messageType}">
            ${date}
        </li>
      `;
    }

    return `
      <li class="chats-content-messages__message chats-content-messages__message_${messageType}">
        ${
          type === 'image'
            ? `
            <div class="chats-content-messages__image chats-content-messages__image_${messageType}">
                <img src="${imageUrl}" alt="image ${messageType} at ${time}" />
                <span class="chats-content-messages__image-time">${time}</span>
            </div>
            `
            : `
            <div class="chats-content-messages__text chats-content-messages__text_${messageType}">
                <p class="chats-content-messages__text-message">${message}</p>
                <span class="chats-content-messages__text_${messageType}-time">${time}</span>
            </div>    
            `
        }
      </li>
    `;
  }
}
