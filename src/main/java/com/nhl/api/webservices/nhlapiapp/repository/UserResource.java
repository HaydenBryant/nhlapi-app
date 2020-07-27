package com.nhl.api.webservices.nhlapiapp.repository;

import com.nhl.api.webservices.nhlapiapp.database.MySQLConnect;
import com.nhl.api.webservices.nhlapiapp.model.User;
import com.nhl.api.webservices.nhlapiapp.service.UserService;
import com.nhl.api.webservices.nhlapiapp.service.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserResource {

//    @Autowired
    UserServiceImp userServiceImp;

    @PostConstruct
    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
//        System.out.println(user);

        User createdUser = user;
        System.out.println(createdUser.getName());
        userServiceImp.saveUser(createdUser);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


}
