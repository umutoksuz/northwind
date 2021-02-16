import './App.css';
import SearchPage from './SearchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import LoginGoogle from './Login/LoginGoogle';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={LoginGoogle} />
          <Route path='/orders' exact component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
