import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/all' component={AllUsers}/>
          <Route exact path='/add' component={AddUser}/>
          <Route exact path='/edit/:id' component={EditUser}/>
        </Switch>
    </Router>
  );
}

export default App;
