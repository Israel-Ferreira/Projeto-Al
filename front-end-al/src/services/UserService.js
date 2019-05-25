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

    getUserByName(user){
        axios.defaults.headers.common['x-access-token'] = localStorage.getItem('jwtToken')
        return axios.get(`${this.url}/api/v1/user/me`)
    }

}


export default new UserService()