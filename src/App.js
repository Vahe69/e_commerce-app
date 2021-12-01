import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import React, { useEffect } from 'react';
import { Compte, Connect, Home } from './pages';

function App() {
  const storedValueAsTokenHeader = localStorage.getItem("tokenHeader")
  const [tokenHeader, setTokenHeader] = React.useState(
    storedValueAsTokenHeader ? storedValueAsTokenHeader : ""
  )

  useEffect(() => {
    localStorage.setItem("tokenHeader", tokenHeader);
  }, [tokenHeader]);

  const user = [
    {
      id: "1",
      email: "test.test@gmail.com",
      password: "123456",
      firstname: "Jean",
      lastname: "Bois"
    },
    {
      id: "2",
      email: "test.test2@gmail.com",
      password: "654321",
      firstname: "Pierre",
      lastname: "Durant"
    }
  ];

  window.close = function (e) {
    var storage = window.localStorage;
    storage.clear()
  }

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home tokenHeader={ tokenHeader }/>
        </Route>

        <Route path="/userConnect" exact>
          <Connect setTokenHeader={ setTokenHeader } user={ user } />
        </Route>

        <Route path="/userCompte" exact>
          <Compte tokenHeader={ tokenHeader } user={ user } />
        </Route>
      </Router>
    </div>
  );
}

export default App;
