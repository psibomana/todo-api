// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://127.0.0.1:27017', {useNewUrlParser: true}, (err, client) => {
  if(err) {
      return console.log('Unable to connect to the mongo db server');
  }
  console.log('Connected to MongoDB');

  db = client.db('TodoApp');

  // deleteMany
  db.collection('Todos')
    .deleteMany({text: 'Eat Lunch'})
    .then((result) => {
      console.log('Delete Many: ', JSON.stringify(result, undefined, 3));
    })
    .catch((err) => {
      console.log("An error occured", err);
    });
  //deleteOne

    // deleteMany
    db.collection('Todos')
      .deleteOne({text: 'Eat Lunch'})
      .then((result) => {
        console.log('Delete One Result: ', JSON.stringify(result, undefined, 3));
      })
      .catch((err) => {
        console.log("An error occured", err);
      });
  //findOneAndDelete
    db.collection('Todos')
      .findOneAndDelete({completed: true})
      .then((result) => {
        console.log('Find One and Delete One Result: ', JSON.stringify(result, undefined, 3));
      })
      .catch((err) => {
        console.log("An error occured", err);
      });

  client.close();
});
