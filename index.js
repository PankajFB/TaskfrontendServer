const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// to serve the static files 
app.use(express.static(path.join(__dirname,'client/build')));

// handeling react routing, return all the request to racat app
app.get('/', function(req, res) {   
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});