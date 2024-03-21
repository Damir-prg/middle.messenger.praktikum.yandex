import { IUser } from 'shared/types/api';
import UserApi from './user';

const userApi = new UserApi();

const errorHandler = <T>(response: any): T => {
  if (response?.reason) {
    throw new Error(response.reason);
  }
  return response as T;
};

export const api = {
  signUp: async (data: IUser.SignUpRequest): Promise<IUser.SignUpResponse> => {
    const response = await userApi.create(data);
    return errorHandler<IUser.SignUpResponse>(response);
  },
  signIn: async (data: IUser.SignInRequest): Promise<IUser.SignInResponse> => {
    const response = await userApi.login(data);
    return errorHandler<IUser.SignInResponse>(response);
  },
  userInfo: async (): Promise<IUser.InfoResponse> => {
    const response = await userApi.info();
    return errorHandler<IUser.InfoResponse>(response);
  },
  logout: async (): Promise<IUser.LogoutResponse> => {
    const response = await userApi.logout();
    return errorHandler<IUser.LogoutResponse>(response);
  },
};
