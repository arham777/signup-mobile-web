import 'dart:convert';

// import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Data {
  String url = 'http://127.0.0.1:8000/api/users/';
  Future<List> getSignupData() async {
    var response = await http.get(Uri.parse(url));
    try{

      if (response.statusCode == 200) {
        return jsonDecode(response.body) as List<dynamic>;
     } else{
      return [];
     }
  } catch(error){
    return [];
  }

}
}