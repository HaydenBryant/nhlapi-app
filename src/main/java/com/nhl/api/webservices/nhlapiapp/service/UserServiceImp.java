package com.nhl.api.webservices.nhlapiapp.service;

import com.nhl.api.webservices.nhlapiapp.database.MySQLConnect;
import com.nhl.api.webservices.nhlapiapp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



public class UserServiceImp implements UserService{

    @Autowired
    BCryptPasswordEncoder encoder;

    @Autowired
    MySQLConnect mySQLConnect;

    @Override
    public void saveUser(User user) {

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        MySQLConnect mySQLConnect = new MySQLConnect();

        user.setPassword(encoder.encode(user.getPassword()));
        System.out.println(user.getPassword());
        mySQLConnect.saveUser(user);
    }

    @Override
    public boolean isUserAlreadyPresent(User user) {
        return false;
    }
}
