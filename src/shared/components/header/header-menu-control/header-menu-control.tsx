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
            // <button className="header-menu-control" onClick={() => {this.context.setMenuState((!this.context.menuState))}}>Menu control</button>
            <div id="header-menu-control" 
            className={this.context.menuState? 'open': 'close'} 
            onClick={() => {this.context.setMenuState((!this.context.menuState))}}>
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </div>
          );
    }
}
 
export default HeaderMenuControl;