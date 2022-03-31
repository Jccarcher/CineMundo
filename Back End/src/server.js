const express = require('express')
const cors = require("cors");
const userRoutes = require("./routes/userRoutes")
const seriesRoutes = require("./routes/SerieRoutes.js")
const moviesRouters = require("./routes/MovieRouter.js")


const app = express()
app.set('port', process.env.PORT || 5000);

const listaRutas = ["http://localhost:3000"]

const corsOptions = {
  origin: function(origin, callback) {
    if(!origin || listaRutas.indexOf(origin) !== -1){
        callback(null, true)
    } else {
      callback(new Error("No soportable por CORS"))
    }
  },
  credentials: true
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/users",userRoutes)
app.use("/cinemundo",seriesRoutes)
app.use("/cinemundo",moviesRouters) 



app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });
