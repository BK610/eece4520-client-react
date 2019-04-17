import React from 'react';
import BotOrNot from './BotOrNot';

export default class BotOrNotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            averageScore: 0,
            percentBots: 0,
            numberBots: 0,
            mostLikelyBot: 0,
            leastLikelyBot: 0
        }
    }

    componentDidMount() {
        this.calculateScores();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.calculateScores();
        }
    }

    calculateScores() {
        this.calculateAverageScore();
        this.calculatePercentBots();
        this.findMostLikelyBot();
        this.findLeastLikelyBot();
    }

    calculateAverageScore() {
        let totalScore = 0;
        this.props.followers.forEach(function(follower) {
            totalScore += follower.overallScore;
        });
        const calculatedAverage = (totalScore / this.props.followers.length).toPrecision(3);
        this.setState({
            averageScore: calculatedAverage
        });
    }

    calculatePercentBots() {
        let numBots = 0;
        this.props.followers.forEach(function(follower) {
            if(follower.overallScore >= 3) {
                numBots++;
            }
        });
        this.setState({
            numberBots: numBots
        });

        const calculatedPercentage = (numBots / this.props.followers.length).toPrecision(3);
        this.setState({
            percentBots: calculatedPercentage
        });
    }

    findMostLikelyBot() {
        const mostLikelyBot = Math.max.apply(Math, this.props.followers.map(function(follower) {return follower.overallScore}));
        this.setState({
            mostLikelyBot: mostLikelyBot
        });
    };

    findLeastLikelyBot() {
        const leastLikelyBot = Math.min.apply(Math, this.props.followers.map(function(follower) {return follower.overallScore}));
        this.setState({
            leastLikelyBot: leastLikelyBot
        });
        console.log(leastLikelyBot);
    }

    render() {
        const handlers = {
            calculateScores: this.calculateScores,
            calculateAverageScore: this.calculateAverageScore,
            calculatePercentBots: this.calculatePercentBots,
            findMostLikelyBot: this.findMostLikelyBot,
            findLeastLikelyBot: this.findLeastLikelyBot
        };

        return <BotOrNot {...Object.assign(handlers, this.props)} followerData={this.state}/>;
    }
}