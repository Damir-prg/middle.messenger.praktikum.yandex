import { TMessage } from './types';
import { cameraImageSrc } from 'shared/assets';

export const chatMessages: Array<TMessage> = [
  { wrapperType: 'date', type: 'date', message: '19 июня' },
  {
    wrapperType: 'incomming',
    type: 'incomming',
    message:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    messageTime: '11:56',
  },
  { wrapperType: 'incomming', type: 'image', image: cameraImageSrc, alt: 'Фото камеры', messageTime: '11:59' },
  { wrapperType: 'outcomming', type: 'outcomming', message: 'Круто!', messageTime: '12:01', isReaded: true },
  {
    wrapperType: 'incomming',
    type: 'incomming',
    message:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    messageTime: '11:56',
  },
  { wrapperType: 'incomming', type: 'image', image: cameraImageSrc, alt: 'Фото камеры', messageTime: '11:59' },
  { wrapperType: 'outcomming', type: 'outcomming', message: 'Круто!', messageTime: '12:01', isReaded: true },
  {
    wrapperType: 'incomming',
    type: 'incomming',
    message:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    messageTime: '11:56',
  },
  { wrapperType: 'incomming', type: 'image', image: cameraImageSrc, alt: 'Фото камеры', messageTime: '11:59' },
  { wrapperType: 'outcomming', type: 'outcomming', message: 'Круто!', messageTime: '12:01', isReaded: true },
  {
    wrapperType: 'incomming',
    type: 'incomming',
    message:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    messageTime: '11:56',
  },
  { wrapperType: 'incomming', type: 'image', image: cameraImageSrc, alt: 'Фото камеры', messageTime: '11:59' },
  { wrapperType: 'outcomming', type: 'outcomming', message: 'Круто!', messageTime: '12:01', isReaded: true },
];
