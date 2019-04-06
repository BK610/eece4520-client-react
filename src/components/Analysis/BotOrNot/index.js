import React from 'react';
import BotOrNot from './BotOrNot';

export default class BotOrNotContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const handlers = {

        };

        return <BotOrNot {...Object.assign(handlers, this.props)}/>;
    }
}