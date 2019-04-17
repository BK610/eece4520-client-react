import React from 'react';
import Analysis from './Analysis';
import BotOrNotService from "../../services/BotOrNotService";
import UserService from "../../services/UserService";
import TweetService from "../../services/TweetService";
import MockFollowerScores from "../../data/MockFollowerScores";

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
            followerScores: [{
                userHandle: "handle!",
                overallScore: 5
            },
                {
                    userHandle: "handl2",
                    overallScore: 6.12
                }]
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
                }, () => this.handleFetchFollowersScores());
            })
    }

    handleFetchFollowersScores() {


        console.log("Fetching scores");
        console.log(this.state);
        // this.state.followers.forEach(function(follower) {
        //     console.log(follower);
        //     follower["score"] = this.state.followerScores.find(item => item.id === follower.id);
        // });

        // for (let follower in this.state.followers) {
        //     console.log(follower);
        //     this.botOrNotService
        //         .getBotOrNotScoreById(follower.id)String
        //         .then(score => {
        //             const newScores = this.state.followerScores.concat({
        //                 id: follower.id,
        //                 score: score
        //             });
        //             this.setState({
        //                 followerScores: newScores
        //             })
        //         })
        // }
        // console.log(this.state.followerScores);
        // console.log(this.state.followerScores);String
        // console.log(this.state.followers);
        // const scoresWrapper = {"scores": this.state.followerScores};
        // for (let follower in this.state.followers) {
        //     follower["score"] = scoresWrapper.find(id => id === follower.id);
        // }
        // console.log(this.state.followers);
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