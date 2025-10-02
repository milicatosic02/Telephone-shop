const express = require("express");
const { sequelize, Telefon, Brend, Memorija, TelefonBoja, Boja, StavkaNarudzbine, Narudzbina } = require("../models");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;

route.get("/", async (req, res) => {
     try{
         const narudzbina = await Narudzbina.findAll();
         return res.json(narudzbina);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
  route.get("/:id", async (req, res) => {
     try{
         const narudzbina = await Narudzbina.findByPk(req.params.id);
         return res.json(narudzbina);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  
  route.post("/", async (req, res) => {
     try{
         const novaNarudzbina = await Narudzbina.create(req.body);
         return res.json(novaNarudzbina);
             }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  route.put("/:id", async (req, res) => {
     try{
         const narudzbina = await Narudzbina.findByPk(req.params.id);
         narudzbina.vreme_narucivanja = req.body.vreme_narucivanja;
         narudzbina.zakazano_vreme = req.body.zakazano_vreme;
         narudzbina.status = req.body.status;
         narudzbina.adresa = req.body.adresa;
         narudzbina.broj_telefona = req.body.broj_telefona;
         narudzbina.ime_prezime = req.body.ime_prezime;
         narudzbina.save();
         return res.json(narudzbina);
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
 
  route.delete("/:id", async (req, res) => {
     try{
         const narudzbina = await Narudzbina.findByPk(req.params.id);
         narudzbina.destroy();
         return res.json( narudzbina.id );
     
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
 
 