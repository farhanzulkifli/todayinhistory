import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import DatePickers3 from "./Components/Datepickers3";
import Births from "./Components/Births";
import Deaths from "./Components/Deaths";
import Events3 from "./Components/Events3";

const App = () => {
  return (
    
    <Router>
      <Switch>
        <Route exact path = "/" component = {DatePickers3}/>
        <Route exact path = "/404" component = {NotFoundPage}/>
        <Route exact path = "/:month/:day/events" component ={Events3}/>
        <Route exact path = "/:month/:day/births" component ={Births}/>
        <Route exact path = "/:month/:day/deaths" component ={Deaths}/>
        <Redirect to = "/404"/>
          </Switch>
    </Router>
  );
};

export default App;
