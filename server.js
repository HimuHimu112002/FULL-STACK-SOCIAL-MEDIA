const app = require('./app');
const DatabaseConnect = require('./src/database/database');


DatabaseConnect()
app.listen(process.env.PORT, function(){
    console.log("Backend server is running success")
})