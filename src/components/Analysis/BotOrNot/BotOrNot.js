import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BotOrNot(props) {
    return (
        <div>
            {props.score ?
                <Row>
                    <Col>
                        overallScore: {props.score.overallScore}
                    </Col>
                </Row>
                : null}
        </div>
    )
}