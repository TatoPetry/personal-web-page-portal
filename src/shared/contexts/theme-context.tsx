import { Children, createContext } from 'react';
import { Theme } from '../enums/theme-enum';
import React from 'react';



export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
}


export interface Props {
    
}

export interface State {
    theme: Theme;    
}

export const ThemeContext = createContext<ThemeContextType>({theme: Theme.dark, setTheme: (e) => { console.log('no provider instance')}});

export class ThemeContextProvider extends React.Component<Props, State> {

    state = {
        theme: Theme.dark        
    }

    setTheme = (item: Theme) => {
        this.setState((prevState) => ({theme: item}))
        console.log(this.state)               
    }

    render() {
        const { children } = this.props
        const { theme } = this.state
        const { setTheme } = this 
        return ( 
          <ThemeContext.Provider value={{theme, setTheme}}>
              {children}
          </ThemeContext.Provider>         
        );
    }
}
