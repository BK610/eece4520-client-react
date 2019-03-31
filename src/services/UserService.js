export default class UserService {
    static instance = null;

    baseUrl = "https://eece4520-server-java.herokuapp.com/api/user/";
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    findUserById = userId =>
        fetch(this.baseUrl + userId)
            .then(response => response.json());

    //TODO: Make this real!
    checkUserExists = userId =>
        fetch(this.baseUrl + userId)
            .then(response => response.json());
}