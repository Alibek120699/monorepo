import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, extendTheme } from 'mychakra';

import './index.css';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#1aa71a',
      // ...
      900: '#1a202c',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
