package com.nhl.api.webservices.nhlapiapp.repository;

import com.nhl.api.webservices.nhlapiapp.database.MySQLConnect;
import com.nhl.api.webservices.nhlapiapp.model.User;
import com.nhl.api.webservices.nhlapiapp.service.UserService;
import com.nhl.api.webservices.nhlapiapp.service.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.sql.SQLException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserResource {

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user){
        UserServiceImp userServiceImp = new UserServiceImp();

        User createdUser = user;
//        System.out.println(createdUser.getName());
        userServiceImp.saveUser(createdUser);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("/favoriteTeam")
    public String getFavoriteTeam(@RequestBody User user) throws SQLException {
        MySQLConnect mySQLConnect = new MySQLConnect();

        String favoriteTeam = mySQLConnect.getFavoriteTeam(user);

        return favoriteTeam;
    }


}
