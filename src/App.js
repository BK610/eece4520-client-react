import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AnalysisContainer from './components/Analysis/index';
import Button from 'react-bootstrap/Button';
import UserService from './services/UserService';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class App extends Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.state = {
            idValue: 0,
        };

        this.handleIdChange = this.handleIdChange.bind(this);

        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }

    handleIdChange(event) {
        this.setState({
            idValue: event.target.value
        })
    }

    handleSubmitUser(event) {
        console.log(this.state.idValue);
        this.setState({
            selectedUser: []
        });
        this.userService
            .checkUserExists(this.state.idValue)
            .then(response => {
                    //TODO: Handle response
                    if(response.ok) {
                        // Go to analysis page
                    } else {
                        // Alert that entered ID is invalid
                    }
                }
            );
    }

    render() {
        return (
            <Container>
                <Router>
                    <h1>
                        Bot or Not
                    </h1>
                    <Row>
                        <div>
                            <input id="idInput"
                                   type="number"
                                   value={this.state.idValue}
                                   onChange={this.handleIdChange}
                                   placeholder="Twitter User ID"/>
                            <Link to="/analysis/"
                                  idValue={this.state.idValue}
                                  userService={this.userService}>
                                <Button id="analyzeButton"
                                        onClick={this.handleSubmitUser}>
                                    Analyze!
                                </Button>
                            </Link>
                        </div>
                    </Row>
                    <Route
                        path="/analysis/"
                        render={(props) =>
                            <AnalysisContainer
                                {...props}
                                idValue={this.state.idValue}
                                userService={this.userService}/>}/>
                </Router>
            </Container>
        );
    }
}

export default App;
