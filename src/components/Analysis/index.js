import React from 'react';
import Analysis from './Analysis';
import BotOrNotService from "../../services/BotOrNotService";
import UserService from "../../services/UserService";
import TweetService from "../../services/TweetService";

export default class AnalysisContainer extends React.Component {
    constructor(props) {
        super(props);
        this.userService = UserService.getInstance();
        this.botOrNotService = BotOrNotService.getInstance();
        this.tweetService = TweetService.getInstance();
        this.state = {
            user: {},
            score: {},
            tweets: [],
            followers: []
        }
    }

    componentDidMount() {
        this.handleFetchUser();
        this.handleFetchScore();
        this.handleFetchTweets();
        this.handleFetchFollowers();
    }

    handleFetchUser() {
        this.userService
            .checkUserExists(this.props.match.params.idValue)
            .then(exists => {
                if(!exists) {
                    window.location.replace("/");
                } else {
                    this.userService
                        .findUserById(this.props.match.params.idValue)
                        .then(user =>
                            {this.setState({
                                user: user
                            })}
                        );
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
        this.tweetService
            .findTweetsByUserId(this.props.match.params.idValue)
            .then(tweets =>
                {this.setState({
                    tweets: tweets
                })}
            );
    }

    handleFetchFollowers() {
        this.userService
            .findAllUsers()
            .then(followers =>
            {
                console.log(followers);
                this.setState({
                    followers: followers
                })
            })
    }

    render() {
        const handlers = {
            handleFetchUser: this.handleFetchUser,
            handleFetchScore: this.handleFetchScore,
            handleFetchTweets: this.handleFetchTweets,
            handleFetchFollowers: this.handleFetchFollowers
        };

        return <Analysis {...Object.assign(handlers, this.state)} />
    }
}