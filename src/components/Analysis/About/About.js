import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function About(props) {
    return (
        <Row>
            <Col>
                <b>
                    Profile Image:&nbsp;
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
                        Name:&nbsp;
                    </b>
                    {props.user.name}
                </div>
                <div>
                    <b>
                        Screenname:&nbsp;
                    </b>
                    {props.user.screenName}
                </div>
                <div>
                    <b>
                        Location:&nbsp;
                    </b>
                    {props.user.location}
                </div>
            </Col>
            <Col>
                <div>
                    <b>
                        Tweets:&nbsp;
                    </b>
                    {props.user.statusesCount}
                </div>
                <div>
                    <b>
                        Followers:&nbsp;
                    </b>
                    {props.user.followersCount}
                </div>
                <div>
                    <b>
                        Following:&nbsp;
                    </b>
                    {props.user.friendsCount}
                </div>
                <div>
                    <b>
                        Favorites:&nbsp;
                    </b>
                    {props.user.favouritesCount}
                </div>
            </Col>
        </Row>
    )
}