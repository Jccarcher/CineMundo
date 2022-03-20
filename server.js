const express = require('express')
const {userRoutes} = require("../cinemundo/src/routes/UserRoutes.js")
const {seriesRoutes} = require("../cinemundo/src/routes/SerieRoutes.js")
const {moviesRouters} = require("../cinemundo/src/routes/MovieRouter.js")
const app = express()


app.set('port', process.env.PORT || 4000);
app.use(express.json())

app.use("/cinemundo",userRoutes)
app.use("/cinemundo",seriesRoutes)
app.use("/cinemundo",moviesRouters)

app.listen(app.get('port'), () =>{
    console.log("Server listening on port 4000")
})
