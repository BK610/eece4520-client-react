import React from "react";
import Home from "./Home";

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idValue: 0,
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
    }

    handleIdChange(event) {
        this.setState({
            idValue: event.target.value
        });
    }

    handleSubmitUser(event) {
        if(!this.state.idValue || this.state.idValue <= 0) {
            alert("Enter a valid ID.");
        } else {
            this.props.userService
                .checkUserExists(this.state.idValue)
                .then(exists => {
                        if (exists) {
                            window.location.href = "/analysis/"+ this.state.idValue;
                        } else {
                            alert("User with ID " + this.state.idValue + " does not exist.");
                        }
                    }
                );
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        const handlers = {
            handleIdChange: this.handleIdChange,
            handleSubmitUser: this.handleSubmitUser
        };

        return <Home {...Object.assign(handlers, this.state)}/>;
    }
}