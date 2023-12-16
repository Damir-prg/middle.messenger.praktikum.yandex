type TRequestError = {
  status: number;
  message: string;
};

export type TErrorStatusList = {
  readonly [x: string]: TRequestError;
};
