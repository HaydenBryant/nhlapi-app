package com.nhl.api.webservices.nhlapiapp.database;
import com.nhl.api.webservices.nhlapiapp.model.User;
import java.sql.*;

public class MySQLConnect {

    public void saveUser(User createdUser) {
        try
        {
            String myDriver = "com.mysql.cj.jdbc.Driver";
            String myUrl = "jdbc:mysql://localhost:3306/hockeystats?useSSL=false";
            Class.forName(myDriver);
            Connection conn = DriverManager.getConnection(myUrl, "root", "Passwordmsql!");

            this.addUser(createdUser, conn);

            conn.close();
        }
        catch (Exception e)
        {
            System.err.println("Got an exception!");
            System.err.println(e.getMessage());
        }
    }

    public void addUser(User user, Connection conn)
            throws SQLException
    {
        String query = "INSERT INTO users ("
                + " name,"
                + " username,"
                + " email,"
                + " password,"
                + " favorite_team ) VALUES ("
                + "?, ?, ?, ?, ?)";

        try {
            // set all the preparedstatement parameters
            PreparedStatement st = conn.prepareStatement(query);
            st.setString(1, user.getName());
            st.setString(2, user.getUsername());
            st.setString(3, user.getEmail());
            st.setString(4, user.getPassword());
            st.setString(5, user.getFavoriteTeam());

            // execute the preparedstatement insert
            st.executeUpdate();
            st.close();
        }
        catch (SQLException se)
        {
            // log exception
            throw se;
        }
    }

    public String getFavoriteTeam(User user) throws SQLException{
        try
        {
            String myDriver = "com.mysql.cj.jdbc.Driver";
            String myUrl = "jdbc:mysql://localhost:3306/hockeystats?allowPublicKeyRetrieval=true&useSSL=false";
            Class.forName(myDriver);
            Connection conn = DriverManager.getConnection(myUrl, "root", "Passwordmsql!");

//            String query = "SELECT `users`.`favorite_team` FROM `hockeystats`.`users` where username = '';";
            String query = "SELECT users.favorite_team FROM hockeystats.users where username = ("
                    + " username ) VALUES ("
                    + "?)";

            try{
                PreparedStatement st = conn.prepareStatement(query);
                st.setString(1, user.getUsername());

                st.executeUpdate();
                st.close();
            }
            catch (SQLException se)
            {
                // log exception
                throw se;
            }
        }
        catch (Exception e)
        {
            System.err.println("Got an exception!");
            System.err.println(e.getMessage());
        }
        return "Boston Bruins";
    }

}

