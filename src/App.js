import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AnalysisContainer from './components/Analysis/index';
import HomeContainer from "./components/Home/index"
import UserService from './services/UserService';
import Container from "react-bootstrap/Container";

class App extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.state = {
            idValue: 0,
        };

        this.redirect = this.redirect.bind(this);
    }

    redirect(idValue) {
        window.location.href = "/analysis/"+ idValue;
    }

    render() {
        return (
            <Container>
                <Router>
                    <HomeContainer
                        userService={this.userService}
                        redirect={this.redirect}/>
                    <Route
                        path="/analysis/:idValue"
                        exact
                        render={(props) => (
                            <AnalysisContainer {...props}/>
                        )}/>
                </Router>
            </Container>
        );
    }
}

export default App;
