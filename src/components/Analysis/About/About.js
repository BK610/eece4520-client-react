import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function About(props) {
    return (
        <Row>
            <Col>
                <b>
                    Profile Image:
                </b>
                <div className="profile-picture-box">
                    <img
                        className="profile-picture"
                        src={props.user.profileImageUrl}
                        alt=""
                        onError={props.handleImageNotFound}/>
                </div>
            </Col>
            <Col>
                <div>
                    <b>
                        Name:
                    </b>
                    {props.user.name}
                </div>
                <div>
                    <b>
                        Screenname:
                    </b>
                    {props.user.screenName}
                </div>
                <div>
                    <b>
                        Location:
                    </b>
                    {props.user.location}
                </div>
            </Col>
            <Col>
                <div>
                    <b>
                        Tweets:
                    </b>
                    {props.user.statusesCount}
                </div>
                <div>
                    <b>
                        Followers:
                    </b>
                    {props.user.followersCount}
                </div>
                <div>
                    <b>
                        Following:
                    </b>
                    {props.user.friendsCount}
                </div>
                <div>
                    <b>
                        Favorites:
                    </b>
                    {props.user.favouritesCount}
                </div>
            </Col>
        </Row>
    )
}