import { registerComponent } from 'shared/core/registerComponents';
import AuthLoginForm from './authLoginForm';
import AuthRegisterForm from './authRegisterForm';
import ChatsSidebar from './chatsSidebar';
import ChatsMain from './chatsMain';
import ProfileSidebar from './profileSidebar';

export function registerWidgets() {
  registerComponent('AuthLoginForm', AuthLoginForm);
  registerComponent('AuthRegisterForm', AuthRegisterForm);
  registerComponent('ChatsSidebar', ChatsSidebar);
  registerComponent('ChatsMain', ChatsMain);
  registerComponent('ProfileSidebar', ProfileSidebar);
}
