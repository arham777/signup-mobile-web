import 'package:flutter/material.dart';
import 'package:flutter_list_signup/data.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: 'Material App',
      home: MyHomePage(),
    );
  }
}


class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  Data data = Data();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder<List>(
        future: data.getSignupData(),
        builder: (context, snapshot){
          if(snapshot.hasData){
            print(snapshot);
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index){
                return Column(
                  children: [
                    ListTile(
                      title: Text(snapshot.data![index]['username']),
                    ),
                  ],
                );
              }
              );
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
        }
        } 
      ),
    );
  }
}