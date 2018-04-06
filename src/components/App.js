import React, {Component} from 'react';
import "../styles/style.css";
import Home from "./Home";
import {Route, Switch} from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import NavBar from "./NavBar";

class App extends Component {
    render() {
        return (
            <div id="app">
                <NavBar/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
