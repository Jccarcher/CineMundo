const express = require('express');
//const cors = require("cors");
const userRoutes = require("../cinemundo/src/routes/UserRoutes.js");
const seriesRoutes = require("../cinemundo/src/routes/SerieRoutes.js");
const moviesRouters = require("../cinemundo/src/routes/MovieRouter.js");
const app = express();


app.set('port', process.env.PORT || 4000);
app.use(express.json())

/* const corsOptions = {
    origin: function(origin, callback) {
      if(!origin || listaRutas.indexOf(origin) !== -1){
          callback(null, true)
      } else {
        callback(new Error("No soportable por CORS"))
      }
    },
    credentials: true
  }; */

//app.use(cors(corsOptions));
//app.use(express.urlencoded({ extended: true }));

app.use("/cinemundo", userRoutes)
app.use("/cinemundo", seriesRoutes)
app.use("/cinemundo", moviesRouters)

app.listen(app.get('port'), () =>{
    console.log("Server listening on port 4000")
})
