import React from "react";
import About from './About';

export default class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "",
                screenName: "",
                statusesCount: 0,
                followersCount: 0,
                friendsCount: 0,
                favouritesCount: 0,
                url: "",
                location: "",
                geoEnabled: false,
                profileImageUrl: "",
                profileBackgroundImageUrl: "",
                description: ""
            }
        }
    }

    handleFetchUser() {
        this.props.userService
            .findUserById(this.props.idValue)
            .then(user =>
                {this.setState({
                    user: user
                })}
            );
    }

    componentDidMount() {
        console.log("About");
        console.log(this.props);
        console.log(this.state);
        this.handleFetchUser();
    }


    render() {
        const handlers = {
            handleFetchUser: this.handleFetchUser
        };

        return <About {...Object.assign(handlers, this.state)}/>;
    }
}