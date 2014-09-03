var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});


var createUser = function() {
    console.log('Create User')
};
var updateUser = function() {
    console.log('Update User')
};
var getUser = function() {
    console.log('Read User')
};
var deleteUser = function() {
    console.log('Read User')
};


//users module
module.exports = function() {
    return {
        createUser: createUser,
        updateUser: updateUser,
        getUser: getUser,
        deleteUser: deleteUser
    }
}
