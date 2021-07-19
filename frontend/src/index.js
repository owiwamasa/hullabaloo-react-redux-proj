import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
import * as sessionActions from './store/session'
import { ModalProvider } from './context/Modal';
import { getAllPodcasts } from './store/podcast'

const store = configureStore();
store.dispatch(getAllPodcasts())

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF()

  window.csrfFetch = csrfFetch
  window.store = store
  window.sessionActions = sessionActions
}

function Root() {
  return (
    <ModalProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
