import React from 'react';

import './App.css';
import Index from './Components/Index';
import BodyPage from './Components/Body';
import Navigationbar from './Components/Navigation';
import Footerfile from './Components/FooterFile';
import Login from './Components/Login';
import Registration from './Components/Registration'
import { BrowserRouter as Router,Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navigationbar />
      <BrowserRouter>
        <BodyPage>
          <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Registration} />
          </Switch>
          </Router>
        </BodyPage>
      </BrowserRouter>
      <Footerfile />
    </React.Fragment>
  );
}

export default App;
