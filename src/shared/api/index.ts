import { IChat, IUser } from 'shared/types/api';
import UserApi from './user';
import ChatApi from './chat';

const userApi = new UserApi();
const chatApi = new ChatApi();

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
  changeInfo: async (data: IUser.InfoResponse): Promise<IUser.InfoResponse> => {
    const response = await userApi.changeInfo(data);
    return errorHandler<IUser.InfoResponse>(response);
  },
  changePassword: async (data: IUser.PasswordRequest): Promise<IUser.PasswordResponse> => {
    const response = await userApi.changePassword(data);
    return errorHandler<IUser.PasswordResponse>(response);
  },
  changeAvatar: async (data: FormData): Promise<IUser.InfoResponse> => {
    const response = await userApi.changeAvatar(data);
    return errorHandler<IUser.InfoResponse>(response);
  },

  getChats: async (data?: IChat.GETChatUsersRequest): Promise<IChat.GETChatsResponse[]> => {
    const response = await chatApi.getChats(data);
    return errorHandler<IChat.GETChatsResponse[]>(response);
  },
  createChat: async (data?: IChat.CreateChatRequest): Promise<IChat.CreateChatResponse> => {
    const response = await chatApi.createChat(data);
    return errorHandler<IChat.CreateChatResponse>(response);
  },

  changeChatAvatar: async (data: FormData): Promise<IChat.GETChatsResponse> => {
    const response = await chatApi.changeAvatar(data);
    return errorHandler<IChat.GETChatsResponse>(response);
  },

  deleteChat: async (data: { chatId: number }): Promise<void> => {
    const response = await chatApi.deleteChat(data);
    return errorHandler<void>(response);
  },
};
