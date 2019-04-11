import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Followers(props) {
    return (
        <div>
            {props.followers ?
                props.followers
                    .map(follower =>
                        <Row key={follower.id}>
                            <Col>
                                {follower.screenName}
                            </Col>
                            <Col>
                                {follower.overallScore}
                            </Col>
                            <Col>
                                ~Analyze Button~
                            </Col>
                        </Row>
                    )
                : null}
        </div>
    )
}