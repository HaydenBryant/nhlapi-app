package com.nhl.api.webservices.nhlapiapp.parse;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.nhl.api.webservices.nhlapiapp.httpcalls.HttpCallOne.httpCallOne;

public class Parse {
    public static String parsePlayer(String responseBody) throws JSONException {
        JSONObject playerData = new JSONObject(responseBody);
//        JSONArray player = playerData.getJSONArray("people");
        JSONObject playersData = playerData.getJSONArray("people").getJSONObject(0);

        System.out.println(playersData.getString("fullName"));
        return null;
    }

    public static int getTeamRosters(String playersName) throws MalformedURLException, JSONException {

        //this will end up being a method that gathers the team ids into a list for possible future changes to api
        List<Integer> teamIds = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 52, 53, 54));

        for(int i = 1; i <= teamIds.size(); i++){
            JSONObject team = new JSONObject(httpCallOne("https://statsapi.web.nhl.com/api/v1/teams/" + teamIds.get(i) + "/roster"));
            Boolean playerFound = searchRoster(team, playersName);
            if(playerFound == true){
                //return player id
//                System.out.println("Player Found");
                long playerId = findPlayerIdFromRoster(team, playersName);
                System.out.println(playerId);
                break;
            }
        }

        return 1;
    }

    public static Boolean searchRoster(JSONObject team, String playerName) throws JSONException {
        JSONArray roster = team.getJSONArray("roster");


        System.out.println(roster);


        Boolean playerFound = false;

        for (int i = 0; i < roster.length(); i++) {
            JSONObject person = (JSONObject) roster.get(i);
            JSONObject player = (JSONObject) person.get("person");

            if(player.getString("fullName").equals(playerName)){
                playerFound = true;
                break;
            }
        }
        return playerFound;
    }

    public static long findPlayerIdFromRoster(JSONObject team, String playerName) throws JSONException {
        JSONArray roster = team.getJSONArray("roster");


        System.out.println(roster);


        long playerId = 0;

        for (int i = 0; i < roster.length(); i++) {
            JSONObject person = (JSONObject) roster.get(i);
            JSONObject player = (JSONObject) person.get("person");

            if(player.getString("fullName").equals(playerName)){
                playerId = player.getLong("id");
                break;
            }
        }
        return playerId;
    }

//    public static List getTeamIds(String responseBody) throws MalformedURLException {
//        List<Integer> teamIds = new ArrayList<>();
//        httpCallOne("https://statsapi.web.nhl.com/api/v1/teams");
//
//
//
//        return teamIds;
//    }
}
