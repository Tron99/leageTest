import React from 'react';
import Home from './containers/Home'
import AddUser from './containers/AddUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App container">
  <Router>
      <div>
          <ul className="nav " id="navContainer">
            <li className="nav-link active"><a>
              <Link to="/">Home</Link>
            </a>
            </li>
            <li className="nav-link"><a>
              <Link to="/addUser">Add User</Link>
            </a>
            </li>
          </ul>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addUser">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </Router>    </div>
  );
}

export default App;
