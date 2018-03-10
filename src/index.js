import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router'
import browserHistory from './browserHistory'
import store from './store'
import Home from './comps/Home';
import Page from './comps/Page';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/page" component={Page} />
      </App>
    </ConnectedRouter>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
