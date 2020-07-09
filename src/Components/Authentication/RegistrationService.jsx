import bcryptjs from 'bcryptjs'
// import UserDataService from '../../api/user/UserDataService'
import axios from 'axios'
import { API_URL } from '../../Constants'



class RegistrationService {

//register user
//try catch
//does user exist(backend)
    hashPass(password){
        bcryptjs.genSalt(10, function(err, salt) {
            bcryptjs.hash(password, salt, function(err, hash) {
                return hash;
            });
        });
    }

    registerUser(user){
        // var user = [user]
        console.log("register user")
        // UserDataService.registerUser(user)
        return axios.post(`${API_URL}/register`, user)
    }
}

export default new RegistrationService()