package com.nhl.api.webservices.nhlapiapp.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5Mjk0NDE5MSwiaWF0IjoxNTkyMzM5MzkxfQ.diYzsAoORE1kXG6hNkWVv5MbTiWgUl_wxkI1BNMhzXhiFM1W3oSdVJFhyAgdBapzz5qMlw08Trqa5Fhncjuctw"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
