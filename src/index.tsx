import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import LayoutContainer from './shared/components/layout-container/layout-container';
import { ThemeContextProvider } from './shared/contexts/theme-context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>            
      <LayoutContainer />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
