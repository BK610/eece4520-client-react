import React from 'react'
import {Route} from "react-router-dom";
import About from "../About/index";
import BotOrNot from "../BotOrNot/BotOrNot";
import Tweets from "../Tweets/Tweets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Analysis(props) {
    return (
        <div>
            <Container>
                {/*General user information*/}
                {/*Analyzing user: {props.user ? props.user.name : null}*/}
                {/*<Route*/}
                {/*path="/analysis"*/}
                {/*exact*/}
                {/*render={(props) =>*/}
                <h2>
                    About
                </h2>
                <About {...props}
                       userService={props.userService}
                       idValue={props.idValue}/>
                {/*}/>*/}
                {/*</Row>*/}
                <h2>
                    BotOrNot
                </h2>
                {/*BotOrNot analysis*/}
                {/*<Route*/}
                {/*path="/analysis"*/}
                {/*exact*/}
                {/*component={BotOrNot}/>*/}
                <h2>
                    Tweets
                </h2>
                {/*Followers for the analyzed users
                            Maybe make Tweets instead?*/}
                {/*<Route*/}
                {/*path="/analysis"*/}
                {/*exact*/}
                {/*component={Tweets}/>*/}
            </Container>
        </div>
    )
}