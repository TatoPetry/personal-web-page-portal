import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import LayoutContainer from './shared/components/layout-container/layout-container';
import { ThemeContextProvider } from './shared/contexts/theme-context';
import { MenuControlContextProvider } from './shared/contexts/menu-control-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <MenuControlContextProvider>
          <LayoutContainer />
        </MenuControlContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
