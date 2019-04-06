export default class BotOrNotService {
    static instance = null;

    baseUrl = "https://eece4520-server-java.herokuapp.com/api/botornot/";
    static getInstance() {
        if(BotOrNotService.instance === null) {
            BotOrNotService.instance = new BotOrNotService()
        }
        return this.instance;
    }

    getBotOrNotScoreById = userId =>
        fetch(this.baseUrl + userId)
            .then(response => response.json());
}