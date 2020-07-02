package com.nhl.api.webservices.nhlapiapp.repository;

import com.nhl.api.webservices.nhlapiapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

}
