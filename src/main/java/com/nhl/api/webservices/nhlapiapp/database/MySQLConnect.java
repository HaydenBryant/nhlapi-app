package com.nhl.api.webservices.nhlapiapp.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

public class MySQLConnect {

    public static void connect(String[] args) {

        String url = "jdbc:mysql://localhost/hockey_stats?useSSL=false";
        String user = "root";
        String password = "passwordMySql!S";

        String query = "SELECT VERSION()";

        try (Connection con = DriverManager.getConnection(url, user, password);
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery(query)) {

            if (rs.next()) {

                System.out.println(rs.getString(1));
            }

        } catch (SQLException ex) {

            Logger lgr = Logger.getLogger(MySQLConnect.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
    }
}

