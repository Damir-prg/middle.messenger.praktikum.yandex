import { registerComponent } from 'shared/core/registerComponents';
import LoginFields from './loginFields';
import AuthRegisterFields from './authRegisterFields';
import AuthSubmit from './authSubmit';
import ChatsAsideHeaderFields from './chatsAsideHeaderFields';
import ChatsAsideList from './chatsAsideList';
import ChatsMessages from './chatsMessages';
import ProfileInfo from './profileInfo';
import ProfileImage from './profileImage';
import ProfileEditInfoFields from './profileEditInfoFields';
import ProfileEditPasswordFields from './profileEditPasswordFields';

export function registerFeatures() {
  registerComponent('LoginFields', LoginFields);
  registerComponent('AuthRegisterFields', AuthRegisterFields);
  registerComponent('AuthSubmit', AuthSubmit);
  registerComponent('ChatsAsideHeaderFields', ChatsAsideHeaderFields);
  registerComponent('ChatsAsideList', ChatsAsideList);
  registerComponent('ChatsMessages', ChatsMessages);
  registerComponent('ProfileInfo', ProfileInfo);
  registerComponent('ProfileImage', ProfileImage);
  registerComponent('ProfileEditInfoFields', ProfileEditInfoFields);
  registerComponent('ProfileEditPasswordFields', ProfileEditPasswordFields);
}
