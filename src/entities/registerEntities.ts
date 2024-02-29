import { registerComponent } from 'shared/core/registerComponents';
import Error from './error';
import AuthForm from './authForm';
import ChatsAsideHeader from './chatsAsideHeader';
import ChatsAsideHeaderLink from './chatsAsideHeaderLink';
import ChatsList from './chatsList';
import ChatsListItem from '../entities/chatsListItem';
import ChatsContent from './chatsContent';
import ChatsContentHeader from './chatsContentHeader';
import ChatsContentFooter from './chatsContentFooter';
import ChatsContentMessages from './chatsContentMessages';
import ChatsContentMessageItem from './chatsContentMessageItem';
import ProfileContent from './profileContent';
import ProfileImage from './profileImage';
import ProfileList from './profileList';
import ProfileListItem from './profileListItem';

export function registerEntities() {
  registerComponent('Error', Error);
  registerComponent('AuthForm', AuthForm);
  registerComponent('ChatsAsideHeader', ChatsAsideHeader);
  registerComponent('ChatsAsideHeaderLink', ChatsAsideHeaderLink);
  registerComponent('ChatsList', ChatsList);
  registerComponent('ChatsListItem', ChatsListItem);
  registerComponent('ChatsContent', ChatsContent);
  registerComponent('ChatsContentHeader', ChatsContentHeader);
  registerComponent('ChatsContentFooter', ChatsContentFooter);
  registerComponent('ChatsContentMessages', ChatsContentMessages);
  registerComponent('ChatsContentMessageItem', ChatsContentMessageItem);
  registerComponent('ProfileContent', ProfileContent);
  registerComponent('ProfileImage', ProfileImage);
  registerComponent('ProfileList', ProfileList);
  registerComponent('ProfileListItem', ProfileListItem);
}
