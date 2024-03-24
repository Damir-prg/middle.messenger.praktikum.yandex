import { registerComponent } from 'shared/core/registerComponents';
import LoginFields from './loginFields';
import SignUpFields from './signUpFields';
import AuthSubmit from './authSubmit';
import ChatsAsideHeaderFields from './chatsAsideHeaderFields';
import ChatsAsideList from './chatsAsideList';
import ChatsMessages from './chatsMessages';
import ProfileInfo from './profileInfo';
import ProfileImage from './profileImage';
import ProfileEditInfoFields from './profileEditInfoFields';
import ProfileEditPasswordFields from './profileEditPasswordFields';
import AddUserModal from './addUserModal';

export function registerFeatures() {
  registerComponent('LoginFields', LoginFields);
  registerComponent('SignUpFields', SignUpFields);
  registerComponent('AuthSubmit', AuthSubmit);
  registerComponent('ChatsAsideHeaderFields', ChatsAsideHeaderFields);
  registerComponent('ChatsAsideList', ChatsAsideList);
  registerComponent('ChatsMessages', ChatsMessages);
  registerComponent('ProfileInfo', ProfileInfo);
  registerComponent('ProfileImage', ProfileImage);
  registerComponent('ProfileEditInfoFields', ProfileEditInfoFields);
  registerComponent('ProfileEditPasswordFields', ProfileEditPasswordFields);
  registerComponent('AddUserModal', AddUserModal);
}
