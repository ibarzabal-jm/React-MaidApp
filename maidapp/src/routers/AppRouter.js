import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  
import { Navbar } from '../components/ui/Navbar';
import { HomeScreen } from '../components/ui/HomeScreen';
import { AuthRouter } from './AuthRouter';



export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar/>

                <Switch>
                    <Route path="/auth" component={AuthRouter} />

                    <Route exact path="/" component={HomeScreen} />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
