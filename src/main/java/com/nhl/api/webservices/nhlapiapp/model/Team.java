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
    private int teamPrimaryColor;

    @Column(teamSecondaryColor = "teamSecondaryColor")
    private int teamSecondaryColor;

    public int getTeamTextColor() {
        return teamTextColor;
    }

    public void setTeamTextColor(int teamTextColor) {
        this.teamTextColor = teamTextColor;
    }

    @Column(teamTextColor = "teamTextColor")
    private int teamTextColor;

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

    public int getTeamPrimaryColor() {
        return teamPrimaryColor;
    }

    public void setTeamPrimaryColor(int teamPrimaryColor) {
        this.teamPrimaryColor = teamPrimaryColor;
    }

    public int getTeamSecondaryColor() {
        return teamSecondaryColor;
    }

    public void setTeamSecondaryColor(int teamSecondaryColor) {
        this.teamSecondaryColor = teamSecondaryColor;
    }
}
