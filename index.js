var MongoClient = require('mongodb');
var url = 'mongodb://localhost:27017/eunimart';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('orders').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 
