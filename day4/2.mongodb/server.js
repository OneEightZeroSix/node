const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = '1806';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
<<<<<<< HEAD
    assert.equal(null, err);
    console.log("Connected successfully to server");
    //选择库
    const db = client.db(dbName);
    //选择表 集合
    db.collection('students').find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs)
    });
    client.close();
=======
  assert.equal(null, err);
  console.log("Connected successfully to server");
  //选择库
  const db = client.db(dbName);
  //选择表 集合
  db.collection('students').find({
    age: 18
  }).toArray(function (err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
  });
  client.close();
>>>>>>> 450b3332a187cea50aedf0f26ac354afda23dcb7
});