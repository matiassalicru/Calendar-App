import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  return (
    <div>
      {/* 
        /login - Login Screen
        / - calendar
      */}
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={ LoginScreen } />
            <Route exact path="/" component={ CalendarScreen } />

            <Redirect to='/'/>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
