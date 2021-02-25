import React, { useContext } from 'react';
import {ThemeContext} from '../../contexts/theme-context'

import { Theme } from '../../enums/theme-enum';
export interface Props {
    
}
 
export interface State {
    
}
 
class ThemeButtons  extends React.Component<Props, State> {
    
    theme = Theme;

    static contextType = ThemeContext;

    render() {
        console.log(this.context) 
       return (
           
           <div className="theme-buttons-container">
            <button onClick={() => {this.context.setTheme(this.theme.dark)}}>dark</button>
            <button onClick={() => {this.context.setTheme(this.theme.green)}}>green</button>
            <button onClick={() => {this.context.setTheme(this.theme.light)}}>light</button>
            <h1>{this.context.theme}</h1>
          </div>

       )
    }
}
 
export default ThemeButtons;