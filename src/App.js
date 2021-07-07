import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import DatePickers3 from "./Components/Datepickers3";
import Events2 from "./Components/Events2";
const App = () => {

  return (
    
    <Router>
      <Switch>
        <Route exact path = "/" component = {DatePickers3}/>
        <Route exact path = "/404" component = {NotFoundPage}/>
        <Route exact path = "/:month/:day/events" component ={Events2}/>
        <Redirect to = "/404"/>
          </Switch>
    </Router>
  );
};

export default App;
