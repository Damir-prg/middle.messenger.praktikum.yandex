import { HTTPTransport } from './httpTransport';
import { IUser, ApiError } from 'shared/types/api';

const authApi = new HTTPTransport('/auth');

export default class UserApi {
  async create(data: IUser.SignUpRequest): Promise<IUser.SignUpResponse | ApiError> {
    return authApi.post<IUser.SignUpResponse>('/signup', { data });
  }

  async login(data: IUser.SignInRequest): Promise<IUser.SignInResponse | ApiError> {
    return authApi.post<IUser.SignInResponse>('/signin', { data });
  }

  async info(): Promise<IUser.InfoResponse | ApiError> {
    return authApi.get('/user');
  }

  async logout(): Promise<IUser.LogoutResponse | ApiError> {
    return authApi.post('/logout');
  }
}
