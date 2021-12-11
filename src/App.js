import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import React, { useEffect } from 'react';
import { Compte, Connect, ErrorPage, Home, Register } from './pages';

function App() {
  const storedValueAsTokenHeader = localStorage.getItem("tokenHeader"); //On récupére la variable tokenHeader dans les variables local.
  const [tokenHeader, setTokenHeader] = React.useState(
    storedValueAsTokenHeader ? storedValueAsTokenHeader : "" //Si la variable local exist, on donne la valeur à la variable tokenHeader, sinon on l'initialise avec une chaine de caractère vide.
  )

  useEffect(() => {
    localStorage.setItem("tokenHeader", tokenHeader); // A chaque changement de la variable tokenHeader, on change aussi la variable local.
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
           {/* Pour chaque path de l'url, on va afficher les pages correspondante. */}
          <Route path="/" exact>
            <Home tokenHeader={ tokenHeader }/>
          </Route>

          <Route path="/userConnect" exact>
            <Connect setTokenHeader={ setTokenHeader } tokenHeader={ tokenHeader }/>
          </Route>

          <Route path="/userCompte" exact>
            <Compte tokenHeader={ tokenHeader } />
          </Route>

          <Route path="/newUser" exact>
            <Register tokenHeader={ tokenHeader }/>
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
