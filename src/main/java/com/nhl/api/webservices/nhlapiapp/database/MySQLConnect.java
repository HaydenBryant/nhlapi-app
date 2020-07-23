package com.nhl.api.webservices.nhlapiapp.database;

import com.nhl.api.webservices.nhlapiapp.model.User;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MySQLConnect {

    public static void saveUser(User createdUser) {

        String url = "jdbc:mysql://localhost:3306/hockey_stats";
        String user = "root";
        String password = "Passwordmsql!";

//        String query = "SELECT VERSION()";

        String sql = "INSERT INTO User(name) VALUES(?)";

        try (Connection con = DriverManager.getConnection(url, user, password);

             PreparedStatement pst = con.prepareStatement(sql)) {

            pst.setString(1, createdUser.getName());
            pst.executeUpdate();

            System.out.println("A new user has been inserted");

        } catch (SQLException ex) {

            Logger lgr = Logger.getLogger(MySQLConnect.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
    }
}

