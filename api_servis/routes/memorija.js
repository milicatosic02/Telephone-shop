const express = require("express");
const { sequelize, Telefon, Brend, Memorija, TelefonBoja, Boja, StavkaNarudzbine, Narudzbina } = require("../models");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;

route.get("/", async (req, res) => {
     try{
         const memorije = await Memorija.findAll();
         return res.json(memorije);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
  route.get("/:id", async (req, res) => {
     try{
         const memorija = await Memorija.findByPk(req.params.id);
         return res.json(memorija);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  
  route.post("/", async (req, res) => {
     try{
         const novaMemorija = await Memorija.create(req.body);
         return res.json(novaMemorija);
             }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  route.put("/:id", async (req, res) => {
     try{
         const memorija = await Memorija.findByPk(req.params.id);
         memorija.velicina = req.body.velicina;
         memorija.save();
         return res.json(memorija);
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
 
  route.delete("/:id", async (req, res) => {
     try{
         const memorija = await Memorija.findByPk(req.params.id);
         memorija.destroy();
         return res.json( memorija.id );
     
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
 
 
 
 
 