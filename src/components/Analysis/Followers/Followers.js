import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Followers(props) {
    return (
        <div>
            <Row>
                <Col>
                    <h3>
                        Screen Name
                    </h3>
                </Col>
                <Col>
                    <h3>
                        Score
                    </h3>
                </Col>
                <Col>
                </Col>
            </Row>
            {props.followers ?
                props.followers
                    .map(follower =>
                        <Row key={follower.id}>
                            <Col>
                                {follower.screenName}
                            </Col>
                            <Col>
                                {follower.score}
                            </Col>
                            <Col>
                                <Button variant="secondary">
                                    Analyze
                                </Button>
                            </Col>
                        </Row>
                    )
                : null}
        </div>
    )
}