import axios from 'axios'
import bcrypt from 'bcrypt'

const rounds = 10

class RegistrationService {

    //is all information entered correctly
    


//register user
//try catch
//does user exist(backend)
    hashPass(password){
    bcrypt.hash(password, rounds, (err, hash) => {
        if (err) {
        console.error(err)
        return
    }
    console.log(hash)
    });
}

}

export default new RegistrationService()