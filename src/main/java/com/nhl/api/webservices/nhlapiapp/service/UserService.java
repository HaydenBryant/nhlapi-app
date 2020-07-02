package com.nhl.api.webservices.nhlapiapp.service;

import com.nhl.api.webservices.nhlapiapp.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public void saveUser(User user);
    public boolean isUserAlreadyPresent(User user);

}
