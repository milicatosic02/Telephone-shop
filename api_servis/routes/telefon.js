const express = require("express");
const { sequelize, Telefon, Brend, Memorija, TelefonBoja, Boja, StavkaNarudzbine, Narudzbina } = require("../models");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;

route.get("/", async (req, res) => {
     try{
         const telefoni = await Telefon.findAll();
         return res.json(telefoni);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
  route.get("/:id", async (req, res) => {
     try{
         const telefon = await Telefon.findByPk(req.params.id);
         return res.json(telefon);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  
  route.post("/", async (req, res) => {
     try{
         const novTelefon = await Telefon.create(req.body);
         return res.json(novTelefon);
             }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  route.put("/:id", async (req, res) => {
     try{
         const telefon = await Telefon.findByPk(req.params.id);
         telefon.naziv = req.body.naziv;
         telefon.opis = req.body.opis;
         telefon.cena = req.body.cena;
         telefon.kolicina = req.body.kolicina;
         telefon.brend_id = req.body.brend;
         telefon.memorija_id = req.body.memorija_id;
         telefon.save();
         return res.json(telefon);
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
 
  route.delete("/:id", async (req, res) => {
     try{
         const telefon = await Telefon.findByPk(req.params.id);
         telefon.destroy();
         return res.json( telefon.id );
     
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
 
 