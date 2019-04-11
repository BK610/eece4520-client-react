import React from 'react'
import About from "./About/index";
import BotOrNot from "./BotOrNot/index";
import Tweets from "./Tweets/index";
import Container from "react-bootstrap/Container";
import Followers from "./Followers/index";

export default function Analysis(props) {
    return (
        <div>
            <Container>
                <h2>
                    About
                </h2>
                <About user={props.user}/>
                <hr/>
                <h2>
                    BotOrNot
                </h2>
                <BotOrNot score={props.score}/>
                <hr/>
                <h2>
                    Tweets
                </h2>
                <Tweets tweets={props.tweets}/>
                <hr/>
                <h2>
                    Followers
                </h2>
                <Followers followers={props.followers}/>
            </Container>
        </div>
    )
}