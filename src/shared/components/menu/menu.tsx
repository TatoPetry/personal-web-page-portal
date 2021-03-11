import React from "react";
import { MenuControlContext, MenuControlContextProvider } from "../../contexts/menu-control-context";
import './menu.scss';

export interface Props {
    
}
 
export interface State {
    
}


class Menu extends React.Component<Props, State> {
    // state = { :  }
    static contextType = MenuControlContext;

    render() {             
        return ( 
            <div className={("menu-container " + (this.context.menuState? 'open' : 'close'))}>menu</div>
        );
    }
}
 
export default Menu;