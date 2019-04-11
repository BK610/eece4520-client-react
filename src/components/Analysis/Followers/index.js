import React from "react";
import Followers from './Followers';

export default class FollowersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handlers = {

        };

        return <Followers {...Object.assign(handlers, this.props)}/>;
    }
}