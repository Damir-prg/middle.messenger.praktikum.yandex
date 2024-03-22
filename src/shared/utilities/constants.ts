import { IChatsContentMessageItemProps } from 'entities/chatsContentMessageItem';
import { IChatsListItemProps } from 'entities/chatsListItem/chatsListItem';

export const users: Array<IChatsListItemProps> = new Array(20).fill({
  imageUrl: 'https://randomuser.me/api/portraits/lego/6.jpg',
  name: 'Name',
  lastMessage: 'Last message ',
  time: '12:00',
  count: 1,
});

export const mockUserAvatar = 'https://randomuser.me/api/portraits/lego/6.jpg';

const imageUrl1 = `https://us.123rf.com/450wm/hihitetlin/hihitetlin2006/
hihitetlin200600732/150527513-male-in-shirt-man-hands-holds-retro-camera-horizontal-close-up.jpg?ver=6`;

const imageUrl2 = `https://encrypted-tbn0.gstatic.com/
images?q=tbn:ANd9GcRA_rbZYx977Sq27RL3maYuLQRxqbq_YVSjvCJbDwOJvTxFV58TfsHoV4xWAj22Pv6KLHU&usqp=CAU`;

const incommingMessage = `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — 
НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. 
Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще 
находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.`;

const outgoingMessage = 'Круто!';

export const messagesMock: IChatsContentMessageItemProps[] = [
  {
    date: '19 июня',
    messageType: 'date',
  },
  {
    messageType: 'incoming',
    time: '11:53',
    message: incommingMessage,
    type: 'text',
  },
  {
    messageType: 'incoming',
    type: 'image',
    imageUrl: imageUrl1,
    time: '11:55',
  },
  {
    date: '20 июня',
    messageType: 'date',
  },
  {
    messageType: 'outgoing',
    message: outgoingMessage,
    time: '00:14',
    type: 'text',
  },
  {
    messageType: 'outgoing',
    message: 'У меня тоже есть фото для тебя.',
    time: '00:18',
    type: 'text',
  },
  {
    messageType: 'outgoing',
    imageUrl: imageUrl2,
    time: '00:20',
    type: 'image',
  },
];
