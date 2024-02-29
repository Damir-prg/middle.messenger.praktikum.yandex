import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { navigate } from 'shared/utilities/navigate';

export interface TChatsAsideHeaderLinkProps {
  events?: Partial<TEvents>;
}
type Ref = {
  linkButton?: HTMLButtonElement;
};

export default class ChatsAsideHeaderLink extends Block<TChatsAsideHeaderLinkProps, Ref> {
  constructor() {
    super({
      events: {
        click: () => navigate('profile'),
      },
    });
  }

  protected render(): string {
    return `
        <button type="button" class="aside__link-button">
            Профиль
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="#999999" ></path>
            </svg>
        </button>
        `;
  }
}
