import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from 'styles/global';
import App from 'App';
import { LoaderProvider } from 'providers/LoaderProvider';

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider>
      <App />
      <GlobalStyle />
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
