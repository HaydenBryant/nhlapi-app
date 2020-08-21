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

    getFavoriteTeam(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        //this needs to send back object with hex code colors for background
        return axios.get(`${API_URL}/favoriteTeam`, user)
    }
}

export default new UserDataService()