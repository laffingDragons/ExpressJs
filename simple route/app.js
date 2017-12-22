var express = require('express');
var app = express();

//make this json file as database
var users = require('./users.json');

//getting all data
app.get('/', function (req, res) {
    res.send(users);
})
//getting first name
app.get('/firstRoute', function (req, res) {
    res.send(users[0]);
})
// request parameter
app.get('/users/:userName', function (req, res) {
    console.log(req.params.userName);
    var foundUser = 'no user found';

    for (u in users) {
        if (users[u].userName == req.params.userName)
            foundUser = users[u]
    }
    console.log(foundUser);
    res.send(foundUser);
});

//query parameter

app.get('/users/find/query', function (req, res) {

    console.log(req.query.userName);
    var foundUser = 'No User Found';

    for (u in users) {
        if (users[u].userName == req.params.userName)
            foundUser = users[u]
    }
    console.log(foundUser);
    res.send(foundUser);
});

//linsitening on a port
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
