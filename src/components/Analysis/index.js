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
        console.log("Fetching followers");
        this.userService
            .findAllUsers()
            .then(followers =>
            {
                followers.forEach(function(follower) {
                    follower["score"] = (Math.random() * 10).toPrecision(3);
                    // follower["score"] = this.state.followerScores.find(item => item.id === follower.id).score;
                });
                this.setState({
                    followers: followers.slice(1)
                }, () => this.handleFetchFollowersScores(followers));
            })
    }

    handleFetchFollowersScores(followers) {
        console.log("Fetching scores");
        // this.state.followers.forEach(function(follower) {
        //     console.log(follower);
        //     follower["score"] = this.state.followerScores.find(item => item.id === follower.id);
        // });

        followers.forEach((follower) => {
                this.botOrNotService
                    .getBotOrNotScoreById(follower.id)
                    .then(score => {
                        const newScores = this.state.followerScores.concat({
                            id: follower.id,
                            userHandle: score.userHandle,
                            overallScore: score.overallScore
                        });
                        console.log(newScores);
                        this.setState({
                            followerScores: newScores
                        });
                    })
            });

        console.log(this.state.followerScores);
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