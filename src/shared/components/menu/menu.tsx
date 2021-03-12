import React from "react";
import { MenuControlContext} from "../../contexts/menu-control-context";
import MenuButton from "./menu-button";
import './menu.scss';
import {ReactComponent as HomeIcon} from '../../../assets/images/home_icon.svg';
import {ReactComponent as ArticlesIcon} from '../../../assets/images/newspaper_icon.svg';
import {ReactComponent as VideosIcon} from '../../../assets/images/youtube_icon.svg';
import {ReactComponent as PortfolioIcon} from '../../../assets/images/portfolio.svg';
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
                <MenuButton text={'Home'} icon={[<HomeIcon/>]} route=""></MenuButton>
                <MenuButton text={'Artigos'} icon={[<ArticlesIcon/>]} route={'articles'}></MenuButton>
                <MenuButton text={'Videos'} icon={[<VideosIcon/>]} route={'videos'}></MenuButton>
                <MenuButton text={'Portfolio'} icon={[<PortfolioIcon/>]} route={'portfolio'}></MenuButton>
            </div>
        );
    }
}
 
export default Menu;