import axios from "axios";

export default class UserService{
    static url = "https://jsonplaceholder.typicode.com/users";

    static getAllUsers(){
        return axios.get(UserService.url);
    }

    static getUser(userId){
        return axios.get(`${UserService.url}/${userId}`);
    }
}