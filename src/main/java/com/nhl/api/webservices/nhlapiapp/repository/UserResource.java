package com.nhl.api.webservices.nhlapiapp.repository;

import com.nhl.api.webservices.nhlapiapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserResource {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
//        System.out.println(user);

        User createdUser = user;
        System.out.println(createdUser.getName());

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }


}
