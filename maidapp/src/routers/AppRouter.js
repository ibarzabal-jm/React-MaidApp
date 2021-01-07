import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { HomeScreen } from "../components/containers/HomeScreen";
import { AuthRouter } from "./AuthRouter";
import { MaidList } from "../components/maid/MaidList";
import Footer from "../components/ui/Footer";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/maid" component={MaidList} />
          <Route exact path="/" component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
