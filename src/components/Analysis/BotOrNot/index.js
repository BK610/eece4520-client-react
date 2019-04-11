import React from 'react';
import BotOrNot from './BotOrNot';

export default class BotOrNotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            averageScore: 0,
            percentBots: 0,
            numberBots: 0,
            mostLikelyBot: "",
            leastLikelyBot: ""
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.calculateScores();
        }
    }

    calculateScores() {
        this.calculateAverageScore();
    }

    calculateAverageScore() {
        let totalScore = 0;
        this.props.followers.forEach(function(follower) {
            totalScore += follower.score;
        });
        const calculatedAverage = totalScore / this.props.followers.length;
        this.setState({
            averageScore: calculatedAverage
        });
    }

    render() {
        const handlers = {
            calculateScores: this.calculateScores,
            calculateAverageScore: this.calculateAverageScore
        };

        return <BotOrNot {...Object.assign(handlers, this.props)} followerData={this.state}/>;
    }
}