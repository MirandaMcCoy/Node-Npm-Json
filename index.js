var readJson = require('read-json-file');
var lodash = require('lodash');

readJson('data.json', function(error, data){
    if (error){
        throw error;
    }
    console.log(lodash.map(data.items, 'fname'));
    console.log(lodash.map(data.items, 'lname'));
    console.log(lodash.map(data.items, 'age'));
});