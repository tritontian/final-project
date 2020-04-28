import React from 'react';
import './App.css';
import Home from "./home";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Login from "./Login";


export default class App extends React.Component {


    render () {
        // virtual root element will not be rendered to DOM tree.
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route  path="/" component={Home}/>
                        <Route  path="/Login" component={Login}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
