const express = require('express');
const app = express();

app.post('/callMe', function(req, res){
    console.log("=======TEST=======");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> {
    console.log('Our app is running on port ${ PORT }');
});

