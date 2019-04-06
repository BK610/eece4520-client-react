import React from "react";
import Tweets from './Tweets';

export default class TweetsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handlers = {

        };

        return <Tweets {...Object.assign(handlers, this.props)}/>;
    }
}