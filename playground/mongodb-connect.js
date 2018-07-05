// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to the mongo db server');
  }
  console.log('Connected to MongoDB');

  db = client.db('TodoApp');

  // db.collection('Todos').insert({
  //   text: 'Something to be done',
  //   completed: false
  // }, (err, result) => {
  //     if(err){
  //       return console.log('Unable to insert Todos', err);
  //     }
  //
  //     console.log(JSON.stringify(result, undefined, 3));
  // });

  // db.collection('Users').insert({
  //   name: 'Parfait Pascal',
  //   age: 20,
  //   location: 'Nairobi/Kenya'
  // }, (err, result) => {
  //     if(err){
  //       return console.log('Unable to insert Todos', err);
  //     }
  //
  //       // console.log(JSON.stringify(result.ops, undefined, 3));
  //       console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
