// Call Express Api.
var express=require('express'),
  
// Call express Session Api.
session = require('express-session'),
  
app=express();
  
// Session Setup
app.use (
    session ({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);
  
// Get function in which send session as routes.
app.get('/session', function(req, res, next) {
  
    if (req.session.views) {
          
      // Increment the number of views.
      req.session.views++
  
      // Print the views.
      res.status(200).json({views: req.session.views}) 
      res.end()
    } else {
      req.session.views = 1
      res.end(' New session is started')
    }
})

app.listen(4500,function(){
    console.log("Express Started on Port 3000");
});

