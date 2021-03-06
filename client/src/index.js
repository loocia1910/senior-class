import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './store';
import ScrollToTop from './components/scrolltoTop/ScrollToTop';
import './index.module.css';

const persistor = persistStore(store);

ReactDOM.render(
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollToTop />
          <App />
        </PersistGate>
      </Provider>
    </Router>
  ,
  document.getElementById('root')
);

