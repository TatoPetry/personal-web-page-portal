import React from "react";
import ThemeButtons from "../theme-buttons/theme.buttons";
// import {ReactComponent as Angular} from '../../../assets/images/angular_icon.svg';
import HeaderMenuControl from "./header-menu-control/header-menu-control";

export interface Props {
    
}
 
export interface State {
    
}
 
class Header extends React.Component<Props, State> {
    state = { }
    render() { 
        return (
           <div className="header">
               <HeaderMenuControl />
               <ThemeButtons />
           </div>
        );
    }
}
 
export default Header;