const express = require("express");
const { sequelize, Telefon, Brend, Memorija, TelefonBoja, Boja, StavkaNarudzbine, Narudzbina } = require("../models");
const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));
module.exports = route;

route.get("/", async (req, res) => {
     try{
         const brendovi = await Brend.findAll();
         return res.json(brendovi);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 
  route.get("/:id", async (req, res) => {
     try{
         const brend = await Brend.findByPk(req.params.id);
         return res.json(brend);
         
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  
  route.post("/", async (req, res) => {
     try{
         const novBrend = await Brend.create(req.body);
         return res.json(novBrend);
             }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
  route.put("/:id", async (req, res) => {
     try{
         const brend = await Brend.findByPk(req.params.id);
         brend.naziv = req.body.naziv;
         brend.save();
         return res.json(brend);
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
  
 
  route.delete("/:id", async (req, res) => {
     try{
         const brend = await Brend.findByPk(req.params.id);
         brend.destroy();
         return res.json( brend.id );
     
     }catch(err){
          console.log(err);
          res.status(500).json({ error: "Greska", data: err });
     }
  });
 