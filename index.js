//Express Modules
var express = require('express');
var http = require('http');
var app = express();
//Mongo Modules
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    assert = require('assert');


var db = Db('axondb', Server('localhost', 27017));

db.open(function(err, db) {
  var collection = db.collection("axon");
  // Insert a single document
  collection.insert(			  
  {
  	name:'Anthony Ramirez',
  	role:'Project Manager & Product Manager',
  	age:'15',
  	strength:'Public Speaking'
  }
  );


  collection.insert(
  {
  	name:'Elmer',
  	role:'Ux Designer',
  	age:'15',
  	strength:'Solving problems in a very unique way',
  }
  );
  
  collection.insert(
  {
  	name:'Nabil',
  	role:'Developer',
  	age:'15',
  	strength:'Learning new things'
  }
  );

  collection.insert(
  {
  	name:'Bagel',
  	role:'Tech Dog',
  	age:'9',
  	strength:'runs fast'
  }
);



	collection.updateOne({name:'Nabil'}, {name:'Nabil',role:'Developer',age:'87', strength:'Learning new things'}, function(err, res) {
	if (err) throw err;
	console.log("1 record updated");
	});
});

// Hosts Application Via Local Port
app.use(express.static(__dirname));

var port = process.env.PORT || 8080;

var server = app.listen(port , function(){
	console.log("The server is now up and running");
});