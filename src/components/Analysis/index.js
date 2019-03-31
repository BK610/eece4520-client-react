import React from 'react';
import Analysis from './Analysis';

export default class AnalysisContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        console.log("Analysis");
        console.log(this.props);
        this.props.history.push("/analysis/" + this.props.idValue)
    }

    render() {
        const handlers = {

        };

        return <Analysis {...Object.assign(handlers, this.props)} />
    }
}