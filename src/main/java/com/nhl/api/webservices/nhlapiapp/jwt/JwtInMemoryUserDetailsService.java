package com.nhl.api.webservices.nhlapiapp.jwt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

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

            String query = "SELECT `users`.`username`, `users`.`id`, `users`.`password` FROM `hockeystats`.`users`;";

            Statement st = conn.createStatement();

            ResultSet rs = st.executeQuery(query);

            while(rs.next()){
                if(!(rs.getString("username").matches(username))) {
                    System.out.println("username doesnt match");
                    continue;
                }

                return new JwtUserDetails(rs.getLong("id"), rs.getString("username"),
                        rs.getString("password"), "ROLE_USER_2");
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