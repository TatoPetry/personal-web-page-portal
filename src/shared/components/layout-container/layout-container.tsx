import React, { useContext } from "react";
import { ThemeContext } from '../../contexts/theme-context';



import Header from "../header/header";


class LayoutContainer extends React.Component {
  state = {
  }

  static contextType = ThemeContext;
  
  render() {
    const {theme, setTheme} = this.context;


    return (
        <div className={"main-container " + theme}>
          <Header />
          <button onClick={() => {setTheme('green')}}>dark</button>
        </div>
    );
  }
}

export default LayoutContainer;



