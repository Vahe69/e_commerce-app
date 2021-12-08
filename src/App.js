import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import React, { useEffect } from 'react';
import { Compte, Connect, ErrorPage, Home } from './pages';

function App() {
  const storedValueAsTokenHeader = localStorage.getItem("tokenHeader")
  const [tokenHeader, setTokenHeader] = React.useState(
    storedValueAsTokenHeader ? storedValueAsTokenHeader : ""
  )

  useEffect(() => {
    localStorage.setItem("tokenHeader", tokenHeader);
  }, [tokenHeader]);

  // Une fois la fenêtre fermer, on va clear le stockage local.
  window.close = function (e) {
    var storage = window.localStorage;
    storage.clear()
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home tokenHeader={ tokenHeader }/>
          </Route>

          <Route path="/userConnect" exact>
            <Connect setTokenHeader={ setTokenHeader } />
          </Route>

          <Route path="/userCompte" exact>
            <Compte tokenHeader={ tokenHeader } />
          </Route>

          <Route path="/404" exact>
            <ErrorPage />
          </Route>

          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
