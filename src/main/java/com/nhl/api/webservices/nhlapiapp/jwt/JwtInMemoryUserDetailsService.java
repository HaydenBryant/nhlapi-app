package com.nhl.api.webservices.nhlapiapp.jwt;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

    static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

    static {
        inMemoryUserList.add(new JwtUserDetails(2L, "hayden",
                "$2a$10$C85dYjE958kvU2EnKpcm4Oe5T5NEN3.cM49MEor8w/XT9j.Dxb6gK", "ROLE_USER_2"));
    }



//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
//                .filter(user -> user.getUsername().equals(username)).findFirst();
//
//        if (!findFirst.isPresent()) {
//            throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
//        }
//
//        return findFirst.get();
//    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try
        {
            String myDriver = "com.mysql.cj.jdbc.Driver";
            String myUrl = "jdbc:mysql://localhost:3306/hockeystats?useSSL=false";
            Class.forName(myDriver);
            Connection conn = DriverManager.getConnection(myUrl, "root", "Passwordmsql!");

            String query = "SELECT `users`.`username`, `users`.`password` FROM `hockeystats`.`users`;";

            Statement st = conn.createStatement();

            ResultSet rs = st.executeQuery(query);

            System.out.println(rs);

//            if(rs.getString(username) != null){
//
//            }

            System.out.println(username);
            while(rs.next()){
                System.out.println(rs.getString("username"));
                if(!(rs.getString("username").matches(username))){
                    System.out.println("username doesnt match");
                    continue;
                }
                String password = rs.getString("password");
                System.out.println(password);
                return new JwtUserDetails(2L, rs.getString("username"),
                        password, "ROLE_USER_2");
            }

            conn.close();
        }
        catch (Exception e)
        {
            System.err.println("Got an exception!");
            System.err.println(e.getMessage());
        }
        return new JwtUserDetails(2L, "hayden",
                "$2a$10$C85dYjE958kvU2EnKpcm4Oe5T5NEN3.cM49MEor8w/XT9j.Dxb6gK", "ROLE_USER_2");
    }

}