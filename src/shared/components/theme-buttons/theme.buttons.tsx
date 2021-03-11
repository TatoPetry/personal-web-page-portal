import React, { useContext } from 'react';
import {ThemeContext} from '../../contexts/theme-context'
import './theme.buttons.scss';

import { Theme } from '../../enums/theme-enum';
export interface Props {
    
}
 
export interface State {
    
}
 
class ThemeButtons  extends React.Component<Props, State> {
    
    theme = Theme;

    activeTheme(theme: Theme) {
        if (theme === this.context.theme) {
            return 'active'
        }
        return ''
    }

    static contextType = ThemeContext;

    render() {
       return (
           
           <div className="theme-buttons-container">
            <button className={"theme-button dark " + this.activeTheme(this.theme.dark)} onClick={() => {this.context.setTheme(this.theme.dark)}}></button>
            <button className={"theme-button green " + this.activeTheme(this.theme.green)} onClick={() => {this.context.setTheme(this.theme.green)}}></button>
            <button className={"theme-button light " + this.activeTheme(this.theme.light)} onClick={() => {this.context.setTheme(this.theme.light)}}></button>
          </div>

       )
    }
}
 
export default ThemeButtons;