package com.nhl.api.webservices.nhlapiapp.service;

import com.nhl.api.webservices.nhlapiapp.model.User;
import com.nhl.api.webservices.nhlapiapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


public class UserServiceImp {
    @Autowired
    BCryptPasswordEncoder encoder;

    @Autowired
    UserRepository userRepository;

//    @Override
    public void saveUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }

//    @Override
    public boolean isUserAlreadyPresent(User user) {
        return false;
    }
}
