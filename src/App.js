import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Review from "./pages/Review";
import Navigation from "./pages/Navigation.js";
import "./pages/Navigation.css";
import "./styles.css";


const App = () => {

  return (
    <>
      <Navigation />

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
        </Switch>
    </>
  )
}


export default App;