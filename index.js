const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const PORT = process.env.PORT || 5000;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/app.html'));
});

//add the router
app.use('/', router);
app.listen(PORT, () => console.log(`Listening on Port ${ PORT }`));
