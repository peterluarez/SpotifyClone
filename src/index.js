import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact render={() => <App />} />
      <Route path='/Login' exact component={Login} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
