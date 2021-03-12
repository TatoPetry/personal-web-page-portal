import React from "react";
import { MenuControlContext} from "../../contexts/menu-control-context";
import MenuButton from "./menu-button";
import './menu.scss';
import {ReactComponent as Angular} from '../../../assets/images/angular_icon.svg';

export interface Props {
    
}
 
export interface State {
    
}


class Menu extends React.Component<Props, State> {
    // state = { :  }
    static contextType = MenuControlContext;

    render() {             
        return ( 
            <div className={("menu-container " + (this.context.menuState? 'open' : 'close'))}>
                <MenuButton text={'testando'} icon={[<Angular/>]}></MenuButton>

            </div>
        );
    }
}
 
export default Menu;