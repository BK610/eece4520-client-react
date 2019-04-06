import React from 'react';
import Analysis from './Analysis';
import BotOrNotService from "../../services/BotOrNotService";
import UserService from "../../services/UserService";

export default class AnalysisContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.botOrNotService = BotOrNotService.getInstance();
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
            },
            score: 1,
            tweets: []
        }
    }

    componentDidMount() {
        this.handleFetchUser();
        this.handleFetchScore();
        this.handleFetchTweets();
        console.log(this.props);
    }

    handleFetchUser() {
        this.userService
            .checkUserExists(this.props.match.params.idValue)
            .then(exists => {
                if(!exists) {
                    this.props.history.push("/");
                } else {
                    this.userService
                        .findUserById(this.props.match.params.idValue)
                        .then(user =>
                            {this.setState({
                                user: user
                            })});
                }
            });

    }

    handleFetchScore() {
        this.botOrNotService
            .getBotOrNotScoreById(this.props.match.params.idValue)
            .then(score =>
                {this.setState({
                    score: score
                })}
            );
    }

    handleFetchTweets() {

    }

    render() {
        const handlers = {
            handleFetchUser: this.handleFetchUser,
            handleFetchScore: this.handleFetchScore,
            handleFetchTweets: this.handleFetchTweets
        };

        return <Analysis {...Object.assign(handlers, this.state)} />
    }
}