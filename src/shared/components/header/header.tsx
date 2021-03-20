import React from "react";
import ThemeButtons from "../theme-buttons/theme.buttons";
// import {ReactComponent as Angular} from '../../../assets/images/angular_icon.svg';
import HeaderMenuControl from "./header-menu-control/header-menu-control";
import './header.scss';
import { ReactComponent as Logo} from "../../../assets/images/logo.svg";

export interface Props {
    
}
 
export interface State {
    
}
 
class Header extends React.Component<Props, State> {
    state = { }
    render() { 
        return (
           <div className="header">
               <div className="header-slots">
                   <div className="slot1">
                    <HeaderMenuControl />                                           
                   </div>
                   {/* To centralize slot2 */}
                   <div></div>

                   <div className="slot2"> 
                    <Logo />
                   </div>

                   <div className="slot3">
                       <ThemeButtons />
                   </div>
               </div>
           </div>
        );
    }
}
 
export default Header;