import { createContext } from 'react';
import React from 'react';



export type MenuControlContextType = {
    menuState: boolean;
    setMenuState: (menuState: boolean) => void;
}

export interface Props {
    
}

export interface State {
    menuState: boolean;    
}

export const MenuControlContext = createContext<MenuControlContextType>({menuState: false, setMenuState: (e) => { console.log('no provider instance')}});
  
 export class MenuControlContextProvider extends React.Component<Props, State> {

    state = {
        menuState: true        
    }

    setMenuState = (item: boolean) => {
        console.log(item);
        this.setState((prevState) => ({menuState: item}))
                       
    }


    render() {
        const { children } = this.props
        const { menuState } = this.state
        const { setMenuState } = this 
        return ( 
          <MenuControlContext.Provider value={{menuState, setMenuState}}>
              {children}
          </MenuControlContext.Provider>         
        );
    }
}
