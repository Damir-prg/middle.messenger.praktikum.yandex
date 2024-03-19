import { registerComponent } from 'shared/core/registerComponents';
import LoginForm from './loginForm';
import AuthRegisterForm from './authRegisterForm';
import ChatsSidebar from './chatsSidebar';
import ChatsMain from './chatsMain';
import ProfileSidebar from './profileSidebar';
import WelcomeList from './welcomeList';
import ProfileEditInfoForm from './profileEditInfoForm';
import ProfileEditPasswordForm from './profileEditPasswordForm';

export function registerWidgets() {
  registerComponent('LoginForm', LoginForm);
  registerComponent('AuthRegisterForm', AuthRegisterForm);
  registerComponent('ChatsSidebar', ChatsSidebar);
  registerComponent('ChatsMain', ChatsMain);
  registerComponent('ProfileSidebar', ProfileSidebar);
  registerComponent('WelcomeList', WelcomeList);
  registerComponent('ProfileEditInfoForm', ProfileEditInfoForm);
  registerComponent('ProfileEditPasswordForm', ProfileEditPasswordForm);
}
