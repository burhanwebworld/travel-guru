import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import NavBar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';

import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import './Background.css';



export const UserContext = createContext()

function App() {

  const [user, setUser] = useState({
    name: '',
    first: '',
    last: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: ''
  })



  return (
    <section   className='bgStyle'>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/book/:placeId">
              <PlaceDetails></PlaceDetails>
            </Route>

            <PrivateRoute path='/search'>

              <Search />

            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>

            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='*/'>
              <NoMatch></NoMatch>

            </Route>
          </Switch>
        </Router>

      </UserContext.Provider>
    </section>
  );
}

export default App;
