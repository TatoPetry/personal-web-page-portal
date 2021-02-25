import React from "react";
import ThemeButtons from "../theme-buttons/theme.buttons";

export interface Props {
    
}
 
export interface State {
    
}
 
class Header extends React.Component<Props, State> {
    state = { }
    render() { 
        return (
           <div className="header">
               <ThemeButtons />
           </div>
        );
    }
}
 
export default Header;