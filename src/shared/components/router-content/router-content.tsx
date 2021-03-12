import React from "react";
import "./router-content.scss";
import { Route } from "react-router-dom";
import HomePage from "../../../public/pages/home/home";
import ArticlesPage from "../../../public/pages/articles/articles";
import VideosPage from "../../../public/pages/videos/videos";
import PortfolioPage from "../../../public/pages/portfolio/portfolio";

export interface Props {
    
}
 
export interface State {
    
}
 
class RouterContent extends React.Component<Props, State> {
    // state = { :  }
    render() { 
        return ( 
            <div className="main-content">
              <Route path="/" exact component={HomePage} />
              <Route path="/articles" exact component={ArticlesPage} />
              <Route path="/videos" exact component={VideosPage} />
              <Route path="/portfolio" exact component={PortfolioPage} />
            </div>
         );
    }
}
 
export default RouterContent;