package com.nhl.api.webservices.nhlapiapp.model;


import javax.persistence.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(teamName = "teamName")
    private String teamName;

    @Column(teamPrimaryColor = "teamPrimaryColor")
    private String teamPrimaryColor;

    @Column(teamSecondaryColor = "teamSecondaryColor")
    private String teamSecondaryColor;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getTeamPrimaryColor() {
        return teamPrimaryColor;
    }

    public void setTeamPrimaryColor(String teamPrimaryColor) {
        this.teamPrimaryColor = teamPrimaryColor;
    }

    public String getTeamSecondaryColor() {
        return teamSecondaryColor;
    }

    public void setTeamSecondaryColor(String teamSecondaryColor) {
        this.teamSecondaryColor = teamSecondaryColor;
    }
}
