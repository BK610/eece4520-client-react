import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Analysis from './components/Analysis';
import Button from 'react-bootstrap/Button'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>
                    Bot or Not
                </h1>

                <Router>
                    <div>
                        <div>
                            <input placeholder="Twitter User ID"/>
                            <Link to="/analysis">
                                <Button>
                                    Analyze!
                                </Button>
                            </Link>
                        </div>
                        <Route
                            path="/analysis"
                            exact
                            component={Analysis}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
