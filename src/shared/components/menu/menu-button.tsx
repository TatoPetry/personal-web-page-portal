import React, { ReactComponentElement } from "react";
import {BrowserRouter, Link}  from "react-router-dom";
import "./menu-button.scss";
export interface MenuButtonProps {
    icon: any[],
    text: String,
    route: String    
}
 
export interface MenuButtonState {
    
}
 
class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
    // state = { :  }
    render() { 
        return (
            // <Router>
                <Link to={'/' + this.props.route}>
                   <div className="link-container">
                       <div className="link-icon">
                         {this.props.icon[0]}
                       </div>
                       <div className="link-text">
                          {this.props.text}
                       </div>
                    </div>
                </Link>
            // </Router> 
         );
    }
}
 
export default MenuButton;