import React, { Children } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export interface Props {
    
}
 
export interface State {
    name: string
    
}
 
class  Test extends React.Component<Props, State> {
    state = { name: 'Rogerio'  }
    render() { 
        return (
            <ThemeContext.Consumer>
                {
                    value =>   <h1>{value.theme}</h1>
      
                }
            </ThemeContext.Consumer>
          );
    }
}
 
export default Test;