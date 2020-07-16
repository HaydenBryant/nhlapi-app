package com.nhl.api.webservices.nhlapiapp.httpcalls;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

//pass in wanted method as variable to call

public class HttpCallTwo {
    public static void httpCallTwo(){
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://statsapi.web.nhl.com/api/v1/people/8476459")).build();
        client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(HttpResponse::body)
//                .thenApply(Parse::parsePlayer)5
                .join();
    }

}
