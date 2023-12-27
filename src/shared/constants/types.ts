type TRequestError = {
  status: number;
  message: string;
};

export type TErrorStatusList = {
  readonly [x: string]: TRequestError;
};

type TBaseMessageType = 'outcomming' | 'incomming' | 'date';

export type TMessage = {
  wrapperType: TBaseMessageType;
} & (
  | {
      type: 'image';
      image: string;
      alt: string;
      messageTime: string;
    }
  | { type: 'outcomming' | 'incomming'; message: string; messageTime: string; isReaded?: boolean }
  | { type: 'date'; message: string }
);
