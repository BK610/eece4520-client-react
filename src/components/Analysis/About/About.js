import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function About(props) {
    return (
        <Row>
            <Col>
                Profile image:
                <div className=".profile-picture">
                    <img
                        src={props.user.profileImageUrl}
                        onError={props.handleImageNotFound}/>
                </div>
            </Col>
            <Col>
                <div>
                    name: {props.user.name}
                </div>
                <div>
                    screenname: {props.user.screenName}
                </div>
                <div>
                    location: {props.user.location}
                </div>
            </Col>
            <Col>
                <div>
                    # tweets: {props.user.statusesCount}
                </div>
                <div>
                    # followers: {props.user.followersCount}
                </div>
                <div>
                    # following: {props.user.friendsCount}
                </div>
                <div>
                    # favorites: {props.user.favouritesCount}
                </div>
            </Col>
        </Row>
    )
}