import Block from 'shared/core/Block';
import ArrowButton from 'shared/ui/arrowButton';
import Aside from 'shared/ui/aside';
import { navigate } from 'shared/utilities/navigate';

export interface IProfileSidebarProps {
  handleClick: () => void;
}

type Ref = {
  sidebarWrapper?: Aside;
  button?: ArrowButton;
};

export default class ProfileSidebar extends Block<IProfileSidebarProps, Ref> {
  constructor(props: IProfileSidebarProps) {
    super({
      ...props,
      handleClick: () => {
        navigate('chats');
      },
    });
  }

  protected render(): string {
    return `
        {{#Aside type="center" ref="sidebarWrapper"}}
            {{{ ArrowButton 
                onClick=handleClick
                orientation="left" 
                ref="button" }}}
        {{/Aside}}    
        `;
  }
}
