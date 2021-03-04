import React from "react";
import { MenuControlContext } from "../../../contexts/menu-control-context";
import './header-menu-control.scss';
export interface HeaderMenuControlProps {
    
}
 
export interface HeaderMenuControlState {
    
}
 
class HeaderMenuControl extends React.Component<HeaderMenuControlProps, HeaderMenuControlState> {

    static contextType = MenuControlContext;
    render() { 
        return (
            <button className="header-menu-control" onClick={() => {this.context.setMenuState((!this.context.menuState))}}>Menu control</button>
          );
    }
}
 
export default HeaderMenuControl;