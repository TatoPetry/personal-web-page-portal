import React from "react";
import ThemeButtons from "../theme-buttons/theme.buttons";
// import {ReactComponent as Angular} from '../../../assets/images/angular_icon.svg';
import HeaderMenuControl from "./header-menu-control/header-menu-control";
import './header.scss';

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
                   <div className="slot2"> 
                    <h1>Artho Petry</h1>
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