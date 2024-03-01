import { registerComponent } from 'shared/core/registerComponents';
import AuthLoginFields from './authLoginFields';
import AuthRegisterFields from './authRegisterFields';
import AuthSubmit from './authSubmit';
import ChatsAsideHeaderFields from './chatsAsideHeaderFields';
import ChatsAsideList from './chatsAsideList';
import ChatsMessages from './chatsMessages';
import ProfileInfo from './profileInfo';
import ProfileImage from './profileImage';

export function registerFeatures() {
  registerComponent('AuthLoginFields', AuthLoginFields);
  registerComponent('AuthRegisterFields', AuthRegisterFields);
  registerComponent('AuthSubmit', AuthSubmit);
  registerComponent('ChatsAsideHeaderFields', ChatsAsideHeaderFields);
  registerComponent('ChatsAsideList', ChatsAsideList);
  registerComponent('ChatsMessages', ChatsMessages);
  registerComponent('ProfileInfo', ProfileInfo);
  registerComponent('ProfileImage', ProfileImage);
}
