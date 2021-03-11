import React from "react";
import { ThemeContext } from '../../contexts/theme-context';
import './layout-container.scss';
import Header from "../header/header";
import Menu from "../menu/menu";
import RouterContent from "../router-content/router-content";


class LayoutContainer extends React.Component {
  state = {
  }

  static contextType = ThemeContext;
  
  render() {
    const {theme, setTheme} = this.context;


    return (
        <div className={"main-container " + theme}>
          <Header />
          <Menu />
          <RouterContent />
        </div>
    );
  }
}

export default LayoutContainer;



