import UserDataService from '../../api/user/UserDataService'



class RegistrationService {

    registerUser(user){
        console.log("register user")
        UserDataService.registerUser(user)
    }
}

export default new RegistrationService()