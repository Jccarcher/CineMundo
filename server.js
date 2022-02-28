const express = require('express')
const userRoutes = require("../cinemundo/src/routes/UserRoutes")
const app = express()


app.set('port', process.env.PORT || 4000);
app.use(express.json())

app.use("/users",userRoutes)

app.listen(app.get('port'), () =>{
    console.log("Server listening on port 4000")
})
