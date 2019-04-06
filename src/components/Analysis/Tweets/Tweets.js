import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Tweets(props) {
    return (
        <div>
            {props.tweets ?
                props.tweets
                    .map(tweet =>
                        <Row key={tweet.id}>
                            <Col>
                                id: {tweet.id}
                            </Col>
                            <Col>
                                text: {tweet.text}
                            </Col>
                        </Row>
                    )
                : null}
        </div>
    )
}