import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AnalysisContainer from './components/Analysis/index';
import HomeContainer from "./components/Analysis/Home/index"
import Container from "react-bootstrap/Container";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Router>
                    <HomeContainer/>
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
