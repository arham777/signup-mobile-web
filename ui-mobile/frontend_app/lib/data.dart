// import 'package:flutter/material.dart';
// import 'package:http/http.dart' as http;
// import 'dart:convert';

// class Data {
//   String baseURL = "http://127.0.0.1:8000/data";

//   Future<List> getData() async {
//     try {
//       var response = await http.get(Uri.parse(baseURL));
//       if (response.statusCode == 200) {
//         return jsonDecode(response.body) as List<dynamic>;
//       } else {
//         return [];
//       }
//     } catch (e) {
//       return [];
//     }
//   }

//   Future<List> postData(dynamic data) async {
//     var response = await http.post(
//       Uri.parse(baseURL),
//       body: jsonEncode(data),
//       headers: {"Content-Type": "application/json"},
//     );

//     try {
//       if (response.statusCode == 201) {
//         debugPrint("Success");
//       } else {
//         debugPrint("Failed");
//       }
//     } catch (e) {
//       debugPrint("Error: $e");
//     }

//     return [];
//   }
// }