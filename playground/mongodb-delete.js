/**
 * Created by nuno_gouveia on 07/03/2017.
 */
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    //db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //    console.log(result);
    //})

    // deleteOne
   //db.collection('Todos').deleteOne({text:'Eat Lunch'}).then( (result) => {
     //   console.log(result);
    //});

    // findOneAndDelete
    //db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
    ///console.log(result);
    //});


    // deleteMany
    db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    });

    // deleteOne
    db.collection('Users').deleteOne({name:'Andrew'}).then( (result) => {
       console.log(result);
    });

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({id:new ObjectID("XXXXXXXXXX")}).then( (results) => {
        console.log(JSON.stringify(results,undefined,2));
    });
    db.close();
});