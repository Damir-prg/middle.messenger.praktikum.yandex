import Block from 'shared/core/Block';

export interface IProfileListProps {}

export default class ProfileList extends Block<IProfileListProps> {
  constructor(props: IProfileListProps) {
    super(props);
  }

  protected render(): string {
    return `
        <ul class="profile-content-list"></ul>
      `;
  }
}
