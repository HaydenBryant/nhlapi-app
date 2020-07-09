package com.nhl.api.webservices.nhlapiapp.model;

//    id INT AUTO_INCREMENT PRIMARY KEY,
//            name VARCHAR(50),
//            username varchar(50),
//            email varchar(255),
//            password varchar(255),
//            favorite_team varchar(100)


import javax.persistence.*;

@Entity
@Table(name = "users")
public class  User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

//    @Column(username = "username")
//    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "favorite_team")
    private String favoriteTeam;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFavoriteTeam() {
        return favoriteTeam;
    }

    public void setFavoriteTeam(String favoriteTeam) {
        this.favoriteTeam = favoriteTeam;
    }
}
