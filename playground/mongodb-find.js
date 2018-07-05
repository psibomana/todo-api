// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to the mongo db server');
  }
  console.log('Connected to MongoDB');

  db = client.db('TodoApp');

  db.collection('Todos')
    .find({
      _id: new ObjectID('5b3cb3e1c3ad516a7a5e1464')
    })
    // .toArray()
    .count()
    .then((documents) => {
      console.log(JSON.stringify(documents, undefined, 3));

    })
    .catch((error) => {
      console.error('Unable to  read documents.')
    });

    db.collection('Users')
      .find({
         name: 'Andrew'
      })
      .toArray()
      // .count()
      .then((documents) => {
        console.log(JSON.stringify(documents, undefined, 3));

      })
      .catch((error) => {
        console.error('Unable to  read documents.')
      });

  client.close();
});
