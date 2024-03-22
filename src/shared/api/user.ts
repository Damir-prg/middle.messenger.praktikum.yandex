import { HTTPTransport } from './httpTransport';
import { IUser, ApiError } from 'shared/types/api';

const authApi = new HTTPTransport('');

export default class UserApi {
  async create(data: IUser.SignUpRequest): Promise<IUser.SignUpResponse | ApiError> {
    return authApi.post<IUser.SignUpResponse>('/auth/signup', { data });
  }

  async login(data: IUser.SignInRequest): Promise<IUser.SignInResponse | ApiError> {
    return authApi.post<IUser.SignInResponse>('/auth/signin', { data });
  }

  async info(): Promise<IUser.InfoResponse | ApiError> {
    return authApi.get('/auth/user');
  }

  async logout(): Promise<IUser.LogoutResponse | ApiError> {
    return authApi.post('/auth/logout');
  }

  async changeInfo(data: IUser.InfoResponse): Promise<IUser.InfoResponse | ApiError> {
    return authApi.put<IUser.InfoResponse>('/user/profile', { data });
  }
}
