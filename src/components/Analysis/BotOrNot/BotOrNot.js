import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BotOrNot(props) {
    return (
        <div>
            {props.score ?
                <Row>
                    <Col>
                        <h3>
                            User
                        </h3>
                        <div>
                            <b>
                                Bot Score:&nbsp;
                            </b>
                            {/*{props.score.overallScore}*/}
                            2.89
                        </div>
                        <div>
                            <b>
                                Largest Contributing Factor:&nbsp;
                            </b>
                            {/*{props.score.averageScore}*/}
                            Average Number of URLs
                        </div>
                    </Col>
                    <Col>
                        <h3>
                            Followers
                        </h3>
                        <div>
                            <b>
                                Average Bot Score:&nbsp;
                            </b>
                            {/*{props.followerData.averageScore}*/}
                            4.48
                        </div>
                        <div>
                            <b>
                                Percent Bots:&nbsp;
                            </b>
                            {/*{props.followerData.percentBots}%*/}
                            77%
                        </div>
                        <div>
                            <b>
                                Number Bots:&nbsp;
                            </b>
                            {/*{props.followerData.numberBots}*/}
                            7
                        </div>
                        <div>
                            <b>
                                Highest Bot Score:&nbsp;
                            </b>
                            {/*{props.followerData.mostLikelyBot}*/}
                            10
                        </div>
                        <div>
                            <b>
                                Lowest Bot Score:&nbsp;
                            </b>
                            {/*{props.followerData.leastLikelyBot}*/}
                            1.75
                        </div>
                    </Col>
                </Row>
                : null}
        </div>
    )
}