const express =require ('express') ;

const app= express() ;


app.use ('/api', function(req, res )
{

res.send ('Hello World') ;

});

const port = process.env.PORT || 5200 ;
 app.listen(port, function () {
    console.log('Server is running..');
});

