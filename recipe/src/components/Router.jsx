import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

import GroceryList from "./GroceryList";
import Calendar from "./Calendar";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
      
      {/* For the navigation bar along with the route with the App component */}
      {/* <Route path="/Home" component={Home}/> */}
      <Route path="/GroceryList" component={GroceryList} />
      <Route path="/Calendar" component={Calendar} />
      </Switch>
  </BrowserRouter>
);

export default Router;
