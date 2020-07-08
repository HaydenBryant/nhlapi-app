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

    registerUser(name, username, email, password, favoriteTeam){
        var user = [name, username, email, password, favoriteTeam];


    }
}

export default new RegistrationService()