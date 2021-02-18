import './App.css';
import SearchPage from './SearchPage/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import LoginGoogle from './Login/LoginGoogle';
import DetailsPage from './DetailsPage/DetailsPage';

const TOKEN_KEY = 'token';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem(TOKEN_KEY);
        if (token != null) {
            setLoggedIn(true);
        }
  }, []);

  const renderRedirect = () => {
    if (loggedIn) {
      return <Redirect to='/orders'/>
    }
  }

  return (
    <div className="App">
      <Router>
        {renderRedirect()}
        <Switch>
          <Route path='/' exact component={LoginGoogle} />
          <Route path='/orders' exact component={SearchPage} />
          <Route path='/orders/details' exact component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
