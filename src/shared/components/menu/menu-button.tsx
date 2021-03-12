import React, { ReactComponentElement } from "react";

export interface MenuButtonProps {
    icon: any[],
    text: String    
}
 
export interface MenuButtonState {
    
}
 
class MenuButton extends React.Component<MenuButtonProps, MenuButtonState> {
    // state = { :  }
    render() { 
        return ( 
            <div>{this.props.icon[0]} {this.props.text}</div>
         );
    }
}
 
export default MenuButton;