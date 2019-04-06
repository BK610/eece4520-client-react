export default class TweetService {
    static instance = null;

    baseUrl = "https://eece4520-server-java.herokuapp.com/api/tweet/";
    static getInstance() {
        if(TweetService.instance === null) {
            TweetService.instance = new TweetService()
        }
        return this.instance
    }

    findTweetsByUserId = userId =>
        fetch(this.baseUrl + "user/" + userId)
            .then(response => response.json());
}