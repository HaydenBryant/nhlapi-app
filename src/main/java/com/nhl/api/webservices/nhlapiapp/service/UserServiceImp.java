package com.nhl.api.webservices.nhlapiapp.service;

import com.nhl.api.webservices.nhlapiapp.database.MySQLConnect;
import com.nhl.api.webservices.nhlapiapp.model.User;
import com.nhl.api.webservices.nhlapiapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;


public class UserServiceImp implements UserService{

    @Autowired

    BCryptPasswordEncoder encoder;

//    @Autowired
//    UserRepository userRepository;

    @Autowired
    MySQLConnect mySQLConnect;

    @Override
    public void saveUser(User user) {
//        UserRepository userRepository = new UserRepository() {
//            @Override
//            public List<User> findAll() {
//                return null;
//            }
//
//            @Override
//            public List<User> findAll(Sort sort) {
//                return null;
//            }
//
//            @Override
//            public List<User> findAllById(Iterable<Integer> integers) {
//                return null;
//            }
//
//            @Override
//            public <S extends User> List<S> saveAll(Iterable<S> entities) {
//                return null;
//            }
//
//            @Override
//            public void flush() {
//
//            }
//
//            @Override
//            public <S extends User> S saveAndFlush(S entity) {
//                return null;
//            }
//
//            @Override
//            public void deleteInBatch(Iterable<User> entities) {
//
//            }
//
//            @Override
//            public void deleteAllInBatch() {
//
//            }
//
//            @Override
//            public User getOne(Integer integer) {
//                return null;
//            }
//
//            @Override
//            public <S extends User> List<S> findAll(Example<S> example) {
//                return null;
//            }
//
//            @Override
//            public <S extends User> List<S> findAll(Example<S> example, Sort sort) {
//                return null;
//            }
//
//            @Override
//            public Page<User> findAll(Pageable pageable) {
//                return null;
//            }
//
//            @Override
//            public <S extends User> S save(S entity) {
//                return null;
//            }
//
//            @Override
//            public Optional<User> findById(Integer integer) {
//                return Optional.empty();
//            }
//
//            @Override
//            public boolean existsById(Integer integer) {
//                return false;
//            }
//
//            @Override
//            public long count() {
//                return 0;
//            }
//
//            @Override
//            public void deleteById(Integer integer) {
//
//            }
//
//            @Override
//            public void delete(User entity) {
//
//            }
//
//            @Override
//            public void deleteAll(Iterable<? extends User> entities) {
//
//            }
//
//            @Override
//            public void deleteAll() {
//
//            }
//
//            @Override
//            public <S extends User> Optional<S> findOne(Example<S> example) {
//                return Optional.empty();
//            }
//
//            @Override
//            public <S extends User> Page<S> findAll(Example<S> example, Pageable pageable) {
//                return null;
//            }
//
//            @Override
//            public <S extends User> long count(Example<S> example) {
//                return 0;
//            }
//
//            @Override
//            public <S extends User> boolean exists(Example<S> example) {
//                return false;
//            }
//        };

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        MySQLConnect mySQLConnect = new MySQLConnect();

        user.setPassword(encoder.encode(user.getPassword()));
        System.out.println(user.getPassword());
//        userRepository.save(user);
        mySQLConnect.saveUser(user);
    }

    @Override
    public boolean isUserAlreadyPresent(User user) {
        return false;
    }
}
