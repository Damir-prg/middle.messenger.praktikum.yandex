import { IChatsListItemProps } from 'entities/chatsListItem/chatsListItem';

export const users: Array<IChatsListItemProps> = new Array(20).fill({
  imageUrl: 'https://randomuser.me/api/portraits/lego/6.jpg',
  name: 'Name',
  lastMessage: 'Last message ',
  time: '12:00',
  count: 1,
});

export const mockUserAvatar = 'https://randomuser.me/api/portraits/lego/6.jpg';
