var mongodb = require('mongodb');
var uri = 'mongodb://localhost:27017/movies';
mongodb.MongoClient.connect(uri, function(error, db) {
	if (error) {
	  console.log(error);
	  process.exit(1);
	}
	var doc = [ 
    {
      "title": "Star Wars",
      "year": 1977,
      "director": "George Lucas"
    },
    {
      "title": "The Empire Strikes Back",
      "year": 1980,
      "director": "Irvin Kershner"
    },
    {
      "title": "Return of the Jedi",
      "year": 1983,
      "director": "Richard Marquand"
    },
    {
      "title": "The Phantom Menace",
      "year": 1999,
      "director": "George Lucas"
    }
	];
	db.collection('movies').insert(doc, function(error, result) {
	  if (error) {
		  console.log(error);
		  process.exit(1);
	  }
	  console.log(result);
  });
});
