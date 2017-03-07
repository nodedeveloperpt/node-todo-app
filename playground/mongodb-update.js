//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if( err ) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    db.collection('Todos').findOneAndUpdate( {
        _id:new ObjectID('58bed70104e8fc617502acfe')
    },{
        $set : {
            completed:true
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    })

    // findOneAndUpdate
    db.collection('Users').findOneAndUpdate( {
        _id:new ObjectID('XXXXXXXXXXXXXX')
    },{
        $set : {
            name:'AAAAA'
        },
        $inc : {
            age:1
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    })
    //db.close();
});