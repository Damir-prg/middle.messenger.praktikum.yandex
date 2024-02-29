import Block from 'shared/core/Block';
import { TEvents } from 'shared/core/types';

export interface ISearchProps {
  events?: Partial<TEvents>;
}

type Ref = {
  search: HTMLInputElement;
};

export default class Search extends Block<ISearchProps, Ref> {
  constructor(props: ISearchProps) {
    super(props);
  }

  protected render(): string {
    return `
        <input type="search" placeholder="Поиск..." class="search" ref="search" />
      `;
  }
}
