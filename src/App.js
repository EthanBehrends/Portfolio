import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Components/Home'
import Resume from './Components/Resume'

function App() {
  return (<div>
    <CssBaseline/>
    <Router>
      <Switch>
        <Route path="/resume">
          <Resume></Resume>
        </Route>
      </Switch>
      <Switch>
        <Route exact path ="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  </div>);
}

export default App;
