const mongoose = require("mongoose");
const url = `mongodb+srv://manaken:12345@cluster0.vcv4xdr.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

const profesorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});
  
const Profesor = mongoose.model("Profesor",profesorSchema);

export const postInicio = async (req,res) => {
    console.log("Post inicio middlewhere");
    try {
        let p = new Profesor({
            name: "Prueba",
            email: req.params.email,
            password: req.params.password,
        })
        await console.log(req.params);
        await res.status(200).json(await p.save());
      } catch (error) {
        res.status(500).json(error);
    }
};
