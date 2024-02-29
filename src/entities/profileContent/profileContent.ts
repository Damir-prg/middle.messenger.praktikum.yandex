import Block from 'shared/core/Block';

export default class ProfileContent extends Block<object> {
  protected render(): string {
    return `
            <section class="profile-content"></section>
        `;
  }
}
