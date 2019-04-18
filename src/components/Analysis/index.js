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
            followers: [],
            followerScores: []
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
                    tweets: tweets.slice(0, 10)
                })}
            );
    }

    handleFetchFollowers() {
        this.userService
            .findAllUsers()
            .then(followers =>
            {
                this.setState({
                    followers: followers.slice(1)
                }, () => this.handleFetchFollowersScores(followers));
            })
    }

    handleFetchFollowersScores(followers) {
        followers.forEach((follower) => {
                this.botOrNotService
                    .getBotOrNotScoreById(follower.id)
                    .then(score => {
                        const newScores = this.state.followerScores.concat({
                            id: follower.id,
                            userHandle: score.userHandle,
                            overallScore: score.overallScore
                        });
                        this.setState({
                            followerScores: newScores
                        });
                    })
            });
    }

    render() {
        const handlers = {
            handleFetchUser: this.handleFetchUser,
            handleFetchScore: this.handleFetchScore,
            handleFetchTweets: this.handleFetchTweets,
            handleFetchFollowers: this.handleFetchFollowers,
            handleFetchFollowersScores: this.handleFetchFollowersScores
        };

        return <Analysis {...Object.assign(handlers, this.state)} />
    }
}