import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';
import { minus, plus } from './assets';

export interface IActionButtonProps {
  type?: 'add' | 'del';
  events?: Partial<TEvents>;
}

type Ref = {
  button?: HTMLButtonElement;
};

const innerText = {
  add: 'Добавить пользователя',
  del: 'Удалить пользователя',
};
const innerImage = {
  add: plus,
  del: minus,
};

export default class ActionButton extends Block<IActionButtonProps, Ref> {
  private innerText = {
    add: 'Добавить пользователя',
    del: 'Удалить пользователя',
  };

  private innerImage = {
    add: plus,
    del: minus,
  };
  constructor(props: IActionButtonProps) {
    super({
      ...props,
      type: props?.type ? props?.type : 'add',
    });

    this.innerText = {
      add: 'Добавить пользователя',
      del: 'Удалить пользователя',
    };
    this.innerImage = {
      add: plus,
      del: minus,
    };
  }

  protected render(): string {
    const { type } = this.props;
    const resultText = innerText[type as 'add' | 'del'];

    return `
         <button class="action-button " ref="button">
             <img class="action-button__icon" src="${innerImage[type as 'add' | 'del']}" alt="иконка ${resultText}"/>
             <span class="action-button__text">${resultText}</span>
         </button>
        `;
  }
}
