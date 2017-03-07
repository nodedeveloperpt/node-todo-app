//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if( err ) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id : new ObjectID('58b805dc15bd48324091b9a0')
    // }).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err) => {
    //     console.log('Unable to fetch documents', err);
    // });

    db.collection('Todos').find().toArray().then( (docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch documents', err);
    });

    db.collection('Todos').find({
                _id: new ObjectID('58b805dc15bd48324091b9a0')} ).toArray().then( (docs) => {
        console.log('Only one by ID');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch documents', err);
    });

    db.collection('Todos').find().count().then( (count) => {
        console.log(`Todos Count : ${count}`);
    },(err) => {
        console.log('Unable to fetch documents', err);
    });

    db.collection('Users').find({name:'Andrew'}).toArray().then( (docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch documents', err);
    });

    db.close();
});