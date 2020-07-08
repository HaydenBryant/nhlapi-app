import axios from 'axios'
import { API_URL } from '../../Constants'

class UserDataService {
    
    registerUser(user){
        return axios.post(`${API_URL}/register`, user)
    }
}