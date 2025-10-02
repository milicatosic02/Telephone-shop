const express = require('express');
const cors = require("cors");

const { sequelize, Telefon, Brend, Memorija, TelefonBoja, Boja, StavkaNarudzbine, Narudzbina } = require("./models");

const app = express();
app.use(express.json());

const corsOptions = {
    origin: ['http://localhost:8000', 'http://127.0.0.1:8000','http://localhost:8080', 'http://127.0.0.1:8080'],
  };
  app.use(cors(corsOptions));
  

	app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});

app.put("/promeni-cenu/:id", async (req,res)=>{
	    try{
//dohvati objekat po ID
   	   	const telefon = await Telefon.findByPk(req.params.id);  //iz url
    		telefon.cena = req.body.cena;  //iz body
    	    telefon.save();
    	return res.json(telefon);  //vrati json nove vrednosti jela i završi funkc.
	} catch(err){
    	console.log(err);
    	res.status(500).json({ error: "Greska", data: err });
	}
});


const telefonRoutes = require("./routes/telefon.js");
app.use("/telefon", telefonRoutes);

const bojaRoutes = require("./routes/boja.js");
app.use("/boja", bojaRoutes);

const brendRoutes = require("./routes/brend.js");
app.use("/brend", brendRoutes);

const memorijaRoutes = require("./routes/memorija.js");
app.use("/memorija", memorijaRoutes);

const narudzbinaRoutes = require("./routes/narudzbina.js");
app.use("/narudzbina", narudzbinaRoutes);



app.listen({ port:9000 }, async () => {
	console.log("Started server on localhost:8000");
	await sequelize.sync({force:true});
	console.log("DB synced");
});

