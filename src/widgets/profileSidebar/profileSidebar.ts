import { routes } from 'app/withRoutes';
import Block from 'shared/core/Block';
import Router from 'shared/router/Router';
import ArrowButton from 'shared/ui/arrowButton';
import Aside from 'shared/ui/aside';

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
        Router.go(routes.messenger.route);
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
