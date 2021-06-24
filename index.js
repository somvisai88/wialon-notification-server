const request = require("request");
request.get("http://codeforgeek.com",function(error,response,body){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});

const express = require('express');
const app = express();

app.post('/callMe', function(req, res){
    console.log("=======TEST=======");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
    console.log('Our app is running on port ${ PORT }');
});

