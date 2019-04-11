import React from "react";
import About from './About';
import './About.css';
import DefaultPicture from "../../../data/DefaultPicture.jpg"

export default class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleImageNotFound(event) {
        event.target.onerror = null;
        event.target.src=DefaultPicture;
    }

    render() {
        const handlers = {
            handleImageNotFound: this.handleImageNotFound
        };

        return <About {...Object.assign(handlers, this.props)}/>;
    }
}