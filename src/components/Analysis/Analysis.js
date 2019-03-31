import React from 'react'
import {Route} from "react-router-dom";
import About from "./About/About";
import BotOrNot from "./BotOrNot/BotOrNot";
import Followers from "./Followers/Followers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Analysis extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        {/*General user information*/}
                        <Route
                            component={About}/>
                    </Row>
                    <Row>
                        {/*BotOrNot analysis*/}
                        <Route
                            component={BotOrNot}/>
                    </Row>
                    <Row>
                        {/*Followers for the analyzed users
                            Maybe make Tweets instead?*/}
                        <Route
                            component={Followers}/>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Analysis;