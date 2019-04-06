import React from "react";
import About from './About';

export default class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("About");
        console.log(this.props);
    }


    render() {
        const handlers = {

        };

        return <About {...Object.assign(handlers, this.props)}/>;
    }
}