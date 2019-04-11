import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Tweets(props) {
    return (
        <div>
            <Row>
                <Col xs={2}>
                    <b>
                        ID
                    </b>
                </Col>
                <Col xs={10}>
                    <b>
                        Tweet
                    </b>
                </Col>
            </Row>
            {props.tweets ?
                props.tweets
                    .map(tweet =>
                        <Row key={tweet.id}>
                            <Col xs={2}>
                                {tweet.id}
                            </Col>
                            <Col xs={10}>
                                {tweet.text}
                            </Col>
                        </Row>
                    )
                : null}
        </div>
    )
}