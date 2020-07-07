import axios from 'axios'
import bcryptjs from 'bcryptjs'


class RegistrationService {

    //is all information entered correctly
    


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

}

export default new RegistrationService()