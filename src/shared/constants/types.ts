type TRequestError = {
  status: number;
  message: string;
  backButtonLabel: string;
};

export type TErrorStatusList = {
  readonly [x: string]: TRequestError;
};
