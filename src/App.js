import React, { createContext, useState } from 'react';
import Home from './component/Home/Home';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './component/NoMatch/NoMatch';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import VolunteerDashboard from './component/VolunteerDashboard/VolunteerDashboard';
import PrivatRoute from './component/PrivatRoute/PrivatRoute';
import RegisteredVolunteer from './component/AdminDashboard/RegisteredVolunteer';
import AddEvent from './component/AdminDashboard/AddEvent';
import AllEvents from './component/AdminDashboard/AllEvents';

export const AllContext = createContext();

function App() {
  const [allStates, setAllStates] = useState({
    name: '',
    email: '',
  })
  return (
    <AllContext.Provider value={[allStates, setAllStates]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivatRoute path="/register/:id">
            <Register />
          </PrivatRoute>
          <PrivatRoute path="/events">
            <VolunteerDashboard />
          </PrivatRoute>
          <Route path="/admin/registeredlist">
            <RegisteredVolunteer />
          </Route>
          <Route path='/admin/addEvent'>
            <AddEvent></AddEvent>
          </Route>
          <Route path='/admin/allEvents'>
            <AllEvents></AllEvents>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </AllContext.Provider>
  );
}

export default App;
