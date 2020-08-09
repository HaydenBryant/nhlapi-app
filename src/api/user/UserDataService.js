import axios from 'axios'
import { API_URL } from '../../Constants'

class UserDataService {
    
    registerUser(user){
        console.log("post request")
        return axios.post(`${API_URL}/register`, user)
    }

    loginUser(user){
        return axios.post(`${API_URL}/login`, user)
    }

    getFavoriteTeam(user){
        return axios.get(`${API_URL}/favoriteTeam`, user)
    }
}

export default new UserDataService()