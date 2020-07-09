import bcryptjs from 'bcryptjs'
import userDataService from '../../api/user/UserDataService'


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
        userDataService.registerUser(user)
    }
}

export default new RegistrationService()