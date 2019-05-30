import axios from 'axios'


class UserService {

    constructor(url){
        this.url = url
    }

    loginUser(user) {
        return axios.post(`${this.url}/authenticate`,user)
    }

    createUser(user){
        return axios.post(`${this.url}/create-user`,user)
    }

    getUserByName(username){
        this._configToken();
        return axios.get(`${this.url}/api/v1/user/me/${username}`)
    }

    updateInformations(user){
        this._configToken()
        return axios.put(`${this.url}/api/v1/user/me/${user.username}/edit`,user)
    }

    _configToken(){
        axios.defaults.headers.common["x-access-token"] = localStorage.getItem("jwtToken");
    }
}


export default new UserService("http://localhost:6590");