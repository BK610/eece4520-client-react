import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Analysis from './components/Analysis';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>
                    Bot or Not
                </h1>

                <Router>
                    <div>
                        <input placeholder="Twitter URL or handle"/>
                        <Link to="/analysis">
                            <button>
                                Analyze!
                            </button>
                        </Link>
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
