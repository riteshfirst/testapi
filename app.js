const express =require ('express') ;
const sql = require ('mssql') ;
var url = require('url');
const app= express() ;


app.use ('/', function(req, res )
{

res.send ('Hello World') ;

});


 app.listen(4300, function () {
    console.log('Server is running..');
});

