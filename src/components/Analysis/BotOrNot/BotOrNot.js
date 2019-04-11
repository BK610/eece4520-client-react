import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BotOrNot(props) {
    return (
        <div>
            {props.score ?
                <Row>
                    <Col>
                        <b>
                            Overall Score:&nbsp;
                        </b>
                        {props.score.overallScore}
                    </Col>
                    <Col>

                    </Col>
                </Row>
                : null}
        </div>
    )
}