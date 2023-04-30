const express = require('express');
const morgan = require("morgan")
const mongoose = require("mongoose");

const app = express();
const url = `mongodb+srv://manaken:12345@cluster0.vcv4xdr.mongodb.net/BaseDeDatos?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
var systemDb = mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
})

//import inicioRoutes from "../src/routes/inicio.routes.js";

//npm run dev para iniciar
app.use(express.json());
app.use(morgan("dev"));
//app.use(inicioRoutes);

const profesorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
}, {
    versionKey: false 
});
  
const Profesor = mongoose.model('Profesor',profesorSchema, 'Profesor');


app.post('/inicio/:email/:password', (req,res) => {
    console.log("Post inicio middlewhere");
    try {
        let p = new Profesor({
            name: "Prueba",
            email: req.params.email,
            password: req.params.password,
        })
        console.log(req.params);
        res.status(200).json(p.save());
      } catch (error) {
        res.status(500).json(error);
      }
});



app.listen(3000,() => {
    console.log('Server on port 3000');
});

