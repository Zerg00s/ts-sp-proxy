import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import About from './About';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter  >
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/about" component={About} />
    </Switch>
  </HashRouter>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
